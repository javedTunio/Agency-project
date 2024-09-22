<template>
  <router-link to="#"
    class="w-[150px] lg:w-[230px] h-[50px] lg:h-[70px] pr-2 lg:pr-4 bg-clr-accent hover:bg-clr-accent-light  rounded-full flex items-center justify-end text-black text-fs-small font-medium group transition-all ease-in-out duration-500">
    <span class="tracking-widest  transition-all ease-in-out duration-500">WHAT WE DO</span>
    <span
      class="size-8 lg:size-10 bg-clr-black rounded-full text-transparent flex items-center justify-center ml-2 lg:ml-8 group-hover:scale-[1.15] transition-all ease-in-out duration-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF9800"
        class="size-4 lg:size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </span>
  </router-link>
</template>

<script>
export default {
  name: "MainBtn",
};
</script>
