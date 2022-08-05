<template>
  <header class="bg-white h-[60px] flex items-center justify-between">
    <div class="app-container flex items-center justify-between h-full">
      <button
        type="button"
        @click="handleScroll"
        class="flex h-full items-center"
      >
        <img src="@/assets/images/Logo.svg" class="block w-[104px] h-auto" />
      </button>

      <div class="flex items-center justify-between space-x-2.5">
        <MainButton @click="scrollTo('#users')">Users</MainButton>
        <MainButton @click="scrollTo('#signup')">Sign up</MainButton>
      </div>
    </div>
  </header>
</template>

<script>
import { scrollTo } from "@/utils/scrollTo";
export default {
  name: "HeaderComponent",
  methods: {
    scrollTo,
    handleScroll() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
