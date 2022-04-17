Vue.createApp({
    // All the inputs will be get like this
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },

    // All the functions will be written in this way 
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = ''; //empty the search field
        }
    }

}).mount('#app');