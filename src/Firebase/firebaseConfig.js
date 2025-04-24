import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfWwelqpPN02MwHsTMPnlZs6s2MqT0QzE",
  authDomain: "proyect-break-3-final.firebaseapp.com",
  projectId: "proyect-break-3-final",
  storageBucket: "proyect-break-3-final.appspot.com",
  messagingSenderId: "668187031617",
  appId: "1:668187031617:web:fd0068c62858850a4feec0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
