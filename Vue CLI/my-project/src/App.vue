<template>
  <section>
    <h2>My friends</h2>
    <ul>
      <friend-list
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavStatus"
      ></friend-list>

      <!-- <friend-list
        name="Usama"
        phone-number="03040257471"
        is-favorite="0"
      ></friend-list> -->

      <!-- <friend-list></friend-list> -->
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "076",
          name: "Osama",
          phone: "03102257759",
          isFavorite: true,
        },
        {
          id: "059",
          name: "Hammad",
          phone: "03101234567",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavStatus(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
  },
  computed: {},
};
</script>



