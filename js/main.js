(function handleClick() {

    const buttonElement = document.querySelectorAll('.button');

    for (let i = 0; i < buttonElement.length; i += 1) {
        buttonElement[i].addEventListener('click', (event) => {
            console.log(event.target.textContent);
        })
    }
})();

const summation = (a, b = 0) => {
    return a + b;
};

const subtraction = (a, b = 0) => {
    return a - b;
};

function personDataLog(personObject) {
    personObject.firstName = personObject.firstName || 'John';
    personObject.lastName = personObject.lastName || 'Down';
    personObject.age = personObject.age || '33';
    console.log('My name is', personObject.firstName, personObject.lastName, '. I am', personObject.age, 'age years old.');
}

const personObject = {
    firstName: 'Laszlo',
    lastName: 'Szabo',
    age: 38,
}

const personObject2 = {};

personDataLog(personObject);

personDataLog(personObject2);