// 1. Tính tổng từ 1 đến 100. 

let q = 0;
for (let i = 0; i <= 100; i++) {
    q = q + i;
}
console.log(q);

// 2. In bảng cửu chương từ 2 đến 9. 

for (let i = 2; i <= 9; i++) {
    for (j = 1; j <= 9; j++) {
        let k = i * j;
        console.log(`${i} x ${j} = ${k}`);
    }
    console.log("------------");
}


// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99. 
let oddArray = [];
for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
        oddArray.push(i);
    }
}
console.log(oddArray);


// 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ: 
// user-1@example.com, user2@example.com, ..., user10@example.com). 

let names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack"];

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
    console.log(`${names[i]}+${numbers[i]}@gmail.com`);
}

// 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. 
// Biết cấu trúc object của mảng doanh thu như sau: {“month”: 2, “total”: 100}

let incomeYear = [
    { month: 1, total: 120 }, { month: 2, total: 150 }, { month: 3, total: 180 },
    { month: 4, total: 200 }, { month: 5, total: 170 }, { month: 6, total: 210 },
    { month: 7, total: 190 }, { month: 8, total: 230 }, { month: 9, total: 220 },
    { month: 10, total: 250 }, { month: 11, total: 240 }, { month: 12, total: 260 }
];

let totalIncome = 0;

for (i = 0; i < incomeYear.length; i++) {
    totalIncome = totalIncome + incomeYear[i].total;
}
console.log(`Tổng Doanh Thu Năm Nay Sẽ Là $${totalIncome}`);