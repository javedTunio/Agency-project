<template>
  <div>
    <div :class="{ '-translate-y-full': !isSticky }"
      class="fixed top-0 left-0 right-0 z-[2] transition-transform duration-300">
      <MainNav />
    </div>
    <router-view />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";

export default {
  components: {
    MainNav,
  },
  data() {
    return {
      isSticky: true,

      lastScrollTop: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > this.lastScrollTop) {
        // Scrolling down
        this.isSticky = false;
      } else {
        // Scrolling up
        this.isSticky = true;
      }

      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    },

  },
};
</script>


