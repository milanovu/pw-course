// Khai báo 1 mảng
let array = [1, 2, 3, 4, 3, 55, 23];

// 1. Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị cho trước. 
// Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là 3 thì vị trí cần in ra đầu tiên là 2 
// và vị trí cuối cùng cần in ra là 4. 
function findFirstAndLastIndex(arr, target) {
    let firstIndex = -1;
    let lastIndex = -1;
    let index = 0; // Biến đếm để theo dõi vị trí phần tử trong mảng

    for (let value of arr) {
        if (value === target) {
            if (firstIndex === -1) {
                firstIndex = index; // Lưu vị trí đầu tiên
            }
            lastIndex = index; // Cập nhật vị trí cuối cùng
        }
        index++; // Tăng chỉ mục mỗi lần lặp
    }

    if (firstIndex !== -1) {
        console.log(`Vị trí đầu tiên của ${target} là: ${firstIndex}`);
        console.log(`Vị trí cuối cùng của ${target} là: ${lastIndex}`);
    } else {
        console.log(`${target} không tồn tại trong mảng.`);
    }
}

let targetValue = 3;
findFirstAndLastIndex(array, targetValue);

// 2. Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. 
// Ví dụ với chuỗi ”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”, “y”, “a”, “l”, “P”] 
let charArray = ["t", "h", "g", "i", "r", "w", "y", "a", "l", "P"];
// => dua vao bai tap for 
function revertArray(charArray) {
    let revertedArray = [];
    for (let i of charArray) {
        revertedArray.push(i);
    }
    return revertedArray;
}
console.log(`Chuỗi đảo ngược của Playwright là:`)
console.log(revertArray(charArray));


// 3. Lọc ra tất cả các phần tử duy nhất trong một mảng. 
// Ví dụ với mảng [1, 2, 3, 1, 2, 4, 5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]
function filterDup(array) {
    let countMap = {};
    // Đếm số lần xuất hiện của từng phần tử
    for (let num of array) {
        if (countMap.hasOwnProperty(num)) {
            countMap[num] += 1;
        } else {
            countMap[num] = 1;
        }
    }

    // Lọc các phần tử xuất hiện đúng 1 lần
    let nonDupArray = [];
    for (let num of array) {
        if (countMap[num] === 1) {
            nonDupArray.push(num);
        }
    }

    return nonDupArray;
}

// Ví dụ
console.log("Mảng k có duplication là:")
console.log(filterDup([1, 2, 3, 1, 2, 4, 5]));