let tipPercent;
let tipAmount;
let totalAmount;
const showAmount = document.getElementsByClassName("showAmount");
const tipBtn = [...document.getElementsByClassName("tip_btn")];

// BILL SECTION
let bill = document.getElementById("bill").addEventListener("keyup", () => {
  bill = Number(document.getElementById("bill").value);
  document.getElementById("reset").style.opacity = "1";
  tip();
  total();
  checker();
});

// SELECT TIP SECTION
let clickTip = (value, index) => {
  tipPercent = value;
  tipBtn.forEach((btn) => {
    btn.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn.style.color = "hsl(0, 0%, 100%)";
  });
  tipBtn[index].style.backgroundColor = "hsl(172, 67%, 45%)";
  tipBtn[index].style.color = "hsl(183, 100%, 15%)";
  document.getElementById("reset").style.opacity = "1";
  tip();
  total();
  checker();
};

let custom = document.getElementById("custom").addEventListener("keyup", () => {
  tipPercent = Number(document.getElementById("custom").value);
  document.getElementById("reset").style.opacity = "1";
  tip();
  total();
  checker();
});

// NUMBER OF PEOPLE SECTION
let people = document.getElementById("people").addEventListener("keyup", () => {
  people = Number(document.getElementById("people").value);
  document.getElementById("reset").style.opacity = "1";

  if (people === 0) {
    document.getElementById("people").style.outlineColor = "#e55151";
    document.getElementById("warning").style.display = "flex";
  } else {
    document.getElementById("people").style.outlineColor = "hsl(172, 67%, 45%)";
    document.getElementById("warning").style.display = "none";
  }
  tip();
  total();
  checker();
});

// RESET FUNCTION
document.getElementById("reset").addEventListener("click", () => {
  bill = undefined;
  tipPercent = undefined;
  people = undefined;
  document.getElementById("bill").value = null;
  document.getElementById("custom").value = null;
  document.getElementById("people").value = null;
  document.getElementById("reset").style.opacity = "0.3";
  checker();
});

//GLOBAL FUNCTIONS
let tip = () => {
  tipAmount = Number(((bill * (tipPercent / 100)) / people).toFixed(2));
};

let total = () => {
  totalAmount = (bill / people + tipAmount).toFixed(2);
};

let checker = () => {
  if (bill === undefined || tipPercent === undefined || people === undefined) {
    tipAmount = "0.00";
    totalAmount = "0.00";
  }

  showAmount[0].innerHTML = tipAmount;
  showAmount[1].innerHTML = totalAmount;
};
