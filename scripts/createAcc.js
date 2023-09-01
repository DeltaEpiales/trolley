// Firebase configuration
// Include your Firebase config here

// Initialize Firebase
import app from '../src/firebase-config.js';
const auth = getAuth();

const registrationForm = document.getElementById('registrationForm');
const displayNameInput = document.getElementById('displayName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const googleSignInBtn = document.getElementById('googleSignInBtn');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const displayName = displayNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Registration successful
            const user = userCredential.user;
            console.log('Registered user:', user);
            // Send email verification
            sendEmailVerification(user)
                .then(() => {
                    alert('A verification email has been sent. Please check your inbox.');
                })
                .catch((error) => {
                    console.error('Error sending verification email:', error.message);
                });
        })
        .catch((error) => {
            // Handle registration error
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Registration error:', errorCode, errorMessage);
            alert(errorMessage);
        });
});


// Function to handle Google Sign-In
const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
        // You can redirect the user or perform other actions here
    } catch (error) {
        console.error("Google Sign-In error:", error);
    }
};

// Attach the click event to the Google Sign-In button
const googleSignInButton = document.getElementById('googleSignInBtn');
googleSignInButton.addEventListener('click', signInWithGoogle);

