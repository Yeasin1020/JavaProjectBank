document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInput=document.getElementById('input-field-deposit');
    const newDepositValueString=depositInput.value;
    const newDepositValue=parseFloat(newDepositValueString);

    const deposit=document.getElementById('deposit-me');
    const previousDepositTotalString=deposit.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);

    const currentDepositAmount=previousDepositTotal+newDepositValue;

    deposit.innerText=currentDepositAmount;

    // balance

    const balance=document.getElementById('balance');
    const balanceTotalString=balance.innerText;
    const balanceTotal=parseFloat(balanceTotalString);
    const currentBalanceTotal=balanceTotal+newDepositValue;
    balance.innerText=currentBalanceTotal;
    depositInput.value='';

});
  

