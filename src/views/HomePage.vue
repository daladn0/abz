<template>
  <div>
    <HeaderComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Common/Header.component.vue";
export default {
  name: "HomePage",
  components: {
    HeaderComponent,
  },
};
</script>

<style>
@import "@/styles/tailwind.css";
@import "@/styles/global.scss";
</style>
