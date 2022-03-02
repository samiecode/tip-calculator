let tipPercent;
let tipAmount;

let clickTip = (value) => {
  tipPercent = value;
  console.log(tipPercent);
};

let bill = document.getElementById("bill").addEventListener("change", () => {
  bill = Number(document.getElementById("bill").value);
  tip();
});

let custom = document
  .getElementById("custom")
  .addEventListener("change", () => {
    tipPercent = Number(document.getElementById("custom").value);
    console.log(tipPercent);
    tip();
  });

let people = document
  .getElementById("people")
  .addEventListener("change", () => {
    people = Number(document.getElementById("people").value);
    tip();
  });

let tip = () => {
  tipAmount = ((bill * (tipPercent / 100)) / people).toFixed(2);
  document.getElementById("showTipAmount").innerHTML = tipAmount;
};

let total;

document.getElementById("reset").addEventListener("click", () => {});
