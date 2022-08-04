<template>
  <div class="pb-[100px]">
    <HeaderComponent />
    <Hero class="w-full max-w-[1170px] mx-auto" />
    <div class="app-container">
      <Users />
      <Signup />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Sections/Header.component.vue";
import Hero from "@/components/Sections/Hero.component.vue";
import Users from "@/components/Sections/Users.component.vue";
import Signup from "@/components/Sections/Signup.component.vue";
export default {
  name: "HomePage",
  components: {
    HeaderComponent,
    Hero,
    Users,
    Signup,
  },
};
</script>
