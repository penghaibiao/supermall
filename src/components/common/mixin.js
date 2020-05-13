import backtop from '../content/backtop/backtop'
export const itemmixin = {
    created() {

    },
}

export const backTopMixin = {
    data() {
        return {
            isshow: false
        }

    },
    methods: {

        backclick() {
            this.$refs.scroll.scroll.scrollTo(0, 0, 1000);
        },

        listshowbackTop(position) {
            if (Math.abs(position.y) >= 1000) {
                this.isshow = true;
            } else {
                this.isshow = false;
            }
        }
    },
    components: {
        backtop
    }
}
