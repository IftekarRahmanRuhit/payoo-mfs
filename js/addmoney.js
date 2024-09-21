
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    console.log('button clicked');

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin');

    if(isNaN(addMoney)){
        alert('Failed To Add Money! Try Again');
        return;
    }
 

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;

                // add to transaction history
                const div = document.createElement('div');
                div.classList.add('bg-yellow-200','px-4','rounded-xl','py-3');
                div.innerHTML = `
                <h4 class="text-2xl font-bold"> Add Money </h4>
                <p class="font-medium">Money Added : $ ${addMoney}</p>
                <p class="font-medium">Current Balance : $ ${newBalance}</p>`
        
                document.getElementById('transaction-container').appendChild(div);

    }
    else{
        alert('Failed To Add Money! Try Again');
    }

})