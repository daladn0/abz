<template>
  <SectionLayout :heading="heading">
    <div class="w-full max-w-heroMax mx-auto" v-if="signupSuccess">
      <img src="@/assets/images/success.svg" class="w-full" />
    </div>
    <div class="max-w-heroMax mx-auto" v-else>
      <SignupForm ref="form" class="w-full" @validated="onValidated" />

      <PreLoader
        class="w-10 h-10 mx-auto mb-10 mt-12"
        v-if="isPositionsLoading"
      />

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

      <span
        v-if="signupError"
        class="font-bold text-error text-xs text-center mx-auto block mb-2"
        >{{ signupError }}</span
      >
      <ToolTip class="mx-auto w-fit" :label="formLabel">
        <MainButton
          :isLoading="isSignupLoading"
          :disabled="!isButtonEnabled"
          @click="onSignUp"
          >Sign up</MainButton
        >
      </ToolTip>
    </div>
  </SectionLayout>
</template>

<script>
import { get, post } from "@/api/apiMethods";
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

      isSignupLoading: false,
      signupError: null,
      signupErrorList: [],

      signupSuccess: false,
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
    async onSignUp() {
      this.isSignupLoading = true;

      const formData = new FormData();

      formData.append("name", this.formBody?.name);
      formData.append("email", this.formBody?.email);
      formData.append("phone", `+38${this.formBody?.phone}`);
      formData.append("position_id", this.pickedPosition);
      formData.append("photo", this.file);

      const { response, error } = await withAsync(post, "/users", formData);

      this.isSignupLoading = false;

      if (response) {
        this.signupSuccess = true;
        setTimeout(() => {
          this.$emit("signedUp");
        }, 1000);
      }

      if (error) {
        console.log(error);
        this.signupError = error.response.data.message;
      }
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
    heading() {
      return this.signupSuccess
        ? "User successfully registered"
        : "Working with POST request";
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
