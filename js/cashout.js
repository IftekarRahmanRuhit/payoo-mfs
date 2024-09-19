
document.getElementById('add-money').addEventListener('click',function(){
    window.location.href='./home.html';
})

document.getElementById('btn-cashout').addEventListener('click',function(event){
    event.preventDefault();

    const cashOutMoneyInput = document.getElementById('input-cashout-money').value;
    const pinNumberInput = document.getElementById('input-pin').value;
    console.log(cashOutMoneyInput,pinNumberInput);
    console.log('output');

    if(pinNumberInput === '1234'){

        const balance = document.getElementById('account-balance').innerText
        console.log(balance);
        const cashOutMoney = parseFloat(cashOutMoneyInput);
        const balanceNumber = parseFloat(balance);
        console.log(cashOutMoney,balanceNumber);
        const newBalance =  balanceNumber - cashOutMoney;
        console.log(newBalance);
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed to Cash Out! Please try again');
    }


})