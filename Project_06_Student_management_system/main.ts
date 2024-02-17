#! /usr/bin/env node

class Student{
    name:string;
    id:number;
    balance:number;
    courses:string[];
    status: boolean
    
    constructor(name:string){
        this.name=name;
        this.id= this.generateId();
        this.balance=0;
        this.courses=[];
        this.status=true;
        
    }

     // Unique Id for student
    generateId(): number {
        return Math.floor(Math.random() * 90000) + 10000;
    };

    //courses registered by student
    registerCourse(courseName:string){
        this.courses.push(courseName)
    };
    
    // Fees to pay
    fee(amount:number){
            this.balance += amount
    };

    // Fees paid by student
    payTuition(amount:number):void{

        this.balance -= amount;

        if(this.balance === 0){
         this.status = false;
          return;
        };
        //console.log(`${amount} paid by ${this.name} for tution`)
        
        };
    
    showStatus(){
      console.log(`Student ID: ${this.id}`);
      console.log(`Student Name: ${this.name}`);
      console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
      console.log(`Balance: $${this.balance}`)
      console.log(`Status: ${this.status ? `Active` : `Inactive`}`);
    };

};
    
const students:Student[]=[];

function addStudent(name:string){
    const student= new Student(name);
    students.push(student);
    //console.log(`Student ${student.name} added with ID ${student.id}`);
}

  // Students added
  addStudent("Ibad");
  addStudent("Hamza");
  addStudent("Okasha");
  addStudent("Shehzad");
  addStudent("Umer");
 
  // Registered Courses
  students[0].registerCourse("English");
  students[1].registerCourse("Urdu")
  students[2].registerCourse("Maths");
  students[3].registerCourse("Physics")
  students[4].registerCourse("Chemistry");

  // Tution fee
  students[0].fee(1000);
  students[1].fee(1100);
  students[2].fee(1200);
  students[3].fee(1100);
  students[4].fee(1150);

  // Tution fee paid by students
  students[0].payTuition(1000);
  students[1].payTuition(1050);
  students[2].payTuition(1200);
  students[3].payTuition(1100);
  students[4].payTuition(1000);
  
  // Display student status
  students[0].showStatus();
  students[1].showStatus();
  students[2].showStatus();
  students[3].showStatus();
  students[4].showStatus();
