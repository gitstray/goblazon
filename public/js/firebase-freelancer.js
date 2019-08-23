
firebase.initializeApp(config);

//Reference messages collection
let messagesRef = firebase.database().ref('messages');

//Listen for submit
document.getElementById('contactForm').addEventListener('sumbit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

    // Get Values
    let name = getInputVal('name');
    let company = getInputVal('company');

    //Save Message
    saveMessage(name, company);
    
    //show alert
    document.querySelector('.alert').getElementsByClassName.display = 'block';

    setTimeout(function(){
        document.querySelector('.alert').getElementsByClassName.display = 'none';
    },3000);

    //console.log(name);

}
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: comapony
    })
}
