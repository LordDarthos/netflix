// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps, FirebaseApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXqhMKAN8ob6fyO7dI4eQp_wujjq_K0FI",
    authDomain: "netflix-clone-42242.firebaseapp.com",
    projectId: "netflix-clone-42242",
    storageBucket: "netflix-clone-42242.appspot.com",
    messagingSenderId: "697951439091",
    appId: "1:697951439091:web:46ab2cd407b092500a0f86",
    measurementId: "G-D1RH8N49RB"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

const analytics = getAnalytics(app);

export default app
export { auth, db }

function getAnalytics(app: FirebaseApp) {
    throw new Error('Function not implemented.')
}
