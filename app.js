(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;

      if (value === "+/-") {
        screen.value = screen.value.includes("-")
          ? screen.value.slice(1)
          : "-" + screen.value;
      } else if (value === "%") {
        screen.value = parseFloat(screen.value) / 100;
      } else {
        screen.value += value;
      }
    });
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      console.log(screen.value);
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
