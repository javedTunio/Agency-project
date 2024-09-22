<template>
  <div class="w-full px-4 lg:px-10 bg-clr-black  transition-all ease-in-out">
    <nav class="flex items-center justify-between">
      <div class="text-[42px] z-[99999]">
        <RouterLink to="/" class="">
          <span class="text-[42px] text-clr-white ">A.</span>
        </RouterLink>
      </div>

      <button @click="toggleMenu" class="relative w-8 h-8 z-[9999] bg-black ">
        <div class="h-[2px] w-8 bg-clr-white rounded-full absolute left-0 transform transition-transform duration-500"
          :class="{
            'h-[3px] top-4 -rotate-45': isOpen,
            'top-2': !isOpen,
          }">
        </div>
        <div
          class="h-[2px] w-8 bg-clr-white rounded-full absolute left-0 top-4 transform transition-transform duration-500"
          :class="{ 'h-[3px] rotate-45': isOpen, '': !isOpen }">
        </div>
        <div
          class="h-[2px] w-5 bg-clr-white rounded-full absolute left-0 top-6 transform transition-transform duration-500"
          :class="{
            'h-[3px]  -rotate-45 hidden': isOpen,
            ' block': !isOpen,
          }">
        </div>
      </button>
    </nav>
    <!-- full screen menu  -->
    <!-- Use transition component for smooth animation -->
    <transition name="fade">
      <div v-if="isOpen"
        class="absolute w-full z-[999] top-0 left-0 right-0 bottom-0 h-screen bg-clr-black flex items-center justify-center">
        <div class="px-8 py-2 max-w-screen-xl w-full h-full flex items-center justify-center">
          <!-- left side -->
          <div
            class="lg:w-[45%] h-full flex items-center py-4 px-8 lg:border-r-[1px] border-clr-gray-dark text-center lg:text-left">
            <transition name="slide" appear>
              <nav class="">
                <ul class="flex flex-col gap-4">
                  <li>
                    <RouterLink to="/" class="p-1 inline-block font-medium text-[34px] duration-300" :class="{
                      'text-clr-accent translate-x-2': $route.path === '/',
                      'text-clr-white hover:text-clr-accent hover:translate-x-2': $route.path !== '/',
                    }" @click="closeMenu">
                      Home
                    </RouterLink>
                  </li>

                  <li>
                    <RouterLink to="/portfolio" class="p-1 inline-block font-medium text-[34px] duration-300" :class="{
                      'text-clr-accent translate-x-2': $route.path === '/portfolio',
                      'text-clr-white hover:text-clr-accent hover:translate-x-2': $route.path !== '/portfolio',
                    }" @click="closeMenu">
                      Portfolio
                    </RouterLink>
                  </li>

                  <li>
                    <RouterLink to="/services" class="p-1 inline-block font-medium text-[34px] duration-300" :class="{
                      'text-clr-accent translate-x-2': $route.path === '/services',
                      'text-clr-white hover:text-clr-accent hover:translate-x-2': $route.path !== '/services',
                    }" @click="closeMenu">
                      Services
                    </RouterLink>
                  </li>

                  <li>
                    <RouterLink to="/contact" class="p-1 inline-block font-medium text-[34px] duration-300" :class="{
                      'text-clr-accent translate-x-2': $route.path === '/contact',
                      'text-clr-white hover:text-clr-accent hover:translate-x-2': $route.path !== '/contact',
                    }" @click="closeMenu">
                      Contact
                    </RouterLink>
                  </li>
                </ul>

              </nav>
            </transition>
          </div>
          <!-- right side -->
          <div class="hidden w-[55%] h-full lg:flex flex-col items-center justify-end gap-20 py-8 pl-16">
            <!-- upper div -->
            <div class="w-full flex justify-between border-b-[1px] border-clr-gray-dark">
              <Transition name="fadeup" appear>
                <div class="customAnimate mb-16">
                  <h6 class="mb-8 text-fs-18 font-medium text-clr-white">
                    Projects
                  </h6>
                  <ul class="flex flex-col gap-4">
                    <li class="text-fs-normal text-clr-gray hover:text-clr-white duration-300 hover:translate-x-2">
                      <RouterLink to="" class="p-1">
                        Interior design studio
                      </RouterLink>
                    </li>
                    <li class="text-fs-normal text-clr-gray hover:text-clr-white duration-300 hover:translate-x-2">
                      <RouterLink to="" class="p-1">
                        Home Security Camera
                      </RouterLink>
                    </li>
                    <li class="text-fs-normal text-clr-gray hover:text-clr-white duration-300 hover:translate-x-2">
                      <RouterLink to="" class="p-1">
                        Kemia Honest Skincare
                      </RouterLink>
                    </li>
                    <li class="text-fs-normal text-clr-gray hover:text-clr-white duration-300 hover:translate-x-2">
                      <RouterLink to="" class="p-1">
                        Cascade of Lava
                      </RouterLink>
                    </li>
                    <li class="text-fs-normal text-clr-gray hover:text-clr-white duration-300 hover:translate-x-2">
                      <RouterLink to="" class="p-1">
                        air Pro by Molekule
                      </RouterLink>
                    </li>
                    <li class="text-fs-normal text-clr-gray hover:text-clr-white duration-300 hover:translate-x-2">
                      <RouterLink to="" class="p-1">
                        Tony's chocolonly
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </Transition>
              <Transition name="fadeup" appear>
                <div class="customAnimate mb-16">
                  <h6 class="mb-8 text-fs-18 font-medium text-clr-white">
                    Useful links
                  </h6>
                  <ul class="flex flex-col gap-4">
                    <li class="text-fs-normal text-clr-gray hover:text-clr-white duration-300 hover:translate-x-2">
                      <RouterLink to="" class="p-1">
                        Privacy policy
                      </RouterLink>
                    </li>
                    <li class="text-fs-normal text-clr-gray hover:text-clr-white duration-300 hover:translate-x-2">
                      <RouterLink to="" class="p-1">
                        Turms and conditions
                      </RouterLink>
                    </li>
                    <li class="text-fs-normal text-clr-gray hover:text-clr-white duration-300 hover:translate-x-2">
                      <RouterLink to="" class="p-1">
                        Cookie policy
                      </RouterLink>
                    </li>
                    <li class="text-fs-normal text-clr-gray hover:text-clr-white duration-300 hover:translate-x-2">
                      <RouterLink to="" class="p-1">
                        Careers
                      </RouterLink>
                    </li>
                    <li class="text-fs-normal text-clr-gray hover:text-clr-white duration-300 hover:translate-x-2">
                      <RouterLink to="" class="p-1">
                        Privacy Policy
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </Transition>
            </div>
            <!-- lower div -->
            <div class="w-full flex justify-between">
              <Transition name="fadeup" appear>
                <div class="customAnimate mb-16">
                  <h6 class="mb-4 text-fs-18 font-medium text-clr-white">
                    Canada
                  </h6>
                  <p class="w-44 text-clr-gray">
                    <span>
                      71 South Los Carneros Road, California
                      <span class="mil-no-wrap">+51 174 705 812</span>
                    </span>
                  </p>
                </div>
              </Transition>
              <Transition name="fadeup" appear>
                <div class="customAnimate mb-16">
                  <h6 class="mb-4 text-fs-18 font-medium text-clr-white">
                    Germany
                  </h6>
                  <p class="w-44 text-clr-gray">
                    <span>
                      Leehove 40, 2678 MC De Lier, Netherlands
                      <span class="mil-no-wrap">+31 174 705 811</span>
                    </span>
                  </p>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "MainNav",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        document.body.style.overflow = 'hidden'; // Disable scrolling
      } else {
        document.body.style.overflow = ''; // Enable scrolling
      }
    },
    closeMenu() {
      this.isOpen = false;
      document.body.style.overflow = ''; // Enable scrolling
    },
  },
};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fadeup-enter-from,
.fadeup-leave-to {
  transform: translateY(50%);
  opacity: 0;
}

.fadeup-enter-active,
.fadeup-leave-active {
  transition: all 1s ease;
  transition-delay: 0.2s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}
</style>
