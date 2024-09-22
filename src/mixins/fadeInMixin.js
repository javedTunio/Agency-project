export default {
  methods: {
    checkElement() {
      const trigerPoint = window.innerHeight - (window.innerHeight * 5) / 100;
      const elements = document.querySelectorAll(".customAnimate");

      elements.forEach((elem) => {
        const elemTop = elem.getBoundingClientRect().top;
        if (elemTop < trigerPoint) {
          elem.classList.add("customFadeIn");
          elem.classList.remove("customFadeOut");
        } else {
          elem.classList.add("customFadeOut");
          elem.classList.remove("customFadeIn");
        }
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.checkElement);
    
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkElement);
  },
};
