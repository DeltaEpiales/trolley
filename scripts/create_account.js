// Initialize Firebase app (already done in firebase-config.js)

// References to HTML elements
const registrationForm = document.getElementById('registrationForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const errorText = document.getElementById('errorText');

// Register form submission event
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        errorText.textContent = "Passwords do not match.";
        return;
    }

    // Create a new user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User created successfully
            const user = userCredential.user;
            console.log('User created:', user);

            // Send email verification
            sendEmailVerification(user)
                .then(() => {
                    // Email verification sent
                    console.log('Email verification sent.');
                    // You can redirect the user or perform other actions here
                })
                .catch((error) => {
                    // Handle email verification error
                    console.error('Email verification error:', error);
                });
        })
        .catch((error) => {
            // Handle registration errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Registration error:', errorCode, errorMessage);
            errorText.textContent = errorMessage;
        });
});
