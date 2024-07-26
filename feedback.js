// Replace with your Firebase project config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Firestore
  const db = firebase.firestore();
  
  // Define submitFeedback function
  function submitFeedback() {
    const name = document.getElementById('name').value;
  
    // Add name to Firestore
    db.collection('names').add({
      name: name,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      console.log('Name submitted successfully!');
      alert('Name submitted successfully!');
      document.getElementById('feedbackForm').reset();
    })
    .catch((error) => {
      console.error('Error adding name: ', error);
      alert('An error occurred. Please try again.');
    });
  }
  