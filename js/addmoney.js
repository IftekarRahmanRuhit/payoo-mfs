
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    console.log('button clicked');

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin');
    console.log(addMoney ,pinNumber);

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed To Add Money! Try Again');
    }

})