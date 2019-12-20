import IPerson from './interface/IPerson';
import Student from './impl/Student';

function greeting(person: IPerson): void {
    const str = `Hello, ${person.firstName}.${person.lastName}`;
    console.log(str);
}

function study(person: Student): void {
    person.study();
}

const person: IPerson = {
    firstName: 'Edmond',
    lastName: 'Wang',
};

const student = new Student('Edward', 'Yang');

greeting(person);
study(student);
