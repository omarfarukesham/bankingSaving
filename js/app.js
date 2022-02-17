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

    if(totalCosting > parseIncomeAmount){
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

document.getElementById('submit').addEventListener('click',function(){
    
    inputFieldValidation()
    getInputValue()
    // total costing amount permonth and deploy to the costin field code here
  
    
    // balance amount which is input income field


    // deploy total value to the costing area
    
    
})