const app = Vue.createApp({
  // template: '<p>Rendered using {{this.lib}}</p>',
  data() {
    return {
      showButtons: false,
      showMouseEvent: false,
      showShuttles: false,
      url: "https://github.com/ayushman-git",
      name: "Ayushman",
      age: 22,
      x: 0,
      y: 0,
      spaceShuttles: [
        { name: "Voyager 1", launchYear: 1977 },
        { name: "Voyager 2", launchYear: 1977 },
        { name: "Apollo 11", launchYear: 1969 },
        { name: "Artemis", launchYear: 2024 },
      ],
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
      console.log(e, num);
    },
    handleMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#root");
