function postData(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields');
        return; // Exit the function early if any field is empty
    }

    // Retrieve data from localStorage
    let storedData = localStorage.getItem('userData');

    if (!storedData) {
        alert('No user data found. Please sign up.');
        return;
    }

    // Parse the stored data from JSON
    let userData = JSON.parse(storedData);

    // Check if the entered email and password match the stored data
    if (email === userData.email && password === userData.password) {
        alert('Login successful!', window.location.assign("main.html"));
    } else {
        alert('Incorrect email or password');
    }
}
