<template>
  <SectionLayout heading="Working with POST request">
    <div class="max-w-heroMax mx-auto">
      <SignupForm class="w-full" @validated="onValidated" />
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
            class="flex items-center justify-center appearance-none bg-transparent m-0 w-5 h-5 border border-[#D0CFCF] rounded-full before:w-2.5 before:h-2.5 before:rounded-full before:bg-[#00BDD3] before:transform before:scale-0 before:block before:transition-all checked:before:scale-100 checked:border-[#00BDD3] cursor-pointer"
            type="radio"
            name="position"
            v-model="pickedPosition"
            :value="position.id"
            :id="`position-${position.id}`"
          />
          <label
            :for="`position-${position.id}`"
            class="ml-3 select-none cursor-pointer text-black text-opacity-[87] text-base leading-[26px]"
            >{{ position.name }}</label
          >
        </div>
      </div>
      <div class="w-full flex items mb-[50px]">
        <input type="file" id="upload" hidden @change="onFileUpload" />
        <label
          for="upload"
          class="text-base rounded-l-[4px] leading-[26px] border border-black border-opacity-[87%] px-[15px] py-[13px] cursor-pointer"
          >Upload</label
        >
        <span
          id="file-chosen"
          class="flex-1 border border-[#D0CFCF] px-[15px] py-[13px] border-l-0 rounded-r-[4px] truncate"
          :class="[
            file && file.name
              ? 'text-black text-opacity-[87%]'
              : 'text-[#7E7E7E]',
          ]"
          >{{ file && file.name ? file.name : "Upload your photo" }}</span
        >
      </div>
      <MainButton class="mx-auto" :disabled="!isButtonEnabled"
        >Sign up</MainButton
      >
    </div>
  </SectionLayout>
</template>

<script>
import SignupForm from "@/components/Common/SignupForm.vue";
import SectionLayout from "@/components/layouts/SectionLayout.vue";
export default {
  name: "SignupSection",
  data() {
    return {
      file: null,
      positions: [],
      pickedPosition: null,
      isFormValid: false,
    };
  },
  components: {
    SectionLayout,
    SignupForm,
  },
  methods: {
    onFileUpload(e) {
      const file = e.target.files[0];

      if (!file) return;

      this.file = file;
    },
    onValidated(isValid) {
      if (isValid) {
        return (this.isFormValid = true);
      }

      this.isFormValid = false;
    },
  },
  computed: {
    isButtonEnabled() {
      return (
        this.isFormValid && this.file && this.file?.name && this.pickedPosition
      );
    },
  },
  async mounted() {
    const response = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
    );
    const { positions } = await response.json();

    this.positions = positions;
    this.pickedPosition = positions[0]?.id;
  },
};
</script>
