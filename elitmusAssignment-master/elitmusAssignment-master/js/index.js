document.querySelector('a').onclick = function () {
    window.location.href = 'signup.html';
}

// const firebaseConfig = {
//     apiKey: "AIzaSyCSS9UmY7JId8ygcwQbBnxhzmwGRd3B0sw",
//     authDomain: "elitmusassignment-5e9f3.firebaseapp.com",
//     databaseURL: "https://elitmusassignment-5e9f3-default-rtdb.firebaseio.com",
//     projectId: "elitmusassignment-5e9f3",
//     storageBucket: "elitmusassignment-5e9f3.appspot.com",
//     messagingSenderId: "437378714127",
//     appId: "1:437378714127:web:1c00da0abeb4bf4644b17a",
//     measurementId: "G-1JLKEE7JT0"
// };
const firebaseConfig = {
    apiKey: "AIzaSyCTV-2kXXLEoicH0WAh7Xx_VB83rlQwkfg",
    authDomain: "elitmus-50665.firebaseapp.com",
    databaseURL: "https://elitmus-50665-default-rtdb.firebaseio.com",
    projectId: "elitmus-50665",
    storageBucket: "elitmus-50665.appspot.com",
    messagingSenderId: "433202422260",
    appId: "1:433202422260:web:3237e38238ea2dec63d9a1",
    measurementId: "G-G15G6QHPR0"
  };

firebase.initializeApp(firebaseConfig);

// Listen for form submit
document.querySelector('button').addEventListener('click', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();
    var email = document.getElementById('email').value.toString().trim();
    var password = document.getElementById('password').value.toString().trim();

    if(email=='admin@admin.com'){
        if(password=='adminpass'){
            window.location.href = 'admin.html';
        }else{
            alert('wrong password');
        }
        return;
    }

    // create user
    loginUser(email, password);
}


// Save message to firebase
function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;

            // Clear form
            document.getElementById('contactForm').reset();

            window.location.href='start.html';
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage);
        });
}