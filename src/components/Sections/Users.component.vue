<template>
  <SectionLayout heading="Working with GET request">
    <!-- users grid -->
    <div class="grid grid-cols-3 gap-[29px] mb-[50px]">
      <UserCard v-for="i in 6" :key="i" />
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
