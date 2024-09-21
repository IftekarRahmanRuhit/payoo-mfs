document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const cashOutMoney = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cashout-pin');

    if(isNaN(cashOutMoney)){
        alert('Failed To Cash Out! Try Again');
        return;
    }


    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        if(cashOutMoney > balance){
            alert('You Do Not Have Enough Money To Cashout');
            return;
        }
        const newBalance = balance - cashOutMoney;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-200','px-4','rounded-xl','py-3');
        div.innerHTML = `
        <h4 class="text-2xl font-bold"> Cash Out </h4>
        <p class="font-medium">Withdraw : $ ${cashOutMoney}</p>
        <p class="font-medium">Current Balance : $ ${newBalance}</p>`

        document.getElementById('transaction-container').appendChild(div);

    }
    else{
        alert('Failed To Cash Out! Try Again');
    }

})