<template>
  <!-- hero section -->
  <section class="w-full bg-clr-black h-svh flex justify-center items-end ">
    <div class="px-4 sm:px-8 lg:px-12 xl:px-2 max-w-screen-xl w-full text-clr-off-white mb-12 lg:mb-32">
      <h1 class="mb-4 lg:mb-14 w-3/4">
        <span class="text-fs-36 md:text-[58px] lg:text-fs-larger font-medium lg:leading-[6rem]">
          Designing <span class="font-thin">a Better</span> <br />
          World <span class="font-thin">Today</span>
        </span>
      </h1>
      <p class="max-w-md text-fs-normal text-clr-gray mb-8 lg:mb-14">
        <span class="leading-3">
          Welcome to our world of endless imagination and boundless creativity.
          Together, let's embark on a remarkable journey where dreams become
          tangible realities.
        </span>
      </p>
      <div class="flex items-center gap-8">
        <MainBtn />
        <RouterLink to="#" class="text-fs-small flex items-center gap-4 group">
          <span class="tracking-widest font-medium">VIEW WORKS</span>
          <span
            class="size-8 lg:size-10 bg-clr-gray-dark rounded-full text-transparent flex items-center justify-center group-hover:scale-[1.15] transition-all ease-in-out duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#E6E6E6"
              class="size-4 lg:size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
  <!-- first section -->
  <section class="w-full bg-clr-white py-12 lg:py-28 flex justify-center items-center">
    <div class="px-4 sm:px-8 lg:px-12 xl:px-2 max-w-screen-xl w-full flex lg:items-center flex-col lg:flex-row">
      <!-- text side -->
      <div class="w-full lg:w-3/5 mb-8 lg:mb-0">
        <h2 class="customAnimate mb-4 lg:mb-8">
          <span class="text-fs-36 md:text-[42px] lg:text-fs-large font-medium lg:leading-[5rem] text-clr-black">
            Discover <br />
            Our <span class="font-thin">Studio</span>
          </span>
        </h2>
        <p class="customAnimate w-full lg:max-w-md text-fs-normal font-extralight text-clr-gray-light mb-4 lg:mb-8  ">
          <span class="leading-3">
            At our design studio, we are a collective of talented individuals
            ignited by our unwavering passion for transforming ideas into
            reality. With a harmonious blend of diverse backgrounds and a vast
            array of skill sets, we join forces to create compelling solutions
            for our esteemed clients.
          </span>
        </p>
        <p class="customAnimate lg:max-w-md text-fs-normal font-extralight text-clr-gray-light mb-4 lg:mb-8">
          <span class="leading-3">
            Collaboration is at the heart of what we do. Our team thrives on the
            synergy that arises when unique perspectives converge, fostering an
            environment of boundless creativity. By harnessing our collective
            expertise, we produce extraordinary results that consistently
            surpass expectations.
          </span>
        </p>
        <!-- founder -->
        <div class="customAnimate flex items-center">
          <!-- img -->
          <div class="relative w-fit">
            <img class="block h-[90px] w-[90px] object-cover object-top rounded-full" src="../assets/images/founder.jpg"
              alt="founder of website" />
            <div
              class="absolute bottom-0 right-0 bg-clr-accent size-[30px] rounded-full flex items-center justify-center">
              <span class="leading-relaxed text-3xl mt-3">"</span>
            </div>
          </div>
          <!-- role -->
          <div class="pl-8">
            <h6 class="text-fs-18 font-medium">
              Passionatily Creating
              <span class="text-clr-gray-light font-extralight">Design Wonders:</span>
              <br />
              Unleashing
              <span class="text-clr-gray-light font-extralight">Boundless Creativity</span>
            </h6>
          </div>
        </div>
      </div>
      <!-- image side -->
      <div class="customAnimate w-full lg:w-2/5">
        <img class="block lg:p-2" src="../assets/images/photo-1.jpg" alt="first section image" />
      </div>
    </div>
  </section>
  <!-- second section -->
  <section class="w-full bg-clr-black pt-12 lg:pt-28  flex justify-center items-center overflow-hidden">
    <div class="px-4 max-w-screen-xl w-full flex flex-col items-center">
      <!-- headings -->
      <div class="w-full mb-12 lg:mb-28">
        <!-- upper text -->
        <div class="customAnimate text-clr-gray-light w-full lg:w-4/5 mb-12 text-center lg:text-right relative">
          <span>
            Professionals focused on helping your brand<br />
            grow and move forward.
          </span>
          <div class="absolute ml-6 top-3 left-full h-[1px] w-[600px] bg-clr-gray"></div>
        </div>
        <!-- main heading of section -->
        <div class="customAnimate flex items-center justify-center gap-8">
          <!-- image capsule -->
          <div class="h-20 w-[250px] rounded-full overflow-hidden hidden md:block">
            <img class="block w-full hover:scale-105 duration-500" src="../assets/images/photo-2.jpg" alt="" />
          </div>
          <!-- heading -->
          <div>
            <h2 class="text-fs-36 md:text-fs-58 lg:text-fs-larger font-medium text-clr-white">
              Unique <span class="font-thin">Ideas</span>
            </h2>
          </div>
        </div>
        <!-- main heading of section 2 -->
        <div class="customAnimate flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8">
          <!-- heading -->
          <div>
            <h2 class="text-fs-36 md:text-fs-58 lg:text-fs-larger font-medium text-clr-white">
              For Your <span class="font-thin">Business.</span>
            </h2>
          </div>
          <!-- main btn capsule -->
          <MainBtn />
        </div>
        <!-- headings end  -->
      </div>
      <!-- ==== boxes // -->
      <div
        class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-clr-white border-t-[1px] border-clr-gray-dark">
        <div class="border-clr-gray-dark   border-x-[1px] border-b-[1px]">
          <RouterLink to="#" class="block py-[60px] px-[30px] group">
            <h5 class="customAnimate text-fs-20 font-medium mb-[30px]">
              <span> Branding and <br />Identity Design </span>
            </h5>
            <p
              class="text-fs-normal font-extralight text-clr-gray-light mb-8 lg:translate-y-full lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 duration-500">
              <span>
                Our creative agency is a team of professionals focused on
                helping your brand grow.
              </span>
            </p>
            <div>
              <span
                class="w-10 h-10 bg-clr-accent lg:bg-clr-gray group-hover:bg-clr-accent rounded-full text-transparent flex items-center justify-center lg:scale-[.3] lg:group-hover:scale-100 transition-all ease-in-out duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="#000000" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </RouterLink>
        </div>
        <div class="border-x-[1px] md:border-l-0 border-b-[1px] border-clr-gray-dark">
          <RouterLink to="#" class="block py-[60px] px-[30px] group">
            <h5 class="customAnimate text-fs-20 font-medium mb-[30px]">
              <span> Website Design <br />and Development </span>
            </h5>
            <p
              class="text-fs-normal font-extralight text-clr-gray-light mb-8 lg:translate-y-full lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 duration-500">
              <span>
                Our creative agency is a team of professionals focused on
                helping your brand grow.
              </span>
            </p>
            <div>
              <span
                class="w-10 h-10 bg-clr-accent lg:bg-clr-gray group-hover:bg-clr-accent rounded-full text-transparent flex items-center justify-center lg:scale-[.3] lg:group-hover:scale-100 transition-all ease-in-out duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="#000000" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </RouterLink>
        </div>
        <div class="border-x-[1px]  border-b-[1px] border-clr-gray-dark">
          <RouterLink to="#" class="block py-[60px] px-[30px] group">
            <h5 class="customAnimate text-fs-20 font-medium mb-[30px]">
              <span> Advertising and <br />Marketing Campaigns </span>
            </h5>
            <p
              class="text-fs-normal font-extralight text-clr-gray-light mb-8 lg:translate-y-full lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 duration-500">
              <span>
                Our creative agency is a team of professionals focused on
                helping your brand grow.
              </span>
            </p>
            <div>
              <span
                class="w-10 h-10 bg-clr-accent lg:bg-clr-gray group-hover:bg-clr-accent rounded-full text-transparent flex items-center justify-center lg:scale-[.3] lg:group-hover:scale-100 transition-all ease-in-out duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="#000000" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </RouterLink>
        </div>
        <div class="border-x-[1px] md:border-l-0 border-clr-gray-dark">
          <RouterLink to="#" class="block py-[60px] px-[30px] group">
            <h5 class="customAnimate text-fs-20 font-medium mb-[30px]">
              <span> Creative Consulting <br />and Development </span>
            </h5>
            <p
              class="text-fs-normal font-extralight text-clr-gray-light mb-8 lg:translate-y-full lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 duration-500">
              <span>
                Our creative agency is a team of professionals focused on
                helping your brand grow.
              </span>
            </p>
            <div>
              <span
                class="w-10 h-10 bg-clr-accent lg:bg-clr-gray group-hover:bg-clr-accent rounded-full text-transparent flex items-center justify-center lg:scale-[.3] lg:group-hover:scale-100 transition-all ease-in-out duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="#000000" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
  <!-- third section -->
  <section class="w-full bg-clr-white py-12 lg:py-28 flex justify-center items-center">
    <div class="px-4 sm:px-8 lg:px-12 xl:px-2 max-w-screen-xl w-full flex flex-col lg:flex-row items-center lg:gap-10">
      <!-- text side -->
      <div class="w-full lg:w-1/2">
        <h2
          class="customAnimate text-clr-black text-fs-36 md:text-fs-44 lg:text-fs-large font-medium mb-4 lg:mb-8 leading-none lg:leading-[5rem]">
          <span class="">Meet <br />
            Our <span class="font-thin">Team</span></span>
        </h2>
        <p class="customAnimate lg:max-w-md text-fs-normal font-extralight text-clr-gray-light mb-4 lg:mb-8">
          <span class="leading-3">
            We are talented individuals who are passionate about bringing ideas
            to life. With a diverse range of backgrounds and skill sets, we
            collaborate to produce effective solutions for our clients.
          </span>
        </p>
        <p class="customAnimate lg:max-w-md text-fs-normal font-extralight text-clr-gray-light mb-4 lg:mb-8">
          <span class="leading-3">
            Together, our creative team is committed to delivering impactful
            work that exceeds expectations.
          </span>
        </p>
        <!-- main btn capsule -->
        <div class="customAnimate mb-10 py-2">
          <MainBtn />
        </div>
        <!-- <h4
          class="customAnimate text-clr-black text-fs-medium font-medium mb-4 lg:mb-8 leading-[1.8rem] lg:leading-[2rem]">
          <span>
            <span class="font-thin">We</span> delivering <br /><span class="font-thin">exceptional</span>
            results.
          </span>
        </h4> -->
      </div>
      <!-- images side -->
      <div class="w-full lg:w-1/2 flex flex-col md:flex-row lg:justify-between gap-8 xl:gap-0 lg:p-4">

        <!-- first part -->
        <div class="w-full md:w-1/2 lg:w-auto flex flex-col gap-8 lg:py-8">
          <!-- image -->
          <div
            class="customAnimate relative w-full xl:w-[267px] h-auto xl:h-[330px] object-cover object-top overflow-hidden group">
            <img class="block w-full scale-105 group-hover:scale-100 duration-500 z-10"
              src="../assets/images/faces-1.jpg" alt="" />
            <div
              class="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-70 duration-500 hidden group-hover:flex flex-col items-center justify-end z-10">
              <div class="opacity-100 text-clr-white text-center mb-8">
                <h5 class="mb-1 text-fs-20">Anna Oldman</h5>
                <p class="max-w-md text-fs-small text-clr-gray-light mb-8">
                  <span class="leading-3"> ART DIRECTOR </span>
                </p>
              </div>
            </div>
          </div>
          <!-- image -->
          <div
            class="customAnimate relative w-full xl:w-[267px] h-auto xl:h-[330px] object-cover object-top overflow-hidden group">
            <img class="block w-full scale-105 group-hover:scale-100 duration-500" src="../assets/images/faces-2.jpg"
              alt="" />
            <div
              class="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-70 duration-500 hidden group-hover:flex flex-col items-center justify-end">
              <div class="opacity-100 text-clr-white text-center mb-8">
                <h5 class="mb-1 text-fs-20">Anna Oldman</h5>
                <p class="max-w-md text-fs-small text-clr-gray-light mb-8">
                  <span class="leading-3"> ART DIRECTOR </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- second part -->
        <div class="w-full md:w-1/2 lg:w-auto flex flex-col gap-8">
          <div class="customAnimate hidden lg:block text-clr-gray leading-3 mb-4">
            <span class="text-clr-accent">* </span>The founders of our agency
          </div>
          <!-- image -->
          <div
            class="customAnimate relative w-full xl:w-[267px] h-auto xl:h-[330px] object-cover object-top overflow-hidden group">
            <img class="block w-full scale-105 group-hover:scale-100 duration-500" src="../assets/images/faces-3.jpg"
              alt="" />
            <div
              class="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-70 duration-500 hidden group-hover:flex flex-col items-center justify-end">
              <div class="opacity-100 text-clr-white text-center mb-8">
                <h5 class="mb-1 text-fs-20">Anna Oldman</h5>
                <p class="max-w-md text-fs-small text-clr-gray-light mb-8">
                  <span class="leading-3"> ART DIRECTOR </span>
                </p>
              </div>
            </div>
          </div>
          <!-- image -->
          <div
            class="customAnimate relative w-full xl:w-[267px] h-auto xl:h-[330px] object-cover object-top overflow-hidden group">
            <img class="block w-full scale-105 group-hover:scale-100 duration-500" src="../assets/images/faces-4.jpg"
              alt="" />
            <div
              class="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-70 duration-500 hidden group-hover:flex flex-col items-center justify-end">
              <div class="opacity-100 text-clr-white text-center mb-8">
                <h5 class="mb-1 text-fs-20">Anna Oldman</h5>
                <p class="max-w-md text-fs-small text-clr-gray-light mb-8">
                  <span class="leading-3"> ART DIRECTOR </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4th / testimonial section -->
  <section class="w-full bg-clr-gray-lighter pt-12 lg:pt-28 flex justify-center items-center overflow-hidden">
    <div class="px-4 max-w-screen-xl w-full flex flex-col items-center">
      <div class="w-full mb-8 lg:mb-16">
        <!-- upper text -->
        <div class="customAnimate text-clr-gray-light w-full lg:w-4/5 mb-12 text-center lg:text-right relative">
          <span>
            Customer reviews are a valuable source <br />
            of information for both businesses and consumers.
          </span>
          <div class="absolute ml-6 top-3 left-full h-[1px] w-[600px] bg-clr-gray-light"></div>
        </div>
        <!-- section headers -->
        <div class="text-center">
          <h2 class="customAnimate text-fs-36 md:text-fs-44 lg:text-fs-58 xl:text-fs-large text-clr-black font-medium">
            Customer <span class="font-thin">Voices:</span><br />
            Hear What <span class="font-thin">They Say!</span>
          </h2>
        </div>
      </div>

      <TestimonialSlider class="w-full" />
    </div>
  </section>

  <!-- 5th  section -->
  <section class="w-full bg-clr-white pt-12 lg:pt-28 pb-16 flex justify-center items-center overflow-hidden">
    <div class="px-4 max-w-screen-xl w-full flex flex-col items-center">
      <!-- sestion header  -->
      <div class="customAnimate w-full flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-4 lg:gap-0">
        <h3 class="text-fs-30 md:text-fs-36 lg:text-[42px] font-medium">
          Popular Publications:
        </h3>
        <RouterLink to="#" class="text-fs-small flex items-center gap-4 group">
          <span class="tracking-widest font-medium">VIEW WORKS</span>
          <span
            class="w-10 h-10 bg-clr-gray-light rounded-full text-transparent flex items-center justify-center group-hover:scale-[1.15] transition-all ease-in-out duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#E6E6E6"
              class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </RouterLink>
      </div>
      <!-- sestion content  -->
      <div class="w-full flex flex-col lg:flex-row items-center gap-8">
        <div class="flex-1 w-full pb-2">
          <RouterLink to="" class="block w-full group">
            <div class="w-full overflow-hidden mb-8">
              <img class="customAnimate block w-full group-hover:scale-110 duration-500"
                src="../assets/images/blog-8.jpg" alt="blog image" />
            </div>
            <div class="">
              <div class="customAnimate text-fs-small font-medium mb-8">
                <span class="text-clr-accent mr-6">DESIGN</span>
                <span class="text-clr-gray-light">DECEMBER 2, 2023</span>
              </div>
              <!-- blog title  -->
              <h4 class="customAnimate text-fs-medium font-medium mb-8">
                How to Become a Graphic Designer in 10 Simple Steps
              </h4>
              <p class="customAnimate text-clr-gray-light mb-8">
                Are you passionate about design and interested in pursuing a
                career as a graphic designer? Graphic design is a dynamic..
              </p>
              <!-- <RouterLink to="#" class="customAnimate text-fs-small flex items-center gap-4 group">
                <span class="tracking-widest font-medium">VIEW WORKS</span>
                <span
                  class="w-10 h-10 bg-clr-gray-light rounded-full text-transparent flex items-center justify-center group-hover:scale-[1.15] transition-all ease-in-out duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="#E6E6E6" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </RouterLink> -->
            </div>
          </RouterLink>
        </div>
        <div class="flex-1 w-full pb-2">
          <RouterLink to="" class="block w-full group">
            <div class="w-full overflow-hidden mb-8">
              <img class="customAnimate block w-full group-hover:scale-110 duration-500"
                src="../assets/images/blog-7.jpg" alt="blog image" />
            </div>
            <div class="">
              <div class="customAnimate text-fs-small font-medium mb-8">
                <span class="text-clr-accent mr-6">MARKETING</span>
                <span class="text-clr-gray-light">DECEMBER 2, 2023</span>
              </div>
              <!-- blog title  -->
              <h4 class="customAnimate text-fs-medium font-medium mb-8">
                Play to Your Strengths and Supercharge Your Business
              </h4>
              <p class="customAnimate text-clr-gray-light mb-8">
                Are you passionate about design and interested in pursuing a
                career as a graphic designer? Graphic design is a dynamic..
              </p>
              <!-- <RouterLink to="#" class="customAnimate text-fs-small flex items-center gap-4 group">
                <span class="tracking-widest font-medium">VIEW WORKS</span>
                <span
                  class="w-10 h-10 bg-clr-gray-light rounded-full text-transparent flex items-center justify-center group-hover:scale-[1.15] transition-all ease-in-out duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="#E6E6E6" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </RouterLink> -->
            </div>
          </RouterLink>
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
import TestimonialSlider from "@/components/TestimonialSlider.vue";
import MainFooter from "@/components/MainFooter.vue";
// import LogoSvg from "@/components/LogoSvg.vue";
//mixin
import FadeInMixin from "@/mixins/fadeInMixin.js";

export default {
  name: "HomeView",
  mixins: [FadeInMixin],
  components: {
    MainBtn,
    TestimonialSlider,
    MainFooter,
    // LogoSvg,
  },
};
</script>
