var Student = (function () {
    function Student(firstname, middlename, lastname) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.fullname = firstname + " " + middlename + " " + lastname;
    }
    return Student;
})();
var greeter = function (person) {
    return "Hello, " + person.firstname + " " + person.lastname;
};
var user = new Student("Homer", "J", "Simpson");
document.body.innerHTML = greeter(user);
