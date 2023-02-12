  // Withdraw
  document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInput=document.getElementById('input-field-withdraw');
    const newWithdrawAmountString=withdrawInput.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);

     const withdrawField=document.getElementById('withdraw-field');
     const withdrawAmountString=withdrawField.innerText;
     const withdrawAmount=parseFloat(withdrawAmountString);
    
     const currentWithdrawAmount=withdrawAmount+newWithdrawAmount;
     withdrawField.innerText=currentWithdrawAmount;

    

    // const balance=document.getElementById('balance');
    // const balanceTotalString=balance.value;
    // const newBalanceTotal=parseFloat(balanceTotalString);

    // const balanceTotal=newBalanceTotal-newWithdrawAmount;

    // balance.innerText=balanceTotal;

    const balance=document.getElementById('balance');
    const balanceTotalString=balance.innerText;
    const balanceTotal=parseFloat(balanceTotalString);
    const currentBalanceTotal=balanceTotal-newWithdrawAmount;
    balance.innerText=currentBalanceTotal;

    withdrawInput.value='';

});