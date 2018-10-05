const budget = 12500000000
const people = 637244
function calculate() {
  let pensionSize = document.getElementById("vpd").value;
  let monthlyCosts = pensionSize * people;
  let yearlyCosts = monthlyCosts * 12;
  let percentage = yearlyCosts * 100 / budget;
  document.getElementById("result").textContent = percentage.toFixed(2) + "%"
}
