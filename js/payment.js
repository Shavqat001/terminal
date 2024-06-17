let numbers = document.querySelectorAll('.payment__number');
let field = document.querySelector('.number-field');
let removeBtn = document.querySelector('.payment__remove-last-char');

removeBtn.addEventListener('click', () => {
    removeLastCharacter(field);
    paymentСommission.querySelector('span').textContent = JSON.parse(field.value - (field.value * 0.02));
});

for (const number of numbers) {
    number.addEventListener('click', () => {
        let fieldNum = parseFloat(field.value);
        if (field.classList.contains('pay__number-field')) {
            if (field.value.length < 3) {
                if(fieldNum > 500) {
                    field.value = 500;
                } else {    
                    field.value += JSON.parse(number.textContent);
                    field.disabled = false;
                    paymentСommission.querySelector('span').textContent = JSON.parse(field.value - (field.value * 0.02));
                }
            }
        } else if (field.value.length < 9) {
            field.value += JSON.parse(number.textContent);
            field.disabled = false;
        }
    });
}

field.addEventListener('input', () => {
    if (field.value.length >= 9) {
        field.disabled = true;
    } else if (field.value.length < 9) {
        field.disabled = false;
    }
})

function removeLastCharacter(field) {
    field.value = field.value.slice(0, -1);
    field.disabled = false;
}