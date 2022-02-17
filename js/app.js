function inputFieldValidation(){
    const getIncome = document.getElementById('income-input-field').value
    const getFoodCost = document.getElementById('food-input-field').value
    const getRentCost = document.getElementById('rent-input-field').value 
    const getClothCost = document.getElementById('cloth-input-field').value 

    if(getIncome == '' || getFoodCost == '' || getRentCost == '' || getClothCost == ''){
        const msg = document.getElementById('error-msg')
        msg.innerHTML = 'Field Should not Empty'
    }
    if(getIncome < 0 || getFoodCost < 0 || getRentCost < 0 || getClothCost < 0){
        const msg = document.getElementById('error-msg')
        msg.innerHTML = ' OPP! Negative value is not allow'
    }
}


function getInputValue(){
    
    const getIncome = document.getElementById('income-input-field')
         parseIncomeAmount = parseFloat(getIncome.value)

    const getFoodCost = document.getElementById('food-input-field')
         foodParseAmount = parseFloat(getFoodCost.value)

    const getRentCost = document.getElementById('rent-input-field')
          rentParseAmount = parseFloat(getRentCost.value)

    const getClothCost = document.getElementById('cloth-input-field')
          clothParseAmount = parseFloat(getClothCost.value)
    
    const totalCosting = foodParseAmount + rentParseAmount + clothParseAmount

    if( totalCosting > parseIncomeAmount){
        const msg = document.getElementById('error-msg')
        msg.innerHTML = 'Your Income is limited, Reduce cost'
    }else{
            const getCostingFieldId = document.getElementById('total-cost')
             getCostingFieldId.innerText = totalCosting
             const getBalanceId = document.getElementById('balance')
             const balance = parseIncomeAmount - totalCosting
                 getBalanceId.innerText = balance
            
            }
    
              

    
   
}

//saving add eventlistener code here 
document.getElementById('submit').addEventListener('click',function(){  
    inputFieldValidation()
    getInputValue()
   
})

function savingValidity(){
    const getIncomeAmount = document.getElementById('income-input-field').value
    const getSavingPercent = document.getElementById('saving-input-field').value
    if(getIncomeAmount == '' || getSavingPercent == '' || getIncomeAmount < 0 || getSavingPercent < 0){
       console.log(alert('Saving and Income should keep a positive value'))
    }else{
       
        const incomeParseAmount = parseFloat(getIncomeAmount)
        const savingParseAmount = parseFloat(getSavingPercent)
      
        const savingCalculation = incomeParseAmount * (savingParseAmount)/100
        const remainingCalculation = incomeParseAmount - savingCalculation
    
        const savingAmount = document.getElementById('saving-amount')
              savingAmount.innerText = savingCalculation;
    
        const remainingAmount = document.getElementById('remaining-balance')
            remainingAmount.innerText = remainingCalculation;
    }
}
//saving add eventlistener code here 
document.getElementById('saving-btn').addEventListener('click', function(){
        savingValidity()
       
    
    

   


})
