<template>
  <SectionLayout heading="Working with GET request">
    <!-- users grid -->
    <div
      class="grid grid-cols-1 justify-items-center phone-hor:grid-cols-2 gap-5 phone-hor:gap-4 laptop:grid-cols-3 laptop:gap-[29px] mb-[50px]"
    >
      <UserCard
        class="w-[360px] max-w-full phone-hor:w-full"
        v-for="i in 6"
        :key="i"
      />
    </div>

    <MainButton class="mx-auto min-w-[120px]">Show more</MainButton>
  </SectionLayout>
</template>
<script>
import UserCard from "@/components/Common/UserCard.vue";
import SectionLayout from "@/components/layouts/SectionLayout.vue";
export default {
  name: "UsersSection",
  components: {
    UserCard,
    SectionLayout,
  },
};
</script>
