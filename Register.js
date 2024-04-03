function saveData(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields');
        return; // Exit the function early if any field is empty
    }

    // Check if the email already exists in local storage
    let storedData = localStorage.getItem('userData');
    if (storedData) {
        let userData = JSON.parse(storedData);
        if (userData.email === email) {
            alert('This email is already registered.');
            return; // Exit the function if the email already exists
        }
    }

    // Create a JavaScript object
    let data = {
        name: name,
        email: email,
        password: password
    };

    // Convert the JavaScript object to a JSON string
    let jsonData = JSON.stringify(data);

    // Store the JSON string in the local storage
    localStorage.setItem("userData", jsonData);

    console.log("Data stored successfully in local storage");
    alert("Registered successfully");
}