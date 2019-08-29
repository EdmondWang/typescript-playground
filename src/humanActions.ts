import IPerson from './interface/IPerson';
import Student from './impl/Student';

function greeting(person: IPerson) {
    return `Hello, ${person.firstName}.${person.lastName}`;
}

function study(person: Student) {
    person.study();
}

let user: IPerson = {
    firstName: 'Edmond',
    lastName: 'Wang'
};

greeting(user);
