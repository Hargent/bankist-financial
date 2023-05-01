// 'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//     owner: 'Jonas Schmedtmann',
//     movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//     interestRate: 1.2, // %
//     pin: 1111,
// };

// const account2 = {
//     owner: 'Jessica Davis',
//     movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//     interestRate: 1.5,
//     pin: 2222,
// };

// const account3 = {
//     owner: 'Steven Thomas Williams',
//     movements: [200, -200, 340, -300, -20, 50, 400, -460],
//     interestRate: 0.7,
//     pin: 3333,
// };

// const account4 = {
//     owner: 'Sarah Smith',
//     movements: [430, 1000, 700, 50, 90],
//     interestRate: 1,
//     pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovement = function(movements) {
//     movements.forEach((movement, index) => {
//         const type = movement > 0 ? 'deposit' : 'withdrawal';
//         const html = `
//                 <div class = "movements__row">
//                     <div class = "movements__type movements__type--${type}">
//                     ${index + 1} ${type} </div>
//                     <div class = "movements__value"> ${movement} </div>
//                 </div>;
//                 `;
//         containerMovements.insertAdjacentHTML('afterbegin', html);
//     });
// };
// displayMovement(account1.movements);

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // /////////////////////////////////////////////////
// // for (const [i, mov] of movements.entries()) {
// //     mov > 0 ?
// //         console.log(`Movement ${i + 1} : You deposited ${mov}`) :
// //         console.log(`Movement ${i + 1} : You Withdrew ${Math.abs(mov)}`);
// // }
// // movements.forEach((mov, i, arr) => {
// //     mov > 0 ?
// //         console.log(`Movement ${i + 1} : You deposited ${mov}`) :
// //         console.log(`Movement ${i + 1} : You Withdrew ${Math.abs(mov)}`);
// // });

// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//     console.log(`${key} : ${value}`);
// });
// const uniqueCurrencies = new Set([
//     'USD',
//     'EUR',
//     'GBP',
//     'USD',
//     'NGN',
//     'JPY',
//     'EUR',
// ]);
// // console.log(uniqueCurrencies);
// uniqueCurrencies.forEach((value, _, map) => {
//     // console.log(`${value} : ${value}`);
// });
// // coding challenge 1
const checkDogs = (julia, kate) => {
    let juliaNew = julia.slice(1, 3); // [...julia];
    // juliaNew.splice(0, 1);
    // juliaNew.splice(-2);

    console.log(julia, juliaNew, kate);
    newDogList = juliaNew.concat(kate);
    for (const dog of newDogList) {
        dog >= 3 ?
            console.log(
                `Dog number ${
            newDogList.indexOf(dog) + 1
          } is an Adult and is ${dog} years old.`
            ) :
            console.log(
                `Dog number ${
            newDogList.indexOf(dog) + 1
          } is still a puppy and is ${dog} years old.`
            );
    }
    return newDogList;
};
console.log(checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]));
console.log(checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]));