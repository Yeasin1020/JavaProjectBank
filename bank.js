document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInput=document.getElementById('input-field-deposit');
    const depositValue=depositInput.value;

    const deposit=document.getElementById('deposit-me');
    const depositTotal=deposit.innerText;
    deposit.innerText=depositValue;
})