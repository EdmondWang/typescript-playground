import IPerson from './interfaces/IPerson';

function greeter(person: IPerson) {
    return `Hello, ${person.firstName}.${person.lastName}`;
}

let user: IPerson = {
    firstName: 'Edmond',
    lastName: 'Wang'
};

document.body.textContent = greeter(user);
