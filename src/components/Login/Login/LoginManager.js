// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';

// export const initializeFramework = () => {
//     if(firebase.apps.length === 0){
//         firebase.initializeApp(firebaseConfig);
//     }
// }


// export  const handleGoogleSignIn = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//    return firebase.auth().signInWithPopup(provider)
//       .then(res => {
//         const { displayName, photoURL, email } = res.user;
//         const signedInUser = {
//           isSignedIn: true,
//           name: displayName,
//           email: email,
//           photo: photoURL,
//           success: true
//         }
//         setUserToken();
        
//         return signedInUser;
//       })
//       .catch(err => {
//         console.log(err);
//         console.log(err.message);
//       })
//   }


//   const setUserToken = () => {
//     firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
//       sessionStorage.setItem('token', idToken);
//     }).catch(function(error) {

//     });
//   }



//   export  const handleFbSignIn = () => {
    
//     const fbProvider = new firebase.auth.FacebookAuthProvider();
//     return firebase
//         .auth()
//         .signInWithPopup(fbProvider)
//         .then((result) => {
//           /** @type {firebase.auth.OAuthCredential} */
//           var credential = result.credential;
  
//           // The signed-in user info.
//           var user = result.user;
//           user.success = true;
//           return user;
          
//           // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//           // var accessToken = credential.accessToken;
  
//           // ...
//         })
//         .catch((error) => {
//           // Handle Errors here.
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           // The email of the user's account used.
//           var email = error.email;
//           // The firebase.auth.AuthCredential type that was used.
//           var credential = error.credential;
  
//           // ...
//         });
//     }


//    export const handleSignOut = () => {
//         return firebase.auth().signOut()
//           .then(res => {
//             const signedOutUser = {
//               isSignedIn: false,
//               name: '',
//               email: '',
//               photo: '',
//               error: '',
//               success: false
//             }
//             return signedOutUser;
//             // Sign-out successful.
//           })
//           .catch((error) => {
//             // An error happened.
//           });
//       }

//       export const createUserWithEmailAndPassword =(name, email, password) =>{
//        return firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then(res => {
//           console.log(res);
//           const newUserInfo = res.user ;
//           newUserInfo.error = '';
//           newUserInfo.success = true;
//           updateUserName(name);
//           return newUserInfo;
//         })

//         .catch(error => {
//           const newUserInfo = {};
//           newUserInfo.error = error.message;
//           newUserInfo.success = false;
//           return newUserInfo;
//        });
//       }

//       export const signInUserWithEmailAndPassword = (email, password)=>{
//         return firebase.auth().signInWithEmailAndPassword(email, password)
//         .then(res => {
//           // Signed in
//           const newUserInfo = res.user;
//           newUserInfo.error = '';
//           newUserInfo.success = true;
//           return newUserInfo;
//         })
//         .catch((error) => {
//           const newUserInfo = {};
//           newUserInfo.error = error.message;
//           newUserInfo.success = false;
//           return newUserInfo;
//         });
//       }


//       const updateUserName = name => {
//         const user = firebase.auth().currentUser;
    
//         user.updateProfile({
//           displayName: name
//           // photoURL: "https://example.com/jane-q-user/profile.jpg"
//         }).then(function () {
//           // Update successful.
//         }).catch(function (error) {
//           // An error happened.
//         });
//       }
