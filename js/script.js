 // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDkINTNRFvsWDE6di24IyGwoMgw5fsQWD0",
    authDomain: "mywebsite-f0e1e.firebaseapp.com",
    databaseURL: "https://mywebsite-f0e1e-default-rtdb.firebaseio.com",
    projectId: "mywebsite-f0e1e",
    storageBucket: "mywebsite-f0e1e.appspot.com",
    messagingSenderId: "611803585661",
    appId: "1:611803585661:web:947161df9c24cc44732514"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference Contact Information collection
let contactInfo=firebase.database().ref("conInfo")

let menu=document.querySelector(".menu")
let meIt=document.querySelector(".meIt")

let overmenu=document.querySelector(".overmenu")
menu.addEventListener("click",overMenu)
meIt.addEventListener("click",overMenu)

function overMenu(){
    let dspl=overmenu.style.display
    if(dspl=="" || dspl=="none"){
        overmenu.style.display="initial"
    }else{
        overmenu.style.display="none"
    }
}


document.querySelector("#fs-frm").addEventListener("submit",collectInfo)
// document.querySelector('#send').addEventListener("click",sendEmail)
function collectInfo(e){
    e.preventDefault()

    var name=document.querySelector("#full-name").value
    var email=document.querySelector("#email-address").value
    var message=document.querySelector("#message").value
    var hidden=document.querySelector("#hidden").value
    console.log(name,email,message)
    if(hidden.length==0){
        saveContactInfo(name,email,message)
//         sendEmail(name,email,message)        
    }
    document.querySelector("#fs-frm").reset()
}

function saveContactInfo(name,email,message){
    let newContactInfo=contactInfo.push()
    newContactInfo.set({
        name:name,
        email:email,
        message:message
    })
}

function sendEmail(name,email,message){
    Email.send({
        // Host : "smtp.gmail.com",
        // Username : "sphinkegypt@gmail.com",
        // Password : "rdrauotfbpkntcwa",
        SecureToken:'3e359ebc-302b-4749-abbf-b4100855ab94',
        To : 'phaleshm@gmail.com',
        From : email,
        Subject : 'Mail from '+name,
        Body : message
    }).then(
      message => alert(message)
    );
}