<template>
  <div class="bg-white p-5 rounded-[10px]">
    <!-- avatar -->
    <ToolTip
      :label="user.name"
      :removeSelection="true"
      class="w-[70px] h-[70px] mx-auto mb-5"
    >
      <img
        class="w-full h-full rounded-full object-cover"
        @error="$emit('failedImg', user.id)"
        :src="user.photo"
        :alt="user.name"
      />
    </ToolTip>

    <!-- user name -->
    <ToolTip :label="user.name" :removeSelection="true">
      <p
        class="bock max-w-full truncate text-center text-black text-opacity-[87%] text-base leading-[26px] mb-5"
      >
        {{ user.name }}
      </p>
    </ToolTip>

    <!-- user info -->
    <ToolTip
      class="w-fit max-w-full mx-auto"
      v-for="property in properties"
      :key="property"
      :label="user[property]"
      :removeSelection="true"
    >
      <p
        class="bock max-w-full truncate text-center text-black text-opacity-[87%] text-base leading-[26px]"
      >
        {{ user[property] }}
      </p>
    </ToolTip>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      properties: ["position", "email", "phone"],
    };
  },
};
</script>
