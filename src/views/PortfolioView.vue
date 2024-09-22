<template>
  <!-- hero section -->
  <section class="w-full bg-clr-white flex justify-center items-end">
    <div class="px-4 max-w-screen-xl w-full text-clr-black mt-32">
      <!-- page navigation links -->
      <div>
        <ul class="flex items-center text-fs-small font-medium tracking-widest mb-16">
          <li>
            <RouterLink to="/" class="hover:text-clr-accent"> HOME </RouterLink>
          </li>
          <span class="text-fs-normal mx-4">/</span>
          <li>
            <RouterLink to="" class="text-clr-gray">PORTFOLIO</RouterLink>
          </li>
        </ul>
      </div>
      <h1 class="mb-14 leading-10">
        <span class="text-fs-36 md:text-fs-58 lg:text-fs-larger font-medium lg:leading-[6rem]">
          Designing a<br />
          Better <span class="font-thin">World Today</span>
        </span>
      </h1>

      <div class="flex items-center gap-8">
        <RouterLink to="#" class="text-fs-small flex items-center gap-4 group">
          <span class="tracking-widest font-medium">VIEW WORKS</span>
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

  <section class="w-full bg-clr-white flex justify-center items-end">
    <div class="px-4 max-w-screen-xl w-full text-clr-black py-12 lg:py-28">
      <!-- projects 2 -->
      <div class="w-full flex flex-col lg:flex-row  items-center justify-between">
        <div class="w-full lg:w-2/5 p-2">
          <RouterLink to="" class="block w-full group">
            <div class="w-full overflow-hidden mb-8 h-[620px]">
              <img class="customAnimate block h-full object-cover group-hover:scale-110 duration-500"
                src="../assets/images/project-1.jpg" alt="blog image" />
            </div>
            <div>
              <div class="customAnimate text-fs-small font-medium mb-4">
                <span class="text-clr-accent mr-6">DESIGN</span>
                <span class="text-clr-gray-light">DECEMBER 2, 2023</span>
              </div>
              <!-- blog title  -->
              <h4 class="customAnimate text-fs-medium font-medium mb-4">
                Interior design studio
              </h4>
            </div>
          </RouterLink>
        </div>
        <div class="w-full lg:w-1/2 p-2">
          <RouterLink to="" class="block w-full group">
            <div class="w-full overflow-hidden mb-8">
              <img class="customAnimate block w-full group-hover:scale-110 duration-500"
                src="../assets/images/project-2.jpg" alt="blog image" />
            </div>
            <div>
              <div class="customAnimate text-fs-small font-medium mb-4">
                <span class="text-clr-accent mr-6">DESIGN</span>
                <span class="text-clr-gray-light">DECEMBER 2, 2023</span>
              </div>
              <!-- blog title  -->
              <h4 class="customAnimate text-fs-medium font-medium mb-4">
                Home Security Camera
              </h4>
            </div>
          </RouterLink>
        </div>
      </div>
      <!-- projects 4-->
      <div class="w-full flex flex-col lg:flex-row items-center justify-between">
        <div class="w-full lg:w-1/2 p-2">
          <RouterLink to="" class="block w-full group">
            <div class="w-full overflow-hidden mb-8">
              <img class="customAnimate block w-full group-hover:scale-110 duration-500"
                src="../assets/images/project-3.jpg" alt="blog image" />
            </div>
            <div>
              <div class="customAnimate text-fs-small font-medium mb-4">
                <span class="text-clr-accent mr-6">DESIGN</span>
                <span class="text-clr-gray-light">DECEMBER 2, 2023</span>
              </div>
              <!-- blog title  -->
              <h4 class="customAnimate text-fs-medium font-medium mb-4">
                Kemia Honest Skincare
              </h4>
            </div>
          </RouterLink>
        </div>
        <div class="w-full lg:w-2/5 p-2">
          <RouterLink to="" class="block w-full group">
            <div class="w-full overflow-hidden mb-8 h-[820px] lg:h-[620px]">
              <img class="customAnimate block w-full h-full object-cover group-hover:scale-110 duration-500"
                src="../assets/images/project-4.jpg" alt="blog image" />
            </div>
            <div class="w-full lg:w-2/5 py-4">
              <div class="customAnimate text-fs-small font-medium mb-4">
                <span class="text-clr-accent mr-6">DESIGN</span>
                <span class="text-clr-gray-light">DECEMBER 2, 2023</span>
              </div>
              <!-- blog title  -->
              <h4 class="customAnimate text-fs-medium font-medium mb-4">
                Cascade of Lava
              </h4>
            </div>
          </RouterLink>
        </div>
      </div>
      <!-- projects 6-->
      <div class="w-full flex flex-col lg:flex-row items-center justify-between">
        <div class="w-full lg:w-2/5 p-2">
          <RouterLink to="" class="block w-full group">
            <div class="w-full overflow-hidden mb-8 h-[620px]">
              <img class="customAnimate block h-full object-cover group-hover:scale-110 duration-500"
                src="../assets/images/project-5.jpg" alt="blog image" />
            </div>
            <div>
              <div class="customAnimate text-fs-small font-medium mb-4">
                <span class="text-clr-accent mr-6">DESIGN</span>
                <span class="text-clr-gray-light">DECEMBER 2, 2023</span>
              </div>
              <!-- blog title  -->
              <h4 class="customAnimate text-fs-medium font-medium mb-4">
                Air Pro by Molekule
              </h4>
            </div>
          </RouterLink>
        </div>
        <div class="w-full lg:w-1/2 p-2">
          <RouterLink to="" class="block w-full group">
            <div class="w-full overflow-hidden mb-8">
              <img class="customAnimate block w-full group-hover:scale-110 duration-500"
                src="../assets/images/project-6.jpg" alt="blog image" />
            </div>
            <div>
              <div class="customAnimate text-fs-small font-medium mb-4">
                <span class="text-clr-accent mr-6">DESIGN</span>
                <span class="text-clr-gray-light">DECEMBER 2, 2023</span>
              </div>
              <!-- blog title  -->
              <h4 class="customAnimate text-fs-medium font-medium mb-4">
                Toney's Chocolonely
              </h4>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section class="w-full bg-clr-gray-lighter py-12 lg:py-28 flex justify-center items-center overflow-hidden">
    <div class="px-4 max-w-screen-xl w-full flex flex-col items-center">
      <div class="w-full ">
        <!-- upper text -->
        <div class="customAnimate text-clr-gray-light w-full text-center lg:w-4/5 mb-12 lg:text-right relative">
          <span>
            Looking to make your mark? We'll help you turn <br />
            your project into a success story.
          </span>
          <div class="absolute hidden lg:block ml-6 top-3 left-full h-[1px] w-[600px] bg-clr-gray-light"></div>
        </div>
        <!-- section headers -->
        <div class="text-center mb-4 lg:mb-8">
          <h2 class="customAnimate text-fs-30 md:text-fs-44 lg:text-fs-large leading-snug text-clr-black font-medium">
            Ready to bring your <span class="font-thin">ideas to </span>life?<br />
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
