<template>
  <div>
    <div class="relative">
      <input
        @change="onFileUpload"
        :accept="accept"
        name="image"
        type="file"
        id="upload"
        hidden
      />
      <span
        v-if="fileError"
        class="absolute top-full left-4 text-xs leading-[14px] text-error mt-1 whitespace-nowrap"
        >{{ fileError }}</span
      >
    </div>
    <label
      for="upload"
      class="block text-base rounded-l-[4px] leading-[26px] border border-black border-opacity-[87%] px-[15px] py-[13px] cursor-pointer"
    >
      <PreLoader class="w-6 h-6 mx-[14px] my-px" v-if="isLoading" />
      <span v-else>Upload</span>
    </label>
    <span
      id="file-chosen"
      class="flex-1 border border-[#D0CFCF] px-[15px] py-[13px] border-l-0 rounded-r-[4px] truncate"
      :class="[
        file && file.name ? 'text-black text-opacity-[87%]' : 'text-[#7E7E7E]',
      ]"
      >{{ file && file.name ? file.name : "Upload your photo" }}</span
    >
  </div>
</template>
<script>
import { validateImage } from "@/utils/validation";

export default {
  name: "FileUpload",
  props: {
    accept: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      file: null,
      fileError: null,
      isLoading: false,
    };
  },
  methods: {
    async onFileUpload(e) {
      const file = e.target.files[0];

      if (!file) return;

      this.fileError = null;

      const fr = new FileReader();

      this.isLoading = true;

      fr.onload = () => {
        const img = new Image();

        img.onload = () => {
          this.isLoading = false;

          const { size } = file;
          const validationResult = validateImage({
            size,
            width: img.width,
            height: img.height,
          });

          console.log(validationResult);

          if (validationResult !== true) {
            this.fileError = validationResult;
          }

          this.file = file;
        };

        img.src = fr.result;
      };

      fr.readAsDataURL(file);
    },
  },
  watch: {
    fileError() {
      if (!this.fileError && this.file) {
        this.$emit("uploaded", this.file);
      } else if (this.fileError) {
        this.$emit("uploaded", null);
      }
    },
  },
};
</script>
