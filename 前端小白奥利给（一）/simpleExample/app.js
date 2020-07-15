document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  let beginnerIndex = 217;
  let width = 15;
  let leftboundary = 210;
  let rightboundary = 224;
  squares[beginnerIndex].classList.add("beginner");

  function disturbFactorMove() {
    let disturbFactorOneIndex = 7;
    squares[disturbFactorOneIndex].classList.add("disturbFactor");
    function disturbFactorOneMove() {
      squares[disturbFactorOneIndex].classList.remove("disturbFactor");
      disturbFactorOneIndex += width;
      squares[disturbFactorOneIndex].classList.add("disturbFactor");
    }
    disturbFactorOneMoveInterval = setInterval(disturbFactorOneMove, 300);
  }
  disturbFactorMoveInterval = setInterval(disturbFactorMove, 4500);
  function beginnerMove(e) {
    squares[beginnerIndex].classList.remove("beginner");
    switch (e.keyCode) {
      case 37:
        if (beginnerIndex !== leftboundary) beginnerIndex -= 1;
        break;
      case 39:
        if (beginnerIndex !== rightboundary) beginnerIndex += 1;
        break;
    }
    squares[beginnerIndex].classList.add("beginner");
  }
  document.addEventListener("keydown", beginnerMove);
});
