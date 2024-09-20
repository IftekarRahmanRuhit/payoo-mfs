document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    console.log('button clicked');

    const cashOutMoney = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cashout-pin');
    console.log(cashOutMoney ,pinNumber);

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashOutMoney;
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed To Cash Out! Try Again');
    }

})