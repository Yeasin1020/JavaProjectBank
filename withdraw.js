  // Withdraw
  document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInput=document.getElementById('input-field-withdraw');
    const newWithdrawAmountString=withdrawInput.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);

  

     const withdrawField=document.getElementById('withdraw-field');
     const withdrawAmountString=withdrawField.innerText;
     const withdrawAmount=parseFloat(withdrawAmountString);

     withdrawInput.value='';

     if(isNaN(newWithdrawAmount)){
      alert('Please provide valid number.Toya ki dey na naki matha thik nai🤣');
      return;
    }

    

    // const balance=document.getElementById('balance');
    // const balanceTotalString=balance.value;
    // const newBalanceTotal=parseFloat(balanceTotalString);

    // const balanceTotal=newBalanceTotal-newWithdrawAmount;

    // balance.innerText=balanceTotal;

    const balance=document.getElementById('balance');
    const balanceTotalString=balance.innerText;
    const balanceTotal=parseFloat(balanceTotalString);

    

    if(balanceTotal<newWithdrawAmount){
      alert('kajta balo koren nai apnar babar bank a eto tk nai');
      return;
     };

     
     const currentWithdrawAmount=withdrawAmount+newWithdrawAmount;
     withdrawField.innerText=currentWithdrawAmount;

    const currentBalanceTotal=balanceTotal-newWithdrawAmount;
    balance.innerText=currentBalanceTotal;

    

   

});