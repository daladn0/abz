<template>
  <div class="pb-[100px]">
    <HeaderComponent />
    <div class="app-container">
      <Hero />
      <Users />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Sections/Header.component.vue";
import Hero from "@/components/Sections/Hero.component.vue";
import Users from "@/components/Sections/Users.component.vue";
export default {
  name: "HomePage",
  components: {
    HeaderComponent,
    Hero,
    Users,
  },
};
</script>
