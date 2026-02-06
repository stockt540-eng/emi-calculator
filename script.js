function calculateEMI() {
  let P = document.getElementById("amount").value;
  let R = document.getElementById("interest").value / 12 / 100;
  let N = document.getElementById("time").value * 12;

  let EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

  document.getElementById("result").innerHTML =
    "Monthly EMI: ₹" + EMI.toFixed(2);
}

