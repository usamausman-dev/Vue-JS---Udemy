let app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: '',
            confirmedName: '',
            fullName: ''
        }
    },

    //used similarly as computed , but it has some speciality
    //it should be similar to the values in data object and it executes when that value changes
    // we don't return the values instead we manipulate the values

    // Timer type k task k lye sahi hai magar agar hm different values attach karnay k lye computed behtar hai 

    watch: {
        name(value) {
            this.fullName = value + ' ' + "SMIU"
        }

    },

    // computed contains methods that should be executed when anything regarding that changes
    computed: {
        outputFullName() {
            return this.name = event.target.value;
        }
    },

    methods: {
        reduce() {
            this.counter--;
        },
        setName(event, lastname) {
            this.name = event.target.value;
        },
        submitForm() {
            alert("Hello")
        },
        confirmInput() {
            this.confirmedName = this.name
        },
        resetInp() {
            this.name = ''
        }
    }
})

app.mount('#app')