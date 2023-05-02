document.getElementById("play-btn").onclick = function () {
    location.href = "puzzle1.html";
};

setInterval((checkCurrentLoggedInUser = () => {
    const user = firebase.auth().currentUser;
    console.log(user);
}), 10000);
