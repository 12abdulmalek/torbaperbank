function getInputValue(inputValue){
    const inputField=document.getElementById(inputValue);
    const inputFieldText=inputField.value;
    const inputFieldAmount=parseFloat(inputFieldText);
    inputField.value='';
    return inputFieldAmount;
}
function totalAmount1(input,inputvalue){
    const depositAmount=document.getElementById(input);
    const depositAmountText=depositAmount.innerText;
    const depositAmountTotal=parseFloat(depositAmountText);
    const totalDepositAmount=depositAmountTotal+inputvalue;
    depositAmount.innerText=totalDepositAmount;
}
function currentBalance(){
    const totalBalance=document.getElementById('total-balance');
    const previousBalance=totalBalance.innerText;
    const previusBalanceAmount=parseFloat(previousBalance);  
    return previusBalanceAmount;
}
function upadateAmount(value,isadd){
    const totalBalance=document.getElementById('total-balance');
    // const previousBalance=totalBalance.innerText;
    // const previusBalanceAmount=parseFloat(previousBalance);   
    const previusBalanceAmount= currentBalance();
    if(isadd==true){
        totalBalance.innerText=previusBalanceAmount+value;
    }
    else{
        totalBalance.innerText=previusBalanceAmount-value;
    }
}
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositAmount1= getInputValue('deposit-input');
    if(depositAmount1>0){
        totalAmount1('deposit-amount',depositAmount1)
        upadateAmount(depositAmount1 ,true);
    }
    
})
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInputAmount = getInputValue('withdraw-input');
    const previousBalance= currentBalance()
    if(withdrawInputAmount>0 && previousBalance>withdrawInputAmount ){
        document.body.style.background='white';
        totalAmount1('withdraw-amount',withdrawInputAmount);
        upadateAmount( withdrawInputAmount ,false);
    } 
    // else if(withdrawInputAmount<previousBalance){
    //     document.body.style.background='white';
    // }
    else if(withdrawInputAmount>previousBalance){
        document.body.style.background='red';
        alert('vai ami gorib eto taka amr kache nai maf chai vai');
    }
     
})