"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provider = exports.auth = exports.db = exports.storage = void 0;

var _app = require("firebase/app");

var _storage = require("firebase/storage");

var _firestore = require("firebase/firestore");

var _auth = require("firebase/auth");

// Import the functions you need from the SDKs you need
var firebaseConfig = {
  apiKey: "AIzaSyCgW1LsAgriH-QB2MmSaXrJOohXTSkdP8E",
  authDomain: "x-e1-6a192.firebaseapp.com",
  projectId: "x-e1-6a192",
  storageBucket: "x-e1-6a192.appspot.com",
  messagingSenderId: "492909442228",
  appId: "1:492909442228:web:3cbc5aeee9a63419e553e1",
  measurementId: "G-GTG5LRLSD4"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig);
var storage = (0, _storage.getStorage)(app);
exports.storage = storage;
var db = (0, _firestore.getFirestore)(app);
exports.db = db;
var auth = (0, _auth.getAuth)(app);
exports.auth = auth;
var provider = new _auth.GoogleAuthProvider();
exports.provider = provider;