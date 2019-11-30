import Dwitter from "../lib/dwitter";

const playground = document.querySelector("#playground");
const dwitter = new Dwitter(playground, {
  width: 1920,
  height: 1080,
  playing: true,

  u: (c, x, t, S, C, T, R) => {
    x.font = "200px Sans-Serif";
    x.fillText("hello lana", 0, 540);
  }
});
