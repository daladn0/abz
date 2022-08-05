<template>
  <section
    class="relative pt-[40px] phone-hor:pt-0 w-full min-h-[500px] laptop:min-h-[650px] flex flex-col items-center phone-hor:justify-center bg-heroBG bg-center bg-cover after:absolute after:inset-0 after:bg-black after:z-10 after:bg-opacity-50 text-white"
  >
    <div
      class="text-white z-20 max-w-full px-4 phone-hor:px-0 phone-hor:max-w-heroMax text-center"
    >
      <h1 class="text-[40px] leading-none text-center mb-[21px]">
        Test assignment for front-end developer
      </h1>
      <h3
        class="text-base leading-[26px] text-center mb-8 line-clamp line-clamp-7"
      >
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </h3>
      <MainButton @clicked="scrollTo('#signup')" type="primary" class="mx-auto"
        >Sign up</MainButton
      >
    </div>
  </section>
</template>

<script>
import { scrollTo } from "@/utils/scrollTo";
export default {
  name: "HeroComponent",
  methods: {
    scrollTo,
  },
};
</script>
