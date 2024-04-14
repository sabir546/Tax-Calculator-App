document.getElementById("taxForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const age = document.getElementById("age").value;
  const income = parseFloat(document.getElementById("income").value);
  const extraIncome =
    parseFloat(document.getElementById("extraIncome").value) || 0; // Default to 0 if empty or invalid
  const deductions =
    parseFloat(document.getElementById("deductions").value) || 0; // Default to 0 if empty or invalid

  // Validate inputs
  let hasError = false;
  if (!age) {
    document.getElementById("ageError").style.display = "inline";
    hasError = true;
  }
  if (isNaN(income) || income < 0) {
    document.getElementById("incomeError").style.display = "inline";
    hasError = true;
  }
  if (isNaN(extraIncome) || extraIncome < 0) {
    document.getElementById("extraIncomeError").style.display = "inline";
    hasError = true;
  }
  if (isNaN(deductions) || deductions < 0) {
    document.getElementById("deductionsError").style.display = "inline";
    hasError = true;
  }

  if (!hasError) {
    // Perform tax calculation
    let taxRate;
    if (age === "<40") {
      taxRate = 0.3;
    } else if (age === ">=40&<60") {
      taxRate = 0.4;
    } else {
      taxRate = 0.1;
    }

    const taxableIncome = Math.max(
      income + extraIncome - deductions - 800000,
      0
    );
    const taxAmount = taxRate * taxableIncome;

    // Display result in modal
    const modal = document.getElementById("modal");
    const taxResult = document.getElementById("taxResult");
    taxResult.textContent = `Tax Amount: ${taxAmount.toFixed(2)} INR`;
    modal.style.display = "block";

    // Close modal when close button is clicked
    document
      .getElementsByClassName("close")[0]
      .addEventListener("click", function () {
        modal.style.display = "none";
      });
  }
});

//  hover on question marks show the details
document.querySelector(".annual").addEventListener("mouseenter", function (e) {
  document.querySelector(".modal2").style.display = "block";
});

document.querySelector(".annual").addEventListener("mouseleave", function (e) {
  document.querySelector(".modal2").style.display = "none";
});

//Shows the error if you enter any non numerical value
//
//For INCOME INPUT

const incomeInput = document.getElementById("income");
const tooltipIcon = document.querySelector(".tooltip");
const errorMessage = document.getElementById("error-message");

incomeInput.addEventListener("input", function () {
  const isValid = /^\d+$/.test(this.value);
  if (!isValid) {
    errorMessage.style.display = "block";
    tooltipIcon.style.color = "red"; // Change tooltip color to red
  } else {
    errorMessage.style.display = "none";
    tooltipIcon.style.color = "black"; // Reset tooltip color
  }
});

// FOR EXTRA INCOME INPUT

const extraIncome = document.getElementById("extraIncome");
const tooltipIcon2 = document.querySelector(".tooltip2");
const errorMessage2 = document.getElementById("error-message2");

extraIncome.addEventListener("input", function () {
  const isValid = /^\d+$/.test(this.value);
  if (!isValid) {
    errorMessage2.style.display = "block";
    tooltipIcon2.style.color = "red"; // Change tooltip color to red
  } else {
    errorMessage2.style.display = "none";
    tooltipIcon2.style.color = "black"; // Reset tooltip color
  }
});

// FOR DEDUCTION INPUT
const deductions = document.getElementById("deductions");
const tooltipIcon3 = document.querySelector(".tooltip3");
const errorMessage3 = document.getElementById("error-message3");
deductions.addEventListener("input", function () {
  const isValid = /^\d+$/.test(this.value);
  if (!isValid) {
    errorMessage3.style.display = "block";
    tooltipIcon3.style.color = "red"; // Change tooltip color to red
  } else {
    errorMessage3.style.display = "none";
    tooltipIcon3.style.color = "black"; // Reset tooltip color
  }
});
