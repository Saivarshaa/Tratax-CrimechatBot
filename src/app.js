require('dotenv').config();
import "./scss/app.scss";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Homepage from "./component/Homepage";
import Register from "./component/Register";
import Chabot from "./component/Chatbot";
import LoginForm from "./component/LoginForm";
import Acknowledgement from "./component/Acknowledgement";
import Dashboard from './component/Dashboard';
//import TrackComplaint from './component/TrackComplaint';
import PageNotFound from "./component/PageNotFound";
import firebase from "./component/InitializeDatabase";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";
import "font-awesome/css/font-awesome.min.css";
import "normalize.css";
import $ from "jquery";
import TrackComplaint from "./component/TrackComplaint";


// var CryptoJS = require("crypto-js");
// var message = "";
// decryptMsg(message);

var UrlPathArray = new String(window.location.pathname).slice(1).split("/");
console.log(UrlPathArray);
//defining htmltags from class
window.customElements.define("header-content", Header);
window.customElements.define("chatbot-main", Chabot); //to use  <chatbot-main/>
window.customElements.define("user-register", Register); // to use <user-register/>
window.customElements.define("homepage-content", Homepage); // to use <homepage-content/>
window.customElements.define("acknowledgement-table", Acknowledgement); // to use <acknowledgement-table/>
window.customElements.define("login-form", LoginForm); // to use <login-form/>
window.customElements.define("dashboard-auth", Dashboard); // to use <dashboard-auth/>
window.customElements.define("track-complaint", TrackComplaint); // to use <track-complaint/>

const app = () => {
  document.getElementById("header").innerHTML = `<header-content/>`;
  document.getElementById("footer").innerHTML = Footer();
  //setting up the data change
  var headerControl = document.querySelector("header-content");
  switch (UrlPathArray[0]) {
    case "":
    case "Homepage":
      //homePage
      document.getElementById("mainContent").innerHTML = `<homepage-content/>`;
      //for fixed header on scroll
      $(window).scroll(function () {
        var sticky = $(".sticky"),
          scroll = $(window).scrollTop();
        if (scroll >= 150) sticky.addClass("fixed");
        else sticky.removeClass("fixed");
      });
      break;
    case "RegisterComplaint":
      //RegisterComplaint
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          headerControl.setAttribute("register-signout-btn", "signout");
          document.getElementById("mainContent").innerHTML = `<div class="container-fluid">
                                                                            <div class="row">
                                                                                <div class="col-lg">
                                                                                    <chatbot-main state="cmVnaXN0ZXI"/>
                                                                                </div>
                                                                                <div class="col">
                                                                                    2 of 2
                                                                                </div>
                                                                            </div>
                                                                        </div>`;
        } else {
          // No user is signed in.
          document.getElementById("mainContent").innerHTML = `<user-register/>`;
          headerControl.setAttribute("register-signout-btn", "register");
        }
      });
      break;
    case "RegisterComplaint":
      //RegisterComplaint
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          document.getElementById("mainContent").innerHTML = `<div class="container-fluid">
                                                                            <div class="row">
                                                                                <div class="col-lg">
                                                                                    <chatbot-main state="cmVnaXN0ZXI"/>
                                                                                </div>
                                                                                <div class="col">
                                                                                    2 of 2
                                                                                </div>
                                                                            </div>
                                                                        </div>`;
          headerControl.setAttribute("register-signout-btn", "signout");
        } else {
          // No user is signed in.
          document.getElementById("mainContent").innerHTML = `<user-register/>`;
          headerControl.setAttribute("register-signout-btn", "register");
        }
      });
      break;
    case "RegisterComplaintAnonymously":
      document.getElementById("mainContent").innerHTML = `<div class="container-fluid">
                                                                            <div class="row">
                                                                                <div class="col-lg">
                                                                                    <chatbot-main state="YW5vbnltb3Vz"/>
                                                                                </div>
                                                                                <div class="col">
                                                                                    2 of 2
          C                                                                      </div>
                                                                            </div>
                                                                        </div>`;
      break;
    case "trackComplaint":
      //Track Complaint
      document.getElementById("mainContent").innerHTML = '<track-complaint></track-complaint>';
      break;
    case "Acknowledgement":
      var acknowledgemenData = JSON.parse(sessionStorage.getItem("acknowledgement"));
      if(acknowledgemenData == null || acknowledgemenData == undefined){
        window.location.replace("pageNotFound");
        return;
      }
      
      document.getElementById("mainContent").innerHTML = `<center><acknowledgement-table
                                                                      ComplaintId= ${acknowledgemenData.ComplaintId}
                                                                      dateAndTime=  ${acknowledgemenData.dateAndTime}
                                                                      NameOfComplainant=  ${acknowledgemenData.NameOfComplainant}
                                                                      Subject=  ${acknowledgemenData.Subject}
                                                                      phoneNo=  ${acknowledgemenData.phoneNo}
                                                                      state=  ${acknowledgemenData.state}
                                                                      documentUploaded =  ${acknowledgemenData.documentUploaded}
                                                                      /><center>`;
      sessionStorage.clear();
      break;  
    case "LoginPoliceIncharge":
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          document.getElementById("mainContent").innerHTML = `<dashboard-auth/>`;
          headerControl.setAttribute("register-signout-btn", "signout");
        } else {
          // No user is signed in.
          document.getElementById("mainContent").innerHTML = `<login-form/>`;
          headerControl.setAttribute("register-signout-btn", "register");
        }
      });
      break;
   

    default:
      //404 not found page Error
      const container = document.getElementById("mainContent");
container.innerHTML = "";
container.appendChild(PageNotFound());

  }
};
//initilizing app
app();

