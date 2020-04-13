import Vue from "vue";
import chroma from "chroma-js";

new Vue({
  el: "#app",

  created() {
    this.activeTab = localStorage.getItem("activeTab")
      ? localStorage.getItem("activeTab")
      : "tailwind";
  },

  data: {
    activeTab: null,
    colorInputValue: "",
    tabs: [
      {
        id: "tailwind",
        title: "Tailwind"
      },
      {
        id: "sass",
        title: "SASS"
      },
      {
        id: "scss",
        title: "SCSS"
      },
      {
        id: "less",
        title: "Less"
      }
    ]
  },

  computed: {
    brand() {
      return !this.colorInputValue
        ? this.getRandomColor()
        : chroma(this.colorInputValue);
    },

    colors() {
      return {
        brand: {
          name: "Brand",
          value: this.brand
        },
        cta: {
          name: "CTA",
          value: this.brand.set("hsl.h", "+150")
        },
        info: {
          name: "Info",
          value: chroma.mix("#3df", this.brand, 0.2, "lab")
        },
        warning: {
          name: "Warning",
          value: chroma.mix("#fd0", this.brand, 0.2, "lab")
        },
        success: {
          name: "Success",
          value: chroma.mix("#3e4", this.brand, 0.2, "lab")
        },
        danger: {
          name: "Danger",
          value: chroma.mix("#f34", this.brand, 0.2, "lab")
        }
      };
    },

    grays() {
      return {
        white: {
          name: "White",
          value: chroma("#fff")
        },
        "gray-lightest": {
          name: "gray Lightest",
          value: chroma.mix("#fafafa", this.brand, 0.01, "lab")
        },
        "gray-lighter": {
          name: "gray Lighter",
          value: chroma.mix("#e6e6e6", this.brand, 0.01, "lab")
        },
        "gray-light": {
          name: "gray Light",
          value: chroma.mix("#d2d2d2", this.brand, 0.01, "lab")
        },
        gray: {
          name: "gray",
          value: chroma.mix("#bfbfbf", this.brand, 0.01, "lab")
        },
        "gray-dark": {
          name: "gray Dark",
          value: chroma.mix("#979797", this.brand, 0.01, "lab")
        },
        "gray-darker": {
          name: "gray Darker",
          value: chroma.mix("#6f6f6f", this.brand, 0.01, "lab")
        },
        "gray-darkest": {
          name: "gray Darkest",
          value: chroma.mix("#484848", this.brand, 0.01, "lab")
        },
        black: {
          name: "Black",
          value: chroma.mix("#202020", this.brand, 0.01, "lab")
        }
      };
    }
  },

  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
      localStorage.setItem("activeTab", tab);
    },

    getRandomColor() {
      return chroma.random();
    },

    tint(hex) {
      return chroma.mix("#fff", hex, 0.25, "lab");
    },

    shade(hex) {
      return chroma.mix("#000", hex, 0.5, "lab");
    }
  }
});
