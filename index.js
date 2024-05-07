let conBtn = document.getElementById("convertBtn");
let inputEl = document.getElementById("convertNum");
const lengthEl = document.getElementById("lengthConvert");
const volumeEl = document.getElementById("volumeConver");
const massEl = document.getElementById("massConvert");

conBtn.addEventListener("click", function () {
  const value = Number(inputEl.value);
  inputEl.value = "";
  renderMeterPart(value);
  renderVolumePart(value);
  renderMassPart(value);
});

// functions for calculating the converter part

function renderMeterPart(num) {
  lengthEl.textContent = `${num} meters = ${(num * 3.28).toFixed(
    3
  )} foots | ${num} foots = ${(num * (1 / 3.28)).toFixed(3)} meters`;
  return lengthEl;
}

function renderVolumePart(num) {
  volumeEl.textContent = `${num} liters = ${(num * 0.26).toFixed(
    3
  )} gallons | ${num} gallons = ${(num * (1 / 0.26)).toFixed(3)} liters`;
}

function renderMassPart(num) {
  massEl.textContent = `${num} kilos = ${(num * 2.204).toFixed(
    3
  )} pounds | ${num} pounds = ${(num * (1 / 2.204)).toFixed(3)} kilos`;
}
