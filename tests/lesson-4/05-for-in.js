
let student = {
    name: 'Milano',
    age: 16
}

// 1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. 
// Ví dụ: object student = {“name”: “Alex”, “age”: 10} thì in ra 
// name=Alex 
// age=10 

console.log("Thông tin của Sinh Viên là:");
for (let info in student) {
    console.log(`- ${info}: ${student[info]}`);
}

// 2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng. 
// Ví dụ: object student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng 30 (=10+20). 
student.salary = 30;
let total = 0;

for (let check in student) {
    if (typeof student[check] === "string") {
        continue;
    }
    total += student[check];
}

console.log(`Tổng các giá trị số là: ${total}`); // 16 + 30

// 3. Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. 
// Ví dụ object student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng [“name”, “age”]

let newArray = [];
for (let param in student) {
    newArray.push(param);
}

console.log("Mảng chứa tất cả các tên thuộc tính của một đối tượng STUDENT");

console.log(newArray);
