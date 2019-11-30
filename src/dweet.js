import Dwitter from "../lib/dwitter";

const playground = document.querySelector("#playground");

new Dwitter(playground, {
  width: 1920,
  height: 1080,
  playing: true,
  u: (c, x, t, S, C, T, R) => {
    "use sloppy";
    c.width = 1920; // clear the canvas
    for (i = 0; i < 9; i++)
      x.fillRect(400 + i * 100 + S(t) * 300, 400, 50, 200); // draw 50x200 rects
  }
});
