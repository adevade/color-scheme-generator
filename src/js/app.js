import Vue from "vue";
import chroma from "chroma-js";

const app = new Vue({
    el: '#app',

    data: {
        colorInput: '',
        activeOutputTab: null,
    },

    mounted() {
        this.activeOutputTab = localStorage.getItem('activeOutputTab')
            ? localStorage.getItem('activeOutputTab')
            : 'tailwind';
    },

    computed: {
        brand() {
            return (!! this.colorInput) ? chroma(this.colorInput) : this.getRandomColor();
        },

        colors() {
            return {
                'brand': {
                    name: 'Brand',
                    value: this.brand,
                },
                'cta': {
                    name: 'CTA',
                    value: this.brand.set('hsl.h', '+150'),
                },
                'info': {
                    name: 'Info',
                    value: chroma.mix('#3df', this.brand, .2, 'lab'),
                },
                'warning': {
                    name: 'Warning',
                    value: chroma.mix('#fd0', this.brand, .2, 'lab'),
                },
                'success': {
                    name: 'Success',
                    value: chroma.mix('#3e4', this.brand, .2, 'lab'),
                },
                'danger': {
                    name: 'Danger',
                    value: chroma.mix('#f34', this.brand, .2, 'lab'),
                },
            };
        },

        greys() {
            return {
                'white': {
                    name: 'White',
                    value: chroma('#fff'),
                },
                'grey-lightest': {
                    name: 'Grey Lightest',
                    value: chroma.mix('#fafafa', this.brand, .01, 'lab'),
                },
                'grey-lighter': {
                    name: 'Grey Lighter',
                    value: chroma.mix('#e7e7e7', this.brand, .01, 'lab'),
                },
                'grey-light': {
                    name: 'Grey Light',
                    value: chroma.mix('#d3d3d3', this.brand, .02, 'lab'),
                },
                'grey': {
                    name: 'Grey',
                    value: chroma.mix('#c0c0c0', this.brand, .02, 'lab'),
                },
                'grey-dark': {
                    name: 'Grey Dark',
                    value: chroma.mix('#9a9a9a', this.brand, .03, 'lab'),
                },
                'grey-darker': {
                    name: 'Grey Darker',
                    value: chroma.mix('#737373', this.brand, .03, 'lab'),
                },
                'grey-darkest': {
                    name: 'Grey Darkest',
                    value: chroma.mix('#4d4d4d', this.brand, .04, 'lab'),
                },
                'black': {
                    name: 'Black',
                    value: chroma.mix('#262626', this.brand, .05, 'lab'),
                },
            };
        },
    },

    methods: {
        setActiveOutputTab(tab) {
            this.activeOutputTab = tab;
            localStorage.setItem('activeOutputTab', tab);
        },

        getRandomColor() {
            return chroma.random();
        },

        tint(hex) {
            return chroma.mix('#fff', hex, .25, 'lab');
        },

        shade(hex) {
            return chroma.mix('#000', hex, .66, 'lab');
        },
    },
});
