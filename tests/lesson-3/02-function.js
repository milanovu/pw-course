// 1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân nặng (kg) 
// và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì). Biết: 
// ○ Chiều cao được tính theo đơn vị mét (VD: 1.75m) 
// ○ Cân nặng tính theo kg 
// ○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao) 
// ○ BMI < 18.5: Thiếu cân 
// ○ BMI < 25: Bình thường 
// ○ BMI < 30: Thừa cân 
// ○ BMI >= 30: Béo phì 

function bmiCalc(height, weight) {
    let myBMI = weight / (height * height);
    if (myBMI < 18.5) {
        console.log("Thiếu cân");
    }
    if (myBMI >= 18.5 && myBMI < 25) {
        console.log("Bình Thường");
    }
    if (myBMI >= 25 && myBMI < 30) {
        console.log("Thừa Cân");
    }
    if (myBMI >= 30) {
        console.log("Béo Phì");
    }
};
bmiCalc(1.73, 80);


// 2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. 
// Hàm sẽ nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã chuyển đổi. 
// Biết công thức chuyển đổi:
// ○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32; 
// ○ Từ độ F sang độ C: (độ F - 32) * 5 / 9; 

function tempConvert(temperature, tempType) {
    // let toFahrenheit = temperature * 9 / 5 + 32;
    // let toCelsius = (temperature - 32) * 5 / 9;

    if (tempType === 'C') {
        let toFahrenheit = temperature * 9 / 5 + 32;
        return toFahrenheit;
    }
    if (tempType === 'F') {
        let toCelsius = (temperature - 32) * 5 / 9;
        return toCelsius;
    }
}
console.log(tempConvert(100, 'F'));
console.log(tempConvert(20, 'C'));


// 3. Khai báo một mảng các phần tử bất kì. 
let myFavoriteSports = ['Soccer', 'Tennis', 'Running'];

// Viết một hàm để tính tổng của các phần tử trong một mảng số. 
let tong = 0;

function sum(numberList) {
    for (let i = 0; i < numberList.length; i++) {
        tong = tong + numberList[i];
    }
    return tong;
}
let numberList = [2, 3, 4, 5];

let total = sum(numberList);

console.log(`Tổng của mảng số là ${total}`);



// 4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho. Biết: 
// ○ Số 0, số 1 không phải số nguyên tố. 
// ○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó 
let numberArray = [2,3,4,5,7,8,9];
let primeNumbers = [];
function primeNumFilter(){
    for(let i=0;i<numberArray.length;i++){
        primeNumbers = primeNumbers + numberArray[i];
    }
    return primeNumbers;
}

console.log(primeNumbers);


// 5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên người dùng. 
// Đoạn code giả mã (pseudo code) như sau: 
// // Khai báo mảng global các object có 2 thuộc tính: name, email // Khai báo hàm có 2 tham số: name, newEmail 
// // Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên trùng với tham số name, cập nhật giá trị email về newEmail 

 
// 6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một mảng các object. 
// Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85} 


// 7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không. 
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”: “product 1”, price: 100 } 


// 8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. 
// Biết cửa hàng mở cửa từ 9 giờ sáng đến 9 giờ tối. 

// 9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5 tuổi miễn phí, 
// người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k. 10. 
// Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh switch...case để xử lý. 
// 11. Viết hàm nhập vào điểm số. 
// In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>= 6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5). 



// 12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C) 