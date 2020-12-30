const app = Vue.createApp({
  // template: '<p>Rendered using {{this.lib}}</p>',
  data() {
    return {
      name: "Ayushman",
      age: 22,
    };
  },
  methods: {
    increaseAge() {
      this.age++;
    },
    decreaseAge() {
      this.age--;
    },
  },
});

app.mount("#root");
