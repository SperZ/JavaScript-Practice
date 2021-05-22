//Javascript class practice from linkedin learning video
class Person {
  constructor(name, gender, dateOfbirth) {
    this.name = name;
    this.gender = gender;
    this.dateOfbirth = dateOfbirth;
    this.age = calculateAge;

    function calculateAge(dateOfbirth) {
      var today = Date.now();
    }
  }
}

const john = new Person();
john.name = "John";
john.gender = "Male";
john.dateOfbirth = new Date(1989, 04, 13);
