import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: process.env.REACT_API_KEY,
    authDomain: "netflix-y.firebaseapp.com",
    projectId: "netflix-y",
    storageBucket: "netflix-y.appspot.com",
    messagingSenderId: "278692663204",
    appId: "1:278692663204:web:1e663eee7e7e7e5b767b31"
}
const firebase = Firebase.initializeApp(config)



export { firebase }

