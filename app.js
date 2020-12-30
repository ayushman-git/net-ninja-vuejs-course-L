const app = Vue.createApp({
  // template: '<p>Rendered using {{this.lib}}</p>',
  data() {
    return {
      lib: "VueJs"
    }
  }
});

app.mount("#root");
