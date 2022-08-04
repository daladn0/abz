<template>
  <button
    @click="$emit('clicked')"
    class="block min-w-[100px] py-1 px-[19px] leading-[26px] text-base cursor-pointer rounded-3xl transition-all text-black"
    :class="{
      'text-back text-opacity-[87%] bg-primary hover:bg-[#FFE302] disabled:text-white disabled:bg-[#B4B4B4] disabled:hover:bg-[#B4B4B4]':
        type === 'primary',
    }"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: "MainButton",
  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
};
</script>
