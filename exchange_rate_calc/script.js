const currency_el1 = document.getElementById('currency-one');
const amount_el1 = document.getElementById('amount-one');
const currency_el2 = document.getElementById('currency-two');
const amount_el2 = document.getElementById('amount-two');
const rate_el = document.getElementById('rate');
const swap = document.getElementById('swap');

// fetch exchange rates and upate the DOM-
function calculate(){

const currency_one = currency_el1.value;
const currency_two = currency_el2.value;

fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`).then(function(res){return res.json();}).then(function(data){
    // console.log(data);
    const rate = data.rates[currency_two];
    rate_el.innerText = `1${currency_one} = ${rate} ${currency_two}`;
    amount_el2.value = (rate * amount_el1.value).toFixed(2);


});


}

// Event listeners
currency_el1.addEventListener('change',calculate);
amount_el1.addEventListener('input',calculate);
currency_el2.addEventListener('change',calculate);
amount_el2.addEventListener('input',calculate);
swap.addEventListener('click',function(){
const temp = currency_el1.value;
currency_el1.value = currency_el2.value;
currency_el2.value = temp;
calculate();
});


calculate();