<template>
  <SectionLayout heading="Working with GET request">
    <!-- users grid -->
    <div
      class="grid grid-cols-1 justify-items-center phone-hor:grid-cols-2 gap-5 phone-hor:gap-4 laptop:grid-cols-3 laptop:gap-[29px] mb-[50px]"
    >
      <transition-group name="list">
        <UserCard
          class="user-card w-[360px] max-w-full phone-hor:w-full"
          v-for="user in users"
          @failedImg="onImgFail"
          :key="user.id"
          :user="user"
        />
      </transition-group>
    </div>

    <MainButton
      class="mx-auto min-w-[120px]"
      v-if="nextLink"
      @click="fetchUsers"
      :isLoading="isLoading"
      >Show more</MainButton
    >
  </SectionLayout>
</template>
<script>
import { get } from "@/api/apiMethods";
import { withAsync } from "@/utils/withAsync";
import { searchQueries } from "@/utils/searchQueries";
import UserCard from "@/components/Common/UserCard.vue";
import SectionLayout from "@/layouts/SectionLayout.vue";
export default {
  name: "UsersSection",
  components: {
    UserCard,
    SectionLayout,
  },
  data() {
    return {
      users: [],
      page: 1,
      offset: 0,
      limit: 6,
      nextLink: null,
      isLoading: false,
    };
  },
  methods: {
    onImgFail(id) {
      const foundUser = this.users.find((user) => user.id === id);

      if (foundUser) {
        foundUser.photo = require("@/assets/images/default-avatar.svg");
      }
    },
    generateQueries() {
      const queries = {
        page: this.page,
        offset: this.offset,
        count: this.limit,
      };

      const queryString = searchQueries(queries);

      this.nextLink = "/users";

      if (queryString) {
        this.nextLink = `/users?${queryString}`;
      }
    },
    async fetchUsers() {
      // don't do anything if posts are already being loaded
      if (this.isLoading) return;

      this.isLoading = true;
      const { response, error } = await withAsync(get, this.nextLink);
      this.isLoading = false;

      if (response) {
        this.users = [...this.users, ...response.data.users].sort(
          (user1, user2) => {
            // sorting by creation date
            console.log(
              user2.registration_timestamp - user1.registration_timestamp
            );

            return user2.registration_timestamp - user1.registration_timestamp;
          }
        );

        if (response.data.links.next_url) {
          // if there is next link then increment current page and increase the offset by page limit
          this.offset += this.limit;
          this.page += 1;

          // generate new queries with updated page and offset
          this.generateQueries();
        } else {
          // if there is no link then simply assign its value to null
          this.nextLink = null;
        }
      }

      if (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.generateQueries();
  },
  async mounted() {
    this.fetchUsers();
  },
};
</script>
