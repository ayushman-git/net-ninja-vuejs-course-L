const app = Vue.createApp({
  // template: '<p>Rendered using {{this.lib}}</p>',
  data() {
    return {
      showButtons: false,
      name: "Ayushman",
      age: 22,
      x: 0,
      y: 0
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
    },
    handleMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  },
});

app.mount("#root");
