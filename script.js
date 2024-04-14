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
