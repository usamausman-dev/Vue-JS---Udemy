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