let app = Vue.createApp({
    // All the inputs will be get like this
    data() {
        return {
            boxA: false,
            boxB: false,
            boxC: false,
        };
    },
    computed: {
        boxCClass() {
            return { 'border-danger': this.boxC }
        }

    },

    // All the functions will be written in this way 
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxA = !this.boxA   //setting to oppose the behavior if true then false it, if false then true
            }
            else if (box === 'B') {
                this.boxB = !this.boxB
            }
            else if (box === 'C') {
                this.boxC = !this.boxC
            }
        }

    }

})


app.mount('#app');

let condition = Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoals() {
            this.goals.push(this.enteredValue);
            this.enteredValue = ''
        },
        removeGoals(index) {
            this.goals.splice(index, 1);
        }

    }
})

condition.mount('#condition')