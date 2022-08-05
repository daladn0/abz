<template>
  <div class="pb-[100px] relative">
    <HeaderComponent class="sticky top-0 z-30" />
    <Hero class="w-full max-w-[1170px] mx-auto" />
    <div class="app-container">
      <Users id="users" />
      <Signup id="signup" />
    </div>

    <!-- go up -->
    <transition name="fade">
      <button
        v-if="goTopVisible"
        @click="onGoTop"
        class="fixed z-20 bottom-8 right-8 block p-1 text-white rounded-full bg-primary transition-all hover:bg-[#FFE302]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 11l7-7 7 7M5 19l7-7 7 7"
          />
        </svg>
      </button>
    </transition>
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
  data() {
    return {
      goTopVisible: false,
    };
  },
  methods: {
    onGoTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      if (window.scrollY > 500) {
        this.goTopVisible = true;
      } else {
        this.goTopVisible = false;
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
