// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBCazJBh64QDZtjeU1Jvt_Jn9CvoZpvb9U",
	authDomain: "fisio-app-87a79.firebaseapp.com",
	projectId: "fisio-app-87a79",
	storageBucket: "fisio-app-87a79.firebasestorage.app",
	messagingSenderId: "660899747292",
	appId: "1:660899747292:web:44822789636174ab776b19",
	measurementId: "G-5CJGGCCZW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/* 
npm install firebase
npm install -g firebase-tools
I am building a My Online CV, a web app simple. Stakeholder input is in README.md.                                                                                                                                                      Use AskUserQuestion to interview me.                                                                                                                                                 
Create 3 files in /specs:                                                                                                                                                            
mission.md                                                                                                                                                                           
tech-stack.md                                                                                                                                                                        
roadmap.md (small steps)                                                                                                                                                             
Work with me to make key decisions. */
