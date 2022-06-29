import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const app = firebase.initializeApp({
    "projectId": "delivery-app-mariangel",
    "appId": "1:547643160636:web:146ccbe5e1bf41dbb02b39",
    "storageBucket": "delivery-app-mariangel.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyCjh2uXD_wP19WAUejUPxZrILJ-Plbsi4g",
    "authDomain": "delivery-app-mariangel.firebaseapp.com",
    "messagingSenderId": "547643160636",
    "measurementId": "G-120GWQZ83F"
});