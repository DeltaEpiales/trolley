// Import necessary Firebase modules
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js';
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore-lite.js';


// Import the initialized Firebase app instance from firebase-config.js
import app from './firebase-config.js';

// Initialize auth and firestore
const auth = getAuth();
const db = getFirestore();
const loginForm = document.getElementById('loginForm');
const errorText = document.getElementById('errorText');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Logged in:', user);
        // You can redirect the user or perform other actions here
    } catch (error) {
        errorText.textContent = error.message;
    }
});
// ... Set up event listeners and functions ...

// Example: Add an item to the user's cart
onAuthStateChanged(auth, user => {
  if (user) {
    const newItem = { name: 'Espresso', price: 3.99 };
    addItemToCart(user.uid, newItem);
  }
});
