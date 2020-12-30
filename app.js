const app = Vue.createApp({
  // template: '<p>Rendered using {{this.lib}}</p>',
  data() {
    return {
      name: "Ayushman",
      age: 22,
    }
  }
});

app.mount("#root");
