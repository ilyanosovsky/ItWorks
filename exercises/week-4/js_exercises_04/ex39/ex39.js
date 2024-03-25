// JavaScript – Multiple inputs copy
// The following exercise contains the following subjects:
// ● events
// Instructions
// Many times an application needs to verify the account by
// sending a verification code by text message.
// Let's create functionality that enables the user to paste the
// verification code to the input fields.
// Features:
// 1. The user is allowed to type the values manually. After
// each value is inserted, the next input will be focused.
// 2. The user is allowed to paste the verification code.
// 3. An extra challenge will be to auto submit the form once all
// inputs all populated.
// Things to think about:
// What happens if the user pastes only 3 digits and there are
// 6 inputs to fill out.
// Here is an example.
// Things to help you:
// Google “paste event” to understand how to listen to a
// paste event.
// Google “clipboardData” to find out how to get the value of
// a paste event.

const inputs = document.querySelectorAll(".verificationInput");
const comment = document.querySelector(".commentToUser");

// Function to focus on the next input field
const focusNextInput = (currentInput) => {
  const currentIndex = Array.from(inputs).indexOf(currentInput);
  if (currentIndex < inputs.length - 1) {
    inputs[currentIndex + 1].focus();
  }
};

// Function to handle paste event
const handlePaste = (event) => {
  event.preventDefault();
  const clipboardData = event.clipboardData || window.clipboardData;
  const pastedData = clipboardData.getData("text");

  if (pastedData.length < inputs.length) {
    for (let i = 0; i < pastedData.length; i++) {
      inputs[i].value = pastedData[i];
      focusNextInput(inputs[i]);
      comment.textContent = "Pasted data is shorter than available inputs!";
    }
  } else if (pastedData.length === inputs.length) {
    console.log("submit");
    document.getElementById("verificationForm").submit();
    alert("Form was submitted successfully!");
  } else {
    // data is longer than available inputs
    comment.textContent = "Pasted data is longer than available inputs!";
  }
};

// Add event listeners
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    focusNextInput(input);
  });
  input.addEventListener("paste", handlePaste);
});
