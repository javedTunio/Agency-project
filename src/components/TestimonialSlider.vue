<template>
  <div class="mb-12 lg:mb-28 w-full flex flex-col items-center justify-center">
    <!-- User Images -->
    <div class="customAnimate w-full flex items-start justify-center flex-wrap mb-8">
      <!-- img -->
      <!-- 'border-[4px] border-black' : index = activeIndex -->
      <div v-for="(user, index) in testimonials" :key="index"
        class="p-1 rounded-full overflow-hidden transition-all duration-500 ease-in-out" :class="{
          'lg:mt-0': index % 2 === 0,
          'lg:mt-[30px]': index % 2 !== 0,
          'border-[4px] border-clr-accent': index == activeIndex,
          'border-[4px] border-transparent': index !== activeIndex,
        }">
        <img
          class="cursor-pointer block h-[70px] w-[70px]  lg:h-[90px] lg:w-[90px] object-cover object-top rounded-full"
          :src="`/images/${user.image}`" alt="user image" @click="changeSlide(index)" />
      </div>
    </div>
    <!-- qupte mark -->
    <div class="customAnimate flex items-center justify-center mb-4">
      <span class="material-symbols-outlined text-5xl text-clr-accent">
        format_quote
      </span>
    </div>
    <!-- slider -->
    <div class="w-full relative flex items-center justify-center">
      <div class="w-full md:w-[80%] lg:w-[65%] flex overflow-hidden">
        <!-- slides -->
        <div v-for="(user, index) in testimonials" :key="index"
          class="w-full flex-shrink-0 transition-all duration-500 ease-in-out" :class="{
            'opacity-100 duration-1000': index == activeIndex,
            'opacity-0 duration-1000': index != activeIndex,
          }" :style="{ transform: 'translateX(' + -activeIndex * 100 + '%)' }">
          <div class="w-full text-center">
            <h5 class="customAnimate text-clr-black font-medium text-fs-18 md:text-fs-20 mb-2">
              {{ user.name }}
            </h5>
            <p class="customAnimate text-clr-gray-light text-fs-small font-medium tracking-widest mb-8">
              {{ user.job }}
            </p>
            <p class="customAnimate text-clr-gray-light text-fs-20 lg:text-[24px] font-extralight">
              {{ user.text }}
            </p>
          </div>
        </div>
      </div>

      <!-- buttons -->
      <div class="customAnimate w-full absolute top-[0] lg:top-[50%] left-0 flex items-center justify-between">
        <button @click="prevSlide" :disabled="activeIndex === 0" class="disabled:opacity-30">
          <span
            class="w-10 h-10 bg-clr-gray-light rounded-full text-transparent flex items-center justify-center hover:scale-[1.15] transition-all ease-in-out duration-500 rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#E6E6E6"
              class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </button>
        <button @click="nextSlide" :disabled="activeIndex === testimonials.length - 1" class="disabled:opacity-30">
          <span
            class="w-10 h-10 bg-clr-gray-light rounded-full text-transparent flex items-center justify-center hover:scale-[1.15] transition-all ease-in-out duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#E6E6E6"
              class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </button>
      </div>
    </div>
    <!-- <img v-for="img in images" :key="img.img" :src="img.img" alt=""> -->
  </div>
</template>

<script>
import FadeInMixin from "@/mixins/fadeInMixin.js";
export default {
  name: "TestimonialSlider",
  mixins: [FadeInMixin],
  data() {
    return {
      activeIndex: 0,
      slideDirection: "",
      testimonials: [
        {
          name: "Sarah Newman",
          job: "ENVATO MARKET",
          image: "faces-1.webp",
          text: " This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work. ",
        },
        {
          name: "Emma Truman",
          job: "ENVATO MARKET",
          image: "faces-2.webp",
          text: " I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions. ",
        },
        {
          name: "Oscar Freeman",
          job: "ENVATO MARKET",
          image: "faces-3.webp",
          text: " This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work. ",
        },
        {
          name: "Lisa Truman",
          job: "ENVATO MARKET",
          image: "faces-4.webp",
          text: " I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions. ",
        },
        {
          name: "Sarah Newman",
          job: "ENVATO MARKET",
          image: "faces-1.webp",
          text: " This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work. ",
        },
        {
          name: "Emma Truman",
          job: "ENVATO MARKET",
          image: "faces-2.webp",
          text: " I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions. ",
        },
        {
          name: "Oscar Freeman",
          job: "ENVATO MARKET",
          image: "faces-3.webp",
          text: " This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work. ",
        },
      ],
    };
  },
  methods: {
    changeSlide(index) {
      this.slideDirection =
        index > this.activeIndex ? "slide-left" : "slide-right";

      this.activeIndex = index;
    },
    prevSlide() {
      this.slideDirection = "slide-right";

      this.activeIndex =
        (this.activeIndex - 1 + this.testimonials.length) %
        this.testimonials.length;
    },
    nextSlide() {
      this.slideDirection = "slide-left";
      this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
    },
  },
};
</script>
<style>
/* for qupte icon */
.material-symbols-outlined {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
}
</style>
