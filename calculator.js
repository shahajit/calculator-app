let inputele = document.querySelector("#display");
let btnsele = document.querySelectorAll("button");

for (let i = 0; i < btnsele.length; i++) {
  btnsele[i].addEventListener("click", function () {
    // console.log(btnsele[i].textContent);
    let btnValue = btnsele[i].innerHTML;

    if (btnValue === "C") {
      clearResult();
    } else if (btnValue === "=") {
      calculateResult();
    } else {
      appendValue(btnValue);
    }
  });
}

function clearResult() {
  inputele.value = "";
}

function calculateResult() {
  inputele.value = eval(inputele.value);
}

function appendValue(btnValue) {
  inputele.value += btnValue; // inputele.v=inp.v + btnv
}
