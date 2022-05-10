<template>
  <li>
    <h2>{{ friends.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsVisible">
      <li>Email : {{ friends.email }}</li>
      <li>Address : {{ friends.address }}</li>
      <li>Contact : {{ friends.contact }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsVisible: false,
      friends: {
        name: "Usama",
        email: "uusman004@gmail.com",
        contact: "0310 2257759",
        address: "Lyari Karachi",
      },
    };
  },

  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
};
</script>