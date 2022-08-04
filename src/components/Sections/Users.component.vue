<template>
  <section class="pt-[140px]">
    <!-- heading/title -->
    <h2
      class="text-center text-heading leading-none text-black text-opacity-[87%] max-w-4xl truncate mx-auto mb-[50px]"
    >
      Working with GET request
    </h2>

    <!-- users grid -->
    <div class="grid grid-cols-3 gap-[29px] mb-[50px]">
      <UserCard v-for="i in 6" :key="i" />
    </div>

    <MainButton class="mx-auto min-w-[120px]">Show more</MainButton>
  </section>
</template>
<script>
import UserCard from "@/components/Common/UserCard.vue";
export default {
  name: "UsersSection",
  components: {
    UserCard,
  },
};
</script>
