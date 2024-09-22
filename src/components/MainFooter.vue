<template>
  <footer class="w-full bg-clr-black py-12 lg:py-28 flex justify-center items-center overflow-hidden">
    <div class="px-4 max-w-screen-xl w-full flex flex-col items-center text-clr-white">
      <div class="w-full flex flex-col lg:flex-row gap-8">
        <div class="flex-1">
          <RouterLink to="" class="customAnimate block text-[42px] font-medium mb-4 ">A.</RouterLink>
          <p class="customAnimate text-clr-gray-light mb-4 lg:mb-8">Subscribe our newsletter:</p>

          <form
            class="customAnimate w-[360px] h-[70px] rounded-full bg-clr-gray-dark flex items-center justify-between px-4 transition-all duration-300 focus-within:bg-clr-white">
            <input
              class="w-full h-full bg-transparent ml-4 focus:outline-none placeholder:text-fs-small placeholder:tracking-widest text-clr-black"
              type="email" name="email" placeholder="ENTER YOUR EMIAL" />
            <button>
              <span
                class="w-10 h-10 bg-clr-accent rounded-full text-transparent flex items-center justify-center hover:scale-[1.15] transition-all ease-in-out duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="#000000" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </button>
          </form>
        </div>
        <div class="flex-1 flex flex-col md:flex-row gap-8">
          <nav class="customAnimate flex-1">
            <ul class="flex flex-col gap-2">
              <li>
                <RouterLink to="/" class="p-1 inline-block font-medium text-fs-medium duration-300" :class="{
                  'text-clr-accent translate-x-2': $route.path === '/',
                  'text-clr-white hover:text-clr-accent hover:translate-x-2': $route.path !== '/',
                }">
                  Home
                </RouterLink>
              </li>

              <li>
                <RouterLink to="/portfolio" class="p-1 inline-block font-medium text-fs-medium duration-300" :class="{
                  'text-clr-accent translate-x-2': $route.path === '/portfolio',
                  'text-clr-white hover:text-clr-accent hover:translate-x-2': $route.path !== '/portfolio',
                }">
                  Portfolio
                </RouterLink>
              </li>

              <li>
                <RouterLink to="/services" class="p-1 inline-block font-medium text-fs-medium duration-300" :class="{
                  'text-clr-accent translate-x-2': $route.path === '/services',
                  'text-clr-white hover:text-clr-accent hover:translate-x-2': $route.path !== '/services',
                }">
                  Services
                </RouterLink>
              </li>

              <li>
                <RouterLink to="/contact" class="p-1 inline-block font-medium text-fs-medium duration-300" :class="{
                  'text-clr-accent translate-x-2': $route.path === '/contact',
                  'text-clr-white hover:text-clr-accent hover:translate-x-2': $route.path !== '/contact',
                }">
                  Contact
                </RouterLink>
              </li>
            </ul>

          </nav>
          <div class="flex-1">
            <ul class="customAnimate flex flex-col gap-2">
              <li class="">
                <RouterLink to=""
                  class="p-1 inline-block text-fs-normal text-clr-gray hover:text-clr-white duration-300 hover:translate-x-2">
                  Privacy policy </RouterLink>
              </li>
              <li class="">
                <RouterLink to=""
                  class="p-1 inline-block text-fs-normal text-clr-gray hover:text-clr-white duration-300 hover:translate-x-2">
                  Turms and conditions
                </RouterLink>
              </li>
              <li class="">
                <RouterLink to=""
                  class="p-1 inline-block text-fs-normal text-clr-gray hover:text-clr-white duration-300 hover:translate-x-2">
                  Cookie policy </RouterLink>
              </li>
              <li class="">
                <RouterLink to=""
                  class="p-1 inline-block text-fs-normal text-clr-gray hover:text-clr-white duration-300 hover:translate-x-2">
                  Careers </RouterLink>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
//mixin
import FadeInMixin from "@/mixins/fadeInMixin.js";
export default {
  name: "MainFooter",
  mixins: [FadeInMixin],
};
</script>
<style>
/* "customAnimate " => use this class to animate element */
.customFadeIn {
  transform: translateY(0);
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

.customFadeOut {
  transform: translateY(20%);
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
</style>
