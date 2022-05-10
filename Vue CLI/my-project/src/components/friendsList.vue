<template>
  <li class="pt-5">
    <h2>Name : {{ name }}</h2>
    <button @click="toggleDetails" class="btn btn-primary">
      {{ detailsVisible ? "Hide" : "Show" }} Details
    </button>
    <div class="container my-5">
      <ul class="list-group" v-if="detailsVisible">
        <li class="list-group-item">{{ phoneNumber }}</li>
        <li class="list-group-item">{{ friend.phone }}</li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  props: ["name", "phoneNumber"],
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: "076",
        name: "Osama",
        phone: "03102257759",
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