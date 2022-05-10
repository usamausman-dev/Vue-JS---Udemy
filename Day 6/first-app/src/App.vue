<template>
  <section>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
// import FriendContact from "./components/FriendContact.vue";
export default {
  // components: { FriendContact },
  data() {
    return {
      friends: {
        name: "Usama",
        email: "uusman004@gmail.com",
        contact: "0310 2257759",
        address: "Lyari Karachi",
      },
    };
  },
};
</script>