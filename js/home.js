// step-01 add an event handler to the add money button inside the form

document.getElementById('cash-out').addEventListener('click',function(){
    window.location.href='./cashout.html';
})

document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('input-add-money').value;
    const pinNumberInput = document.getElementById('input-pin').value;
    console.log(addMoneyInput,pinNumberInput);
    console.log('output');

    if(pinNumberInput === '1234'){

        const balance = document.getElementById('account-balance').innerText
        console.log(balance);
        const addMoney = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        console.log(addMoney,balanceNumber);
        const newBalance = addMoney + balanceNumber;
        console.log(newBalance);
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed to add money! Please try again');
    }





})