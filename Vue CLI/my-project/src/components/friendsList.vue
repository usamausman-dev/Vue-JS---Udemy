<template>
  <li class="pt-5">
    <h2>Name : {{ name }} {{ isFavorite ? "(Fav)" : "" }}</h2>
    <button @click="toggleDetails" class="btn btn-primary">
      {{ detailsVisible ? "Hide" : "Show" }} Details
    </button>

    <button @click="toggleFav" class="btn btn-primary mx-2">
      Toggle Favorite
    </button>

    <div class="container my-5">
      <ul class="list-group" v-if="detailsVisible">
        <li class="list-group-item">{{ phoneNumber }}</li>
        <!-- <li class="list-group-item">{{ friend.phone }}</li> -->
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "isFavorite"],

  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: true,
      default: false,
      // validator : function (value) {
      //   return value === '1' || value === '0'
      // }
    },
  },

  data() {
    return {
      detailsVisible: false,
      // friendIsFav: this.isFavorite,
    };
  },

  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },

    // Due to Uni directional flow we can't update the props in child component , for this we need to pass
    // the prop value in data and then update the data

    toggleFav() {
      // this.friendIsFav = !this.friendIsFav;
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>