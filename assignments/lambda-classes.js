/*
## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

* We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
* Lambda personnel can be broken down into three different types of `people`.
  * **Instructors** - extensions of Person
  * **Students** - extensions of Person
  * **Project Managers** - extensions of Instructors
* **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

```js
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
```

#### Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` `gender` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

#### Project Mananger

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following uniqe props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManangers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

#### Stretch Problem

* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
* Add a graduate method to a student.
  * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
  * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.
*/

// CODE here for your Lambda Classes

// Person Class ============

class Person {
  constructor(personAttrs) {
    this.name = personAttrs.name;
    this.age = personAttrs.age;
    this.location = personAttrs.location;
    this.gender = personAttrs.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

// Instructor Class ============

class Instructor extends Person {
  constructor(instructorAttrs) {
    super(instructorAttrs);
    this.speciality = instructorAttrs.speciality;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on {subject}`;
  }
  addToGrade(student) {
    student.grade = student.grade + parseInt(Math.random() * 101);
    if (student.grade > 100) {
      student.grade = 100;
    }
    return `${student.name} now has a grade of ${student.grade}`;
  }
  takeFromGrade(student) {
    student.grade = student.grade - parseInt(Math.random() * 101);
    if (student.grade < 0) {
      student.grade = 0;
    }
    return `${student.name} now has a grade of ${student.grade}`;
  }
}

// Student Class ============

class Student extends Person {
  constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
    this.grade = studentAttrs.grade;
  }
  listSubjects() {
    for (let i = 0; i < favSubjects.length; i++) {
      console.log(favSubjects[i]);
    }
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

// Project Manager Class ============

class ProjectManager extends Instructor {
  constructor(projectManagerAttrs) {
    super(projectManagerAttrs);
    this.gradClassName = projectManagerAttrs.gradClassName;
    this.favInstructor = projectManagerAttrs.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

// Test Objects ============

const martin = new Instructor({
  name: "Martin",
  location: "London",
  age: 46,
  gender: "male",
  favLanguage: "Vanilla CSS",
  specialty: "Front-end",
  catchPhrase: "Keep it vanilla"
});

const lucy = new Student({
  name: "Lucy",
  location: "Basingstoke",
  age: 12,
  gender: "female",
  previousBackground: "Quantity Surveyor",
  className: "EU1",
  favSubjects: "Everything",
  grade: 100
});

const jonathon = new ProjectManager({
  name: "Jonathon",
  location: "Dorchester",
  age: 22,
  gender: "male",
  gradClassName: "EU00",
  favInstructor: "Martin"
});

// Test Logs ============

console.log(martin);
console.log(lucy);
console.log(jonathon);
console.log(martin.speak());
console.log(lucy.speak());
console.log(jonathon.speak());
console.log(martin.demo("CSS"));
console.log(martin.demo("Responsive Design"));
console.log(lucy.sprintChallenge("React"));
console.log(lucy.PRAssignment("Python"));
console.log(jonathon.standUp("WEBEUHELP"));
console.log(jonathon.debugsCode(lucy, "Strict Mode HTML"));
console.log(martin.addToGrade(lucy));
console.log(jonathon.takeFromGrade(lucy));
