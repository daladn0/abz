<template>
  <section class="pt-[140px]">
    <!-- heading/title -->
    <h2
      class="text-center text-heading leading-none text-black text-opacity-[87%] max-w-4xl truncate mx-auto mb-[50px]"
    >
      {{ heading }}
    </h2>
    <slot />
  </section>
</template>

<script>
export default {
  name: "SectionLayout",
  props: {
    heading: {
      type: String,
    },
  },
};
</script>
