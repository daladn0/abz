<template>
  <div class="bg-white p-5 rounded-[10px]">
    <!-- avatar -->
    <div class="w-[70px] h-[70px] mx-auto mb-5">
      <img
        class="w-full h-full rounded-full object-cover"
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        alt="Something"
      />
    </div>

    <!-- user name -->
    <p
      class="bock max-w-full truncate text-center text-black text-opacity-[87%] text-base leading-[26px] mb-5"
    >
      Salvador Stewart Flynn Thomas Salva SalveSalvador Stewart Flynn Thomas
      Salva SalveSalvador Stewart Flynn Thomas Salva Salve
    </p>

    <!-- user info -->
    <ToolTip label="markkostevych@gmail.com" :removeSelection="true">
      <p
        class="bock max-w-full truncate text-center text-black text-opacity-[87%] text-base leading-[26px]"
      >
        ssssssssssssssssssssssssssssssssssssssssssssssssssssssss
      </p>
    </ToolTip>
    <p
      class="bock max-w-full truncate text-center text-black text-opacity-[87%] text-base leading-[26px]"
    >
      ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
    </p>
    <p
      class="bock max-w-full truncate text-center text-black text-opacity-[87%] text-base leading-[26px]"
    >
      ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
    </p>
  </div>
</template>

<script>
export default {
  name: "UserCard",
};
</script>
