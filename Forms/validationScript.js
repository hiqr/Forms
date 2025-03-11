    // JavaScript code for form validation
	// Prevent form from submitting
        const form = document.getElementById('myForm');
        form.addEventListener('submit', validateInput);

      // Retrieve the input field value
      const inputField = document.getElementById('inputField');

      // Regular expression pattern for alphanumeric input
      const alphanumericPattern = /^[a-zA-Z0-9]+$/;

      // Check if the input value matches the pattern
      function validateInput(event) {
        const inputValue = inputField.value;
        if (alphanumericPattern.test(inputValue)) {

        // Valid input: display confirmation and submit the form
            alert('Form submitted successfully!');
            event.preventDefault();  // Prevent actual form submission
        } else {        

        // Invalid input: display error message
        alert('Error: Input must be alphanumeric.');
        event.preventDefault();
    }
}
        