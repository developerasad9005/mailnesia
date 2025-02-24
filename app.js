document.getElementById('generateButton').addEventListener('click', function () {
    // Get the input names from the textarea
    const nameInput = document.getElementById('nameInput').value.trim();

    // Split the input into individual names (expecting each line to contain "First Name Last Name")
    const nameList = nameInput.split('\n').map(name => name.trim()).filter(name => name.length > 0);

    if (nameList.length > 0) {
        // Clear any previous results in the table
        const tbody = document.getElementById('resultTable').getElementsByTagName('tbody')[0];
        tbody.innerHTML = '';

        // Loop through each name and generate email and password
        nameList.forEach(name => {
            const [firstName, lastName] = name.split(' ');

            if (firstName && lastName) {
                // Generate random number
                const randomNumber = Math.floor(Math.random() * 100000);  // Random number between 0 and 999

                // Generate email with random number before @mailnesia.com
                const generatedEmail = `${firstName}${lastName}${randomNumber}@mailnesia.com`;

                // Generate password
                const generatedPassword = `${firstName}@25`;

                // Create a new row in the table
                const newRow = tbody.insertRow();

               

                const passwordCell = newRow.insertCell(0);
                passwordCell.textContent = generatedPassword;

                 // Insert email and password into the row
                 const emailCell = newRow.insertCell(1);
                 emailCell.textContent = generatedEmail;
            }
        });
    } else {
        alert('Please enter at least one name.');
    }
});
