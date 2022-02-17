
//function for valication and calculation for the income and expence
function inputFieldValidation(){

    //get Input field value from html 
    const getIncome = document.getElementById('income-input-field').value
    const getFoodCost = document.getElementById('food-input-field').value
    const getRentCost = document.getElementById('rent-input-field').value 
    const getClothCost = document.getElementById('cloth-input-field').value 

    //validation check code here
    if(getIncome == '' || getFoodCost == '' || getRentCost == '' || getClothCost == ''){
        const msg = document.getElementById('error-msg')
        msg.innerHTML = 'Field Should not Empty'
    }else if(getIncome < 0 || getFoodCost < 0 || getRentCost < 0 || getClothCost < 0){
        const msg = document.getElementById('error-msg')
        msg.innerHTML = ' OPP! Negative value is not allow'
    }else{
       
        //code which is parese from input field
        const  parseIncomeAmount = parseFloat(getIncome)
        const foodParseAmount = parseFloat(getFoodCost)
        const  rentParseAmount = parseFloat(getRentCost)
        const clothParseAmount = parseFloat(getClothCost)


        //calculation for total cost and balance
        const totalCosting = foodParseAmount + rentParseAmount + clothParseAmount
        const balance = parseIncomeAmount - totalCosting

        //conditional check  and error handling code here
        if( totalCosting > parseIncomeAmount){
            const msg = document.getElementById('error-msg')
                  msg.innerHTML = 'Your Income is limited, Reduce cost'

        }else{
             const getCostingFieldId = document.getElementById('total-cost')
                   getCostingFieldId.innerText = totalCosting

             const getBalanceId = document.getElementById('balance')
                   getBalanceId.innerText = balance

                // input field clear after error msg
                    document.getElementById('error-msg').innerText = ''


                }
        }
}

//saving add eventlistener code here 
document.getElementById('submit').addEventListener('click',function(){  
    // function has called from abouv
    inputFieldValidation()
   
})


// saving btn calculation and valicational function code here 
function savingValidity(){
    //getInput value from html tag
    const getIncomeAmount = document.getElementById('income-input-field').value
    const getSavingPercent = document.getElementById('saving-input-field').value
    const remainingBalance = document.getElementById('balance').innerText

    //valication checking code here
    if(getIncomeAmount == '' || getSavingPercent == '' || getIncomeAmount < 0 || getSavingPercent < 0){
       console.log(alert('Saving and Income should keep a positive value'))
    }else{
    
        const incomeParseAmount = parseFloat(getIncomeAmount)
        const savingParseAmount = parseFloat(getSavingPercent)
        const remainingParseAmount = parseFloat(remainingBalance)
      
        const savingCalculation = incomeParseAmount * (savingParseAmount)/100
        const remainingCalculation = remainingParseAmount - savingCalculation
    
        const savingAmount = document.getElementById('saving-amount')
              savingAmount.innerText = savingCalculation;
    
              if(remainingCalculation < 0 || remainingBalance == ''){
               console.log(alert('Your Saving or cost should Balance'))
              }else{
                const remainingAmount = document.getElementById('remaining-balance')
                remainingAmount.innerText = remainingCalculation;
              }
       
    }
}

//saving add eventlistener code here 
document.getElementById('saving-btn').addEventListener('click', function(){
    //saving function called here ....... 
        savingValidity()

})


/*
Thanks for reading my code
Md. Omar faruk
programming-hero(Batch-5)
*/