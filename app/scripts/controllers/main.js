'use strict';



/**
 * @ngdoc function
 * @name flockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flockApp
 */
check();

angular.module('flockApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

function check(){
  if (localStorage.getItem("user")!== "undefined"){
    // open view with user
    window.location.href = './#/test';
    console.log("hello")
  }
}

 // Login js

function cambiar_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
document.querySelector('.cont_form_login').style.display = "block";
document.querySelector('.cont_form_sign_up').style.opacity = "0";               

setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
  
setTimeout(function(){    
document.querySelector('.cont_form_sign_up').style.display = "none";
},200);  

  }

function cambiar_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
document.querySelector('.cont_form_login').style.opacity = "0";
  
setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
},100);  

setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
},400);  


}    

function ocultar_login_sign_up() {

document.querySelector('.cont_forms').className = "cont_forms";  
document.querySelector('.cont_form_sign_up').style.opacity = "0";               
document.querySelector('.cont_form_login').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.cont_form_sign_up').style.display = "none";
document.querySelector('.cont_form_login').style.display = "none";
},500);  
  
  }



  function login() {
  var user = document.querySelector('[name="logUser"]').value;
  var pass = document.querySelector('[name="logPass"]').value;

  //localStorage.setItem(user, pass);
  // get info on user from DB
    var config = {
      apiKey: '4FwFE2ERblEgZcIXPpTRJ5K0X3BdOlrw9dtEpvoF',
      // authDomain: '<your-auth-domain>',
      databaseURL: 'https://parsley-f4ee0.firebaseio.com/'
      // storageBucket: '<your-storage-bucket>'
    };
    firebase.initializeApp(config);

    var results;
    firebase.database().ref('/').once('value').then(function(snapshot) {
      results = snapshot.val();
      if (pass == results.users[user].pass){
        //return new view - link to new view
        window.location.href = './#/test';

        localStorage.setItem("user", user);
        localStorage.setItem("cusID", results.users[user].cusID)
      }
    });

  }


  function signup() {
  var user = document.querySelector('[name="signUser"]').value;
  var pass = document.querySelector('[name="signPass"]').value;
  var confPass = document.querySelector('[name="signConfPass"]').value;
  localStorage.setItem(email, confPass);

  // pass user and pass to BD

  // LEAVE FOR LATER


  }




