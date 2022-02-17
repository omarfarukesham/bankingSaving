

document.getElementById('submit').addEventListener('click',function(){

   const getIncome = document.getElementById('income-input-field').value

   //costing field value here
   const getFoodCost = document.getElementById('food-input-field')
        foodParseAmount = parseFloat(getFoodCost.value)
   const getRentCost = document.getElementById('rent-input-field')
        rentParseAmount = parseFloat(getRentCost.value)
   const getClothCost = document.getElementById('cloth-input-field')
         clothParseAmount = parseFloat(getClothCost.value)

    // total costing amount permonth and deploy to the costin field code here
    const totalCosting = foodParseAmount + rentParseAmount + clothParseAmount
    const getCostingFieldId = document.getElementById('total-cost')
          getCostingFieldId.innerText = totalCosting
    
    // balance amount which is input income field
    const getBalanceId = document.getElementById('balance')
    const balance = getIncome - totalCosting
          getBalanceId.innerText = balance

    // deploy total value to the costing area
    
    
})