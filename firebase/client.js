// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, addDoc, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHo-LLKakamu3YIocSmoyxv5qytiji-tQ",
  authDomain: "skcleaning-53361.firebaseapp.com",
  projectId: "skcleaning-53361",
  storageBucket: "skcleaning-53361.appspot.com",
  messagingSenderId: "841843294778",
  appId: "1:841843294778:web:2a950bf1309f9350fd2b03",
  measurementId: "G-B1FBZHP7XD",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// eslint-disable-next-line no-unused-vars
// const analytics = getAnalytics(app)

const db = getFirestore(app)

export const addDocMy = ({ name, lastName }) => {
  return addDoc(collection(db, "cities"), {
    name: name,
    country: lastName,
  })
}
