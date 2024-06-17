let operators = document.querySelectorAll('.main__operator');
let service = document.querySelector('.service');
let payment = document.querySelector('.payment');
let operatorPct = document.querySelector('.payment__picture');
let operatorTitle = document.querySelector('.payment__operator-title');
let operatorTitleSpan = document.querySelector('.payment__operator-title span');
let footer = document.querySelector('.main-footer');
let mainOperator = document.querySelector('.main__mobile-operator');
let backButton = document.querySelector('.back-button');
let continueButton = document.querySelector('.continue-button');
let paymentNumbers = document.querySelector('.payment__numbers');
let paymentNumberTitle = document.querySelector('.payment__numbers h2');
let changeNumber = document.querySelector('.payment__change-number');
let changeNumberSpan = document.querySelector('.payment__change-number');
let paymentСommission = document.querySelector('.payment__commission');

for (const operator of operators) {
    operator.addEventListener('click', () => {
        service.classList.add('visually-hidden');
        payment.classList.remove('visually-hidden');
        mainOperator.classList.add('visually-hidden');
        operatorPct.src = operator.querySelector('img').src;
        operatorTitleSpan.textContent = operator.querySelector('img').alt;
        footer.classList.add('visually-hidden');
    });
}

backButton.addEventListener('click', () => {
    service.classList.remove('visually-hidden');
    payment.classList.add('visually-hidden');
    mainOperator.classList.remove('visually-hidden');
    footer.classList.remove('visually-hidden');
    paymentNumbers.classList.remove('visually-hidden');
    field.classList.remove('pay__number-field');
    paymentNumberTitle.textContent = 'Введите номер';
    changeNumber.classList.add('visually-hidden');
    paymentСommission.classList.add('visually-hidden');
    operatorPct.classList.remove('visually-hidden');
    operatorTitle.classList.remove('visually-hidden');
});

continueButton.addEventListener('click', () => {
    operatorPct.classList.add('visually-hidden');
    operatorTitle.classList.add('visually-hidden');

    if (field.value.length < 9) {
        alert('Минимальная длина номера 9')
    } else {
        field.classList.add('pay__number-field');
        paymentNumberTitle.textContent = 'Внесите желаемую сумму';
        changeNumber.classList.remove('visually-hidden');
        paymentСommission.classList.remove('visually-hidden');
        changeNumberSpan.textContent = field.value;
        field.value = '';
    }
});