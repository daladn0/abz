<template>
  <div class="relative group" :class="{ 'select-none': removeSelection }">
    <slot />
    <span
      ref="tooltip"
      class="max-w-[88vw] truncate opacity-0 pointer-events-none group-hover:delay-300 transition-all group-hover:opacity-100 absolute left-1/2 transform -translate-x-1/2 top-full text-white text-base line-height-[26px] bg-black bg-opacity-[87%] rounded-[4px] py-[3px] px-4"
      >{{ label }}</span
    >
  </div>
</template>
<script>
export default {
  name: "ToolTip",
  props: {
    label: {
      type: String,
      require: true,
    },
    removeSelection: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    const tooltip = this.$refs.tooltip;
    const styles = tooltip.getBoundingClientRect();
    const bodyWidth = document.body.getBoundingClientRect().width;

    if (styles.left <= 10) {
      tooltip.style.transform = "unset";
      tooltip.style.left = "0";
    }

    if (styles.left + styles.width >= bodyWidth) {
      tooltip.style.transform = "unset";
      tooltip.style.left = "unset";
      tooltip.style.right = "10px";
    }
  },
};
</script>
