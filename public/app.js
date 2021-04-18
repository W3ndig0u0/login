const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtnGoogle = document.getElementById('signInBtnGoogle');
const signOutBtnFaebook = document.getElementById('signOutBtnFaebook');

const userDetails = document.getElementById('userDetails');


const googleProvider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtnGoogle.onclick = () => auth.signInWithPopup(googleProvider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});