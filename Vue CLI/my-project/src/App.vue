<template>
  <section>
    <h2>My friends</h2>
    <ul>
      <friend-list name="Hamza" phone-number="03102257756"></friend-list>
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
        },
        {
          id: "059",
          name: "Hammad",
          phone: "03101234567",
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>


