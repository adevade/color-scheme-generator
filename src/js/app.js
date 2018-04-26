import Vue from 'vue';
import chroma from 'chroma-js';

new Vue({
    el: '#app',

    created() {
        this.activeOutputTab = localStorage.getItem('activeOutputTab')
            ? localStorage.getItem('activeOutputTab')
            : 'tailwind';
    },

    data: {
        colorInput: '',
        activeOutputTab: null,
    },

    computed: {
        brand() {
            return (!! this.colorInput)
                ? chroma(this.colorInput)
                : this.getRandomColor();
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
                    value: chroma.mix('#e6e6e6', this.brand, .01, 'lab'),
                },
                'grey-light': {
                    name: 'Grey Light',
                    value: chroma.mix('#d2d2d2', this.brand, .01, 'lab'),
                },
                'grey': {
                    name: 'Grey',
                    value: chroma.mix('#bfbfbf', this.brand, .01, 'lab'),
                },
                'grey-dark': {
                    name: 'Grey Dark',
                    value: chroma.mix('#979797', this.brand, .01, 'lab'),
                },
                'grey-darker': {
                    name: 'Grey Darker',
                    value: chroma.mix('#6f6f6f', this.brand, .01, 'lab'),
                },
                'grey-darkest': {
                    name: 'Grey Darkest',
                    value: chroma.mix('#484848', this.brand, .01, 'lab'),
                },
                'black': {
                    name: 'Black',
                    value: chroma.mix('#202020', this.brand, .01, 'lab'),
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
            return chroma.mix('#000', hex, .5, 'lab');
        },
    },
});
