
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function showBgById(id){
    document.getElementById('add-money').classList.remove('bg-indigo-700')
    document.getElementById('cash-out').classList.remove('bg-indigo-700')
    document.getElementById('transaction').classList.remove('bg-indigo-700')
    document.getElementById(id).classList.add('bg-indigo-700');
}


