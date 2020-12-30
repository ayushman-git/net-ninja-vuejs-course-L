const app = Vue.createApp({
  // template: '<p>Rendered using {{this.lib}}</p>',
  data() {
    return {
      showButtons: false,
      name: "Ayushman",
      age: 22,
    };
  },
  methods: {
    changeName() {
      if (this.name === "Ayushman") {
        this.name = "Aman";
      } else {
        this.name = "Ayushman";
      }
    },
    changeNameWithArg(name) {
      this.name = name;
    },
    eventHandler(e, num) {
      console.log(e, num)
    }
  },
});

app.mount("#root");
