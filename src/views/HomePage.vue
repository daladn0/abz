<template>
  <div>
    <HeaderComponent />
    <div class="app-container">
      <Hero />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Common/Header.component.vue";
import Hero from "@/components/Common/Hero.component.vue";
export default {
  name: "HomePage",
  components: {
    HeaderComponent,
    Hero,
  },
};
</script>
