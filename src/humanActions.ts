import IPerson from './interface/IPerson';
import Student from './impl/Student';

function greeting(person: IPerson) {
    const str = `Hello, ${person.firstName}.${person.lastName}`;
    console.log(str);
}

function study(person: Student) {
    person.study();
}

let user: IPerson = {
    firstName: 'Edmond',
    lastName: 'Wang'
};

greeting(user);
