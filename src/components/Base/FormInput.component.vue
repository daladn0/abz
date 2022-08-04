<template>
  <div class="relative text-base leading-[26px]">
    <p
      class="absolute z-20 left-4 px-1 bg-transparent duration-100 ease-linear pointer-events-none transform before:absolute before:left-0 before:top-1/2 before:w-full before:bg-white before:z-[-1]"
      :class="[
        inputActive
          ? 'top-0 text-xs leading-[14px] -translate-y-1/2 font-semibold'
          : 'top-1/2 -translate-y-1/2 text-base leading-[26px] font-normal',
        errorMessage
          ? 'before:h-0.5 -mt-px text-error'
          : 'before:h-px text-[#7e7e7e]',
      ]"
    >
      {{ label }}
    </p>
    <input
      :maxlength="maxlength"
      :value="modelValue"
      :type="type"
      @input="onInput($event.target.value)"
      @focus="inputActive = true"
      @blur="onInputBlur($event)"
      placeholder=""
      v-bind="field"
      class="w-full block border rounded-[4px] px-4 py-[14px] outline-none"
      :class="[
        errorMessage
          ? 'border-error focus:ring-1 ring-error'
          : 'border-[#D0CFCF]',
      ]"
    />
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: ["modelValue", "field", "errorMessage", "type", "label", "maxlength"],
  data() {
    return {
      inputActive: false,
    };
  },
  methods: {
    onInputBlur($event) {
      if ($event.target.value) return;
      this.inputActive = false;
    },
    onInput(value) {
      this.$emit("update:modelValue", value);
      this.$emit("input");
    },
  },
};
</script>
