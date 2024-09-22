<template>
  <!-- hero section -->
  <section class="w-full bg-clr-black flex justify-center items-end">
    <div class="px-4 sm:px-8 lg:px-12 xl:px-2 max-w-screen-xl w-full text-clr-black mt-32">
      <!-- page navigation links -->
      <div>
        <ul class="flex items-center text-fs-small text-clr-white font-medium tracking-widest mb-16">
          <li>
            <RouterLink to="/" class="hover:text-clr-accent"> HOME </RouterLink>
          </li>
          <span class="text-fs-normal mx-4">/</span>
          <li>
            <RouterLink to="" class="text-clr-gray">SERVICES</RouterLink>
          </li>
        </ul>
      </div>
      <h1 class="mb-14 text-clr-white">
        <span class="text-fs-36 md:text-fs-44 lg:text-fs-larger font-medium leading-tight lg:leading-[6rem]">
          This is <span class="font-thin">what</span><br />
          we do <span class="font-thin">best</span>
        </span>
      </h1>

      <div class="flex items-center gap-8">
        <RouterLink to="#" class="text-fs-small flex items-center gap-4 group text-clr-accent">
          <span class="tracking-widest font-medium">VIEW SERVICES</span>
          <span
            class="w-10 h-10 bg-clr-gray-dark rounded-full text-transparent flex items-center justify-center group-hover:scale-[1.15] transition-all ease-in-out duration-500 rotate-90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF9800"
              class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </RouterLink>
      </div>
    </div>
  </section>

  <section class="w-full bg-clr-black flex justify-center items-end">
    <div
      class="px-4 sm:px-8 lg:px-12 xl:px-2 max-w-screen-xl w-full flex items-center gap-10 text-clr-white py-12 lg:py-28">
      <!-- left side  -->
      <div class="hidden lg:block w-2/5"></div>
      <!-- right side  -->
      <div class="w-full lg:w-3/5 flex flex-col justify-between lg:p-4">
        <!-- first part -->
        <div class="flex flex-col md:flex-row gap-8 pt-8">
          <div class="lg:mt-14 lg:p-4">
            <RouterLink to="">
              <h4 class="customAnimate text-fs-medium font-medium leading-tight mb-8">
                <span> Branding and <br />Identity Design </span>
              </h4>
              <p class="customAnimate text-clr-gray font-medium w-4/5 lg:w-full">
                <span>
                  Our creative agency is a team of professionals focused on
                  helping your brand grow.
                </span>
              </p>
              <ul class="flex flex-col gap-8 my-10 text-clr-gray-light font-medium">
                <li class="customAnimate ">
                  UX AUDITS
                </li>
                <li class="customAnimate ">
                  DESIGN THINKING
                </li>
                <li class="customAnimate ">
                  METHODOLOGIES
                </li>
                <li class="customAnimate ">
                  WIREFRAMING
                </li>
              </ul>
              <div class="customAnimate flex items-center gap-8 ">
                <RouterLink to="#" class="text-fs-small flex items-center gap-4 group text-clr-accent">
                  <span class="tracking-widest font-medium">READ MORE</span>
                  <span
                    class="w-10 h-10 bg-clr-gray-dark rounded-full text-transparent flex items-center justify-center group-hover:scale-[1.15] transition-all ease-in-out duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="#FF9800" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </RouterLink>
              </div>
            </RouterLink>
          </div>

          <div class="lg:p-4">
            <RouterLink to="">
              <h4 class="customAnimate text-fs-medium font-medium leading-tight mb-8">
                <span> Website Design <br />an Development </span>
              </h4>
              <p class="customAnimate text-clr-gray font-medium w-4/5 lg:w-full">
                <span>
                  Our creative agency is a team of professionals focused on
                  helping your brand grow.
                </span>
              </p>
              <ul class="flex flex-col gap-8 my-10 text-clr-gray-light font-medium">
                <li class="customAnimate text-[14px] ">
                  UX AUDITS
                </li>
                <li class="customAnimate text-[14px] ">
                  DESIGN THINKING
                </li>
                <li class="customAnimate text-[14px] ">
                  METHODOLOGIES
                </li>
                <li class="customAnimate text-[14px] ">
                  WIREFRAMING
                </li>
              </ul>
              <div class="fcustomAnimate lex items-center gap-8 ">
                <RouterLink to="#" class="text-fs-small flex items-center gap-4 group text-clr-accent">
                  <span class="tracking-widest font-medium">READ MORE</span>
                  <span
                    class="w-10 h-10 bg-clr-gray-dark rounded-full text-transparent flex items-center justify-center group-hover:scale-[1.15] transition-all ease-in-out duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="#FF9800" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </RouterLink>
              </div>
            </RouterLink>
          </div>
        </div>

        <!-- second part -->
        <div class="flex flex-col md:flex-row gap-8 pt-8">
          <div class="lg:mt-14 lg:p-4">
            <RouterLink to="">
              <h4 class="customAnimate text-fs-medium font-medium leading-tight mb-8">
                <span> Advertising and <br />Marketing Compaigns </span>
              </h4>
              <p class="customAnimate text-clr-gray font-medium w-4/5 lg:w-full">
                <span>
                  Our creative agency is a team of professionals focused on
                  helping your brand grow.
                </span>
              </p>
              <ul class="flex flex-col gap-8 my-10 text-[14px] text-clr-gray-light font-medium">
                <li class="customAnimate ">
                  UX AUDITS
                </li>
                <li class="customAnimate ">
                  DESIGN THINKING
                </li>
                <li class="customAnimate ">
                  METHODOLOGIES
                </li>
                <li class="customAnimate ">
                  WIREFRAMING
                </li>
              </ul>
              <div class="customAnimate flex items-center gap-8 ">
                <RouterLink to="#" class="text-fs-small flex items-center gap-4 group text-clr-accent">
                  <span class="tracking-widest font-medium">READ MORE</span>
                  <span
                    class="w-10 h-10 bg-clr-gray-dark rounded-full text-transparent flex items-center justify-center group-hover:scale-[1.15] transition-all ease-in-out duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="#FF9800" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </RouterLink>
              </div>
            </RouterLink>
          </div>

          <div class="lg:p-4">
            <RouterLink to="">
              <h4 class="customAnimate text-fs-medium font-medium leading-tight mb-8">
                <span> Creative Consulting <br />Concept Developmenet </span>
              </h4>
              <p class="customAnimate text-clr-gray font-medium w-4/5 lg:w-full">
                <span>
                  Our creative agency is a team of professionals focused on
                  helping your brand grow.
                </span>
              </p>
              <ul class="flex flex-col gap-8 my-10 text-[14px] text-clr-gray-light font-medium">
                <li class="customAnimate ">
                  UX AUDITS
                </li>
                <li class="customAnimate ">
                  DESIGN THINKING
                </li>
                <li class="customAnimate ">
                  METHODOLOGIES
                </li>
                <li class="customAnimate ">
                  WIREFRAMING
                </li>
              </ul>
              <div class="customAnimate flex items-center gap-8 ">
                <RouterLink to="#" class="text-fs-small flex items-center gap-4 group text-clr-accent">
                  <span class="tracking-widest font-medium">READ MORE</span>
                  <span
                    class="w-10 h-10 bg-clr-gray-dark rounded-full text-transparent flex items-center justify-center group-hover:scale-[1.15] transition-all ease-in-out duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="#FF9800" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </RouterLink>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="w-full bg-clr-gray-lighter py-12 lg:py-28 flex justify-center items-center overflow-hidden">
    <div class="px-4 sm:px-8 lg:px-12 xl:px-2 max-w-screen-xl w-full flex flex-col items-center">
      <div class="w-full ">
        <!-- upper text -->
        <div class="customAnimate text-clr-gray-light w-full lg:w-4/5 mb-12 text-center lg:text-right relative">
          <span>
            Looking to make your mark? We'll help you turn <br />
            your project into a success story.
          </span>
          <div class="hidden lg:block absolute ml-6 top-3 left-full h-[1px] w-[600px] bg-clr-gray-light"></div>
        </div>
        <!-- section headers -->
        <div class="text-center mb-4 lg:mb-8">
          <h2 class="customAnimate text-fs-36 md:text-fs-44 lg:text-fs-large leading-snug text-clr-black font-medium">
            Ready to bring your
            <span class="font-thin">ideas to </span>life?<br />
            whe're <span class="font-thin">here to help</span>
          </h2>
        </div>
        <div class="customAnimate w-full flex justify-center">
          <MainBtn />
        </div>
      </div>
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
