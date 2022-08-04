<template>
  <header class="bg-white h-[60px] flex items-center justify-between">
    <div class="app-container flex items-center justify-between h-full">
      <router-link
        :to="{ name: 'home' }"
        aria-label="logo"
        class="flex h-full items-cente"
      >
        <img src="@/assets/images/Logo.svg" class="block w-[104px] h-auto" />
      </router-link>

      <div class="flex items-center justify-between space-x-2.5">
        <MainButton>Users</MainButton>
        <MainButton>Sign up</MainButton>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
