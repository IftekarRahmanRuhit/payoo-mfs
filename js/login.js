// step - 01 Set event handler 
document.getElementById('btn-login').addEventListener('click',function(event){
    // step-02 prevent default behaviour (prevent reloading browser)
    event.preventDefault();


    // step-03 get the phone number 
     const phoneNumber = document.getElementById('phone-number').value;
     const pinNumber = document.getElementById('pin-number').value;
     console.log(phoneNumber , pinNumber);
    
    //  step-04 
    if(phoneNumber === '01712' && pinNumber === '1234'){
        window.location.href='/home.html';
    }
    else{
        alert('wrong phone number of pin');
    }





})