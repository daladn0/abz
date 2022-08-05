<template>
  <div class="w-full mt-11 mb-[50px]">
    <p class="text-base leading-[26px] text-black text-opacity-[87%] mb-2">
      Select your position
    </p>

    <div
      class="flex items-center mt-[7px]"
      tabindex="-1"
      v-for="position in positions"
      :key="position.id"
    >
      <input
        tabindex="-1"
        class="flex-shrink-0 flex items-center justify-center appearance-none bg-transparent m-0 w-5 h-5 border border-[#D0CFCF] rounded-full before:w-2.5 before:h-2.5 before:rounded-full before:bg-[#00BDD3] before:transform before:scale-0 before:block before:transition-all checked:before:scale-100 checked:border-[#00BDD3] cursor-pointer"
        type="radio"
        name="position"
        v-model="pickedPosition"
        :value="position.id"
        :id="`position-${position.id}`"
      />
      <label
        :for="`position-${position.id}`"
        class="truncate ml-3 select-none cursor-pointer text-black text-opacity-[87] text-base leading-[26px]"
        >{{ position.name }}</label
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "PositionsRadio",
  props: ["positions"],
  data() {
    return {
      pickedPosition: this.positions[0]?.id,
    };
  },
  watch: {
    pickedPosition() {
      this.$emit("picked", this.pickedPosition);
    },
  },
};
</script>
