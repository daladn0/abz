<template>
  <SectionLayout heading="Working with POST request">
    <div class="max-w-heroMax mx-auto">
      <SignupForm class="w-full" @validated="onValidated" />

      <PreLoader class="w-12 h-12 mx-auto" v-if="isPositionsLoading" />

      <div v-else-if="isPositionsError" class="mt-10 mb-8 text-error">
        Something went wrong. Couldn't load positions.
      </div>
      <PositionsRadio
        v-else
        @picked="pickedPosition = $event"
        :positions="positions"
        class="w-full mt-11 mb-[50px]"
      />

      <FileUploading
        class="w-full flex items mb-[50px]"
        accept="image/jpeg,image/jpg"
        @uploaded="file = $event"
      />

      <ToolTip class="mx-auto w-fit" :label="formLabel">
        <MainButton :disabled="!isButtonEnabled">Sign up</MainButton>
      </ToolTip>
    </div>
  </SectionLayout>
</template>

<script>
import { get } from "@/api/apiMethods";
import { withAsync } from "@/utils/withAsync";
import SignupForm from "@/components/Common/SignupForm.vue";
import SectionLayout from "@/layouts/SectionLayout.vue";
import PositionsRadio from "@/components/Common/PositionsRadio.vue";
import FileUploading from "@/components/Common/FileUploading.vue";
export default {
  name: "SignupSection",
  data() {
    return {
      file: null,
      positions: [],
      pickedPosition: null,

      isFormValid: false,
      formBody: null,

      isPositionsLoading: false,
      isPositionsError: null,
    };
  },
  components: {
    SectionLayout,
    SignupForm,
    PositionsRadio,
    FileUploading,
  },
  methods: {
    onValidated(isValid, formBody) {
      this.formBody = formBody;

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
    formLabel() {
      if (!this.isFormValid) return "Form is not valid";
      if (!this.pickedPosition) return "Position is not selected";
      if (!this.file) return "Avatar is not uploaded";
      return "";
    },
  },
  async mounted() {
    this.isPositionsLoading = true;
    const { response, error } = await withAsync(get, "positions");
    this.isPositionsLoading = false;

    if (response) {
      this.positions = response.data.positions;
      this.pickedPosition = response.data.positions[0]?.id;
    }

    if (error) {
      this.isPositionsError = error;
    }
  },
};
</script>
