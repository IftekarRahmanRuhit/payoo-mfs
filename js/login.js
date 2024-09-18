// step - 01 Set event handler 
document.getElementById('btn-login').addEventListener('click',function(event){
    // step-02 prevent default behaviour (prevent reloading browser)
    event.preventDefault();
    console.log("login btn clicked");

    // step-03 get the phone number 
     const phoneNumber = document.getElementById('phone-number').value;
     console.log(phoneNumber);





})