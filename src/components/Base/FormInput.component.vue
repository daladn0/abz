<template>
  <div class="relative text-base leading-[26px]">
    <p
      class="absolute z-20 left-3 px-1 bg-transparent duration-100 ease-linear pointer-events-none transform before:absolute before:left-0 before:top-1/2 before:w-full before:h-0.5 before:bg-[#f8f8f8] before:z-[-1] -mt-px"
      :class="[
        inputActive
          ? 'top-0 text-xs leading-[14px] -translate-y-1/2 font-semibold'
          : 'top-1/2 -translate-y-1/2 text-base leading-[26px] font-normal',
        errorMessage ? 'text-error' : 'text-[#7e7e7e]',
      ]"
    >
      {{ label }}
    </p>
    <input
      :maxlength="maxlength"
      :value="modelValue"
      :type="type"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="inputActive = true"
      @blur="onInputBlur($event)"
      placeholder=""
      v-bind="field"
      class="w-full block border rounded-[4px] px-4 py-[13px] outline-none bg-transparent"
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
  },
};
</script>
