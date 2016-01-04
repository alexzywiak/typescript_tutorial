class Student {
	fullname: string;
	constructor(public firstname: string, public middlename: string, public lastname: string){
		this.fullname = `${firstname} ${middlename} ${lastname}`;
	}
}

interface Person {
	firstname: string;
	lastname: string;
}

let greeter = (person: Person) => {
	return `Hello, ${person.firstname} ${person.lastname}`;
}

let user = new Student("Homer", "J", "Simpson");

document.body.innerHTML = greeter(user);