
document.getElementById('calculation-btn').addEventListener('click', function () {

    // Income field value


    const incomeField = document.getElementById('income-value');
    const incomeFieldAmountText = incomeField.value;
    const incomeFieldAmount = parseFloat(incomeFieldAmountText);

    // food cost input

    const foodCost = document.getElementById('food-cost');
    const foodCostAmountText = foodCost.value;
    const foodCostAmount = parseFloat(foodCostAmountText);

    // Rent cost input

    const rentCost = document.getElementById('rent-cost');
    const rentCostAmountText = rentCost.value;
    const rentCostAmount = parseFloat(rentCostAmountText);

    // Cloth cost input

    const clothCost = document.getElementById('cloth-cost');
    const clothCostAmountText = clothCost.value;
    const clothCostAmount = parseFloat(clothCostAmountText);

    // Total expance value

    const expenceTotal = document.getElementById('expence-total');
    const expenceTotalAmount = foodCostAmount + clothCostAmount + rentCostAmount;
    expenceTotal.innerText = expenceTotalAmount;



    const restTotal = document.getElementById('rest-balance');
    const restTotalAmount = incomeFieldAmount - expenceTotalAmount;
    restTotal.innerText = restTotalAmount;

    if (expenceTotalAmount > incomeFieldAmount) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your income should be greater than expence!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }

    // empty the input field

    foodCost.value = '';
    rentCost.value = '';
    clothCost.value = '';
    incomeField.value = '';

})

// saving percantage adding

function percantageCalculation(savingAmount) {
    const incomeField = document.getElementById('income-value');
    const incomeFieldAmountText = incomeField.value;
    const incomeFieldAmount = parseFloat(incomeFieldAmountText);

    const TotalSavingAmount = (incomeFieldAmount * savingAmount) / 100;
    return TotalSavingAmount;
}

document.getElementById('saving-btn').addEventListener('click', function () {

    const percentageField = document.getElementById('percantage-field');
    const savingAmountText = percentageField.value;
    const savingAmount = parseFloat(savingAmountText);

    const savingBalance = document.getElementById('saving-balance');
    const savingBalanceTotal = percantageCalculation(savingAmount);
    savingBalance.innerText = savingBalanceTotal;

    percentageField.value = '';

})
