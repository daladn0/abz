<template>
  <Form class="space-y-[50px]" v-slot="{ meta: { valid } }" ref="form">
    <Field
      name="username"
      :rules="validateUsername"
      v-slot="{ field, errorMessage }"
    >
      <div class="relative">
        <FormInput
          class="w-full"
          type="text"
          label="Your name"
          v-model="name"
          @input="checkValidation(valid)"
          :field="field"
          :errorMessage="errorMessage"
        />
        <span
          class="absolute left-4 top-full block mt-1 text-xs leading-relaxed text-error"
          v-if="errorMessage"
          >{{ errorMessage }}</span
        >
      </div>
    </Field>
    <Field name="email" :rules="validateEmail" v-slot="{ field, errorMessage }">
      <div class="relative">
        <FormInput
          type="email"
          label="Email"
          v-model="email"
          @input="checkValidation(valid)"
          :field="field"
          :errorMessage="errorMessage"
        />
        <span
          class="absolute left-4 top-full block mt-1 text-xs leading-relaxed text-error"
          >{{ errorMessage }}</span
        >
      </div>
    </Field>

    <Field name="phone" :rules="validatePhone" v-slot="{ field, errorMessage }">
      <div class="relative">
        <FormInput
          label="Phone"
          v-model="phone"
          @input="checkValidation(valid)"
          :field="field"
          :errorMessage="errorMessage"
          :maxlength="10"
        />
        <span
          class="absolute left-4 top-full block mt-0.5 text-xs leading-relaxed"
          :class="[errorMessage ? 'text-error' : 'text-[#747474]']"
          >{{ pattern }}</span
        >
      </div>
    </Field>
  </Form>
</template>
<script>
import { Form, Field, configure } from "vee-validate";

configure({
  validateOnInput: true,
});

import {
  validateUsername,
  validateEmail,
  validatePhone,
} from "@/utils/validation";
export default {
  name: "SignupForm",
  components: {
    Form,
    Field,
  },
  methods: {
    validateEmail,
    validateUsername,
    validatePhone,
    checkValidation(valid) {
      const formBody = {
        name: this.name,
        email: this.email,
        phone: this.phone,
      };
      if (valid) {
        return this.$emit("validated", true, formBody);
      }

      this.$emit("validated", false, formBody);
    },
  },
  data() {
    return {
      inputActive: false,
      name: "",
      email: "",
      phone: "",
      pattern: "+38 (XXX) XXX - XX - XX",
    };
  },
  watch: {
    phone() {
      this.pattern = "+38 (XXX) XXX - XX - XX";
      this.phone.split("").forEach((char) => {
        this.pattern = this.pattern.replace("X", char);
      });
    },
  },
};
</script>
