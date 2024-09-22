<template>
  <section class="w-full bg-clr-white flex justify-center items-end">
    <div class="px-4 sm:px-8 lg:px-12 xl:px-2 max-w-screen-xl w-full text-clr-black mt-32 ">
      <!-- page navigation links -->
      <div>
        <ul class="flex items-center justify-center text-fs-small font-medium tracking-widest mb-16">
          <li>
            <RouterLink to="/" class="hover:text-clr-accent"> HOME </RouterLink>
          </li>
          <span class="text-fs-normal mx-4">/</span>
          <li>
            <RouterLink to="" class="text-clr-gray">CONTACT</RouterLink>
          </li>
        </ul>
      </div>
      <h1 class="mb-14 leading-10 text-center">
        <span class="text-fs-36 md:text-fs-44 lg:text-fs-larger font-medium leading-[6rem]">
          Get in touch!
        </span>
      </h1>

      <div class="flex items-center justify-center gap-8">
        <RouterLink to="#" class="text-fs-small flex items-center gap-4 group">
          <span class="tracking-widest font-medium">SEND MESSAGE</span>
          <span
            class="w-10 h-10 bg-clr-gray-light rounded-full text-transparent flex items-center justify-center group-hover:scale-[1.15] transition-all ease-in-out duration-500 rotate-90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000"
              class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
  <!-- google map   -->
  <section class="w-full bg-clr-white flex justify-center items-end pt-12 lg:pt-28">
    <iframe class="w-full h-[60vh] grayscale"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14111.774114972837!2d67.89551480207962!3d27.842272666090036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3934ee79124a3401%3A0xbe2a652c5f4409c7!2sShahd%C4%81dkot%2C%20Qambar%20Shahdadkot%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1708970508820!5m2!1sen!2s"
      style="border: 0" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </section>

  <section class="w-full bg-clr-white flex justify-center items-end">
    <div class="px-4 sm:px-8 lg:px-12 xl:px-2 max-w-screen-xl w-full text-clr-black py-12 lg:py-28">
      <h1 class="text-clr-black text-fs-36 lg:text-[42px] font-medium text-center mb-16">
        let's <span class="font-thin">talk</span>
      </h1>
      <form class="w-full text-[14px] font-medium ">
        <div class="flex flex-col md:flex-row gap-8 mb-4">
          <div class="w-full lg:flex border-b-[1px] border-clr-gray-light">
            <input class="block w-full p-4 lg:p-8 placeholder:text-fs-small" type="text"
              placeholder="WHAT'S YOUR NAME" />
          </div>
          <div class="w-full lg:flex border-b-[1px] border-clr-gray-light">
            <input class="block w-full p-4 lg:p-8 placeholder:text-fs-small" type="email" placeholder="YOUR EMAIL" />
          </div>
        </div>
        <div class="w-full ">
          <textarea class="w-full p-4 lg:p-8 mb-8 border-b-[1px] border-clr-gray-light placeholder:text-fs-small columns-6"
            placeholder="TELL US ABOUT YOUR PROJECT"  rows="10"></textarea>
        </div>
        <div class="flex justify-between items-center">
          <p class=" text-clr-gray-light "><span class="text-clr-accent">*</span> We promise not to disclose your
            personal information to third parties.</p>
          <button>
            <MainBtn />
          </button>
        </div>
      </form>
    </div>
  </section>

  <!-- footer  -->
  <MainFooter />
</template>
<script>
// @ is an alias to /src
import MainBtn from "@/components/MainBtn.vue";
import MainFooter from "@/components/MainFooter.vue";
//mixin
import FadeInMixin from "@/mixins/fadeInMixin.js";

export default {
  name: "HomeView",
  mixins: [FadeInMixin],
  components: {
    MainBtn,
    MainFooter,
  },
};
</script>
