
// Khai Báo 1 mảng

let array = [1, 99, 2, 3, 4, 5];

// 1. In ra tất cả các phần tử của một mảng. Ví dụ mảng [1, 2, 3] thì in ra 1 - 2 - 3

array.forEach(i => {
    console.log(i);
});

// 2. Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. 
// Ví dụ mảng [1, 2, 3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3 

let arrayTotal = 0;
array.forEach(i => {
    arrayTotal += i;
});
console.log(` Tong so cua array là : ${arrayTotal}`);

let arrayMax = 0;
array.forEach(i => {
    if (arrayMax < i) {
        arrayMax = i;
    }
});
console.log(` Gia Tri Lon Nhat Cua Array là: ${arrayMax}`);

// 3. Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. 
// Ví dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]

let newArray = [];
array.forEach(i => {
    let y = i * 2
    newArray.push(y);
});
console.log(`Array mới sẽ là: ${newArray}`);
