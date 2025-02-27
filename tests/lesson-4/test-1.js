// - Hành tinh khởi đầu: Tạo một biến departurePlanet với giá trị "Trái Đất". 
const departurePlanet = "Trái Đất";

// - Nhiệm vụ: Tạo một biến mission với giá trị "Khám phá Vũ trụ K12". 
const mission = "Khám phá Vũ trụ K12";

// - Phi hành đoàn: Tạo một mảng crew chứa tên các thành viên phi hành đoàn: Tên các thành viên trong lớp. 
let crew = [
    "Minh Trang",
    "Minh Chau",
    "Jade Doan",
    "Nhat Khanh",
    "Mai Uyen",
    "Minh Anh",
    "Ngoc Nguyen",
    "Vy Pham",
    "Sam Sam",
    "Thanh Tieu",
    "Quang Hien",
    "Tuan Tran",
    "Tung Tran",
    "Thien Truong",
    "Duong Van",
    "Van Minh",
    "Hanh Vu",
    "Thong Vu",
];
// - Khởi động Tàu: Viết một hàm launchShip nhận mảng crew làm đầu vào 
// và trả về một thông điệp "Chuẩn bị khởi động! Phi hành đoàn gồm: <danh sách tên thành viên phi hành đoàn> 
// sẽ đồng hành cùng bạn trong chuyến phiêu lưu <mission>!". 

// Cach 1
function launchShip(crew) {
    let member = "";
    for (let index in crew) {
        member += crew[index] + ",";

    }
    return (`Chuẩn bị khởi động! Phi hành đoàn gồm: ${member} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`);
}

// Cach 2
function launchShip(crew) {
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew.join(",")} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
}

// - Kết nối với Trung tâm Điều khiển: Gọi hàm launchShip 
let message = launchShip(crew);

// và in thông điệp chào mừng ra console.
console.log(message);

console.log("-----");

// **2. Du hành đến hành tinh bí ẩn**
// Tàu vũ trụ K12 của bạn đã cất cánh và đang trên đường đến một hành tinh bí ẩn. Để điều hướng chính xác, 
// bạn cần viết một hàm calculateDistance để tính toán khoảng cách đến hành tinh đó. 
// Hàm calculateDistance nhận hai tham số là speed (tốc độ tàu vũ trụ) và time (thời gian di chuyển) 
// và trả về khoảng cách tính toán được. 

function calculateDistance(speed, time) {
    return speed * time;
}

// Sau đó, gọi hàm calculateDistance với tốc độ 1000km/h và thời gian 24 giờ và in kết quả ra console. 
let distance = calculateDistance(1000, 24);

console.log(`2. Du hành đến hành tinh bí ẩn`)
console.log(`Khoảng cách đến hành tinh bí ẩn sẽ là ${distance} kilometers!`);

console.log("-----");
// 3. Hành tinh kỳ lạ 
// Tàu vũ trụ K12 đã đến được hành tinh bí ẩn. 
// Hành tinh này có một đặc điểm rất thú vị: thời gian trên hành tinh này được tính theo hệ thập lục phân (hexadecimal). 
// Bạn cần viết một hàm convertTimeToHex để chuyển đổi thời gian từ hệ thập phân (decimal) sang hệ thập lục phân. 
// Hàm này nhận một tham số là time (thời gian) và trả về giá trị thời gian đã được chuyển đổi sang hệ thập lục phân. 
function convertTimeToHex(time) {
    let newPlanetTime = time.toString(16);
    return newPlanetTime;
}

// Sau đó, gọi hàm convertTimeToHex với thời gian là 120 giây và in kết quả ra console. 
console.log(`3. Hành tinh kỳ lạ `);

console.log(`Thời gian hiện tại của hành tinh bí ẩn theo Hexadecimal là: ${convertTimeToHex(120)} seconds`);

console.log("-----");

// 4. Khám phá kho báu 
// Hành tinh bí ẩn này ẩn chứa một kho báu vô giá. Để tìm được kho báu, bạn cần giải mã một dãy mật mã. 
// Mật mã được tạo thành từ các chữ cái viết thường và chữ cái viết hoa, cách nhau bởi dấu cách. 

// Bạn cần viết một hàm decryptCode để giải mã mật mã. 
// Hàm này nhận một tham số là code (mật mã) và trả về mật mã đã được giải mã. Quy tắc giải mã như sau: 
// - Chữ cái viết thường sẽ được chuyển thành chữ cái viết hoa. 
// - Chữ cái viết hoa sẽ được chuyển thành chữ cái viết thường. 
// - Ví dụ: Decrypt Code sẽ được giải mã thành dECRYPT cODE. 

// Cách 1: for ... of 
function decryptCode(code) {
    let decryptedCode = "";
    for (let character of code) {
        if (character === " ") {
            decryptedCode += " ";
        } else if (character === character.toUpperCase()) {
            decryptedCode += character.toLowerCase();
        } else {
            decryptedCode += character.toUpperCase();
        }
    }
    return decryptedCode;
}

// Cách 2: for with i
function decryptCode2(code) {
    let decryptedCode2 = "";
    for (let i = 0; i < code.length; i++) {
        let character = code[i];
        if (character === " ") {
            decryptedCode2 += " ";
        } else if (character === character.toUpperCase()) {
            decryptedCode2 += character.toLowerCase();
        } else {
            decryptedCode2 += character.toUpperCase();
        }
    }
    return decryptedCode2;

}

// Sau đó, gọi hàm decryptCode với mật mã là K12 Challenge và in kết quả ra console. 
console.log(`4. Khám phá kho báu`);

console.log(`DONE! Mật Mã để giải mã kho báu là: "${decryptCode('K12 Challenge')}"`);

console.log(`DONE! Mật Mã để giải mã kho báu là: "${decryptCode2('K12 Challenge')}"`);

console.log("-----");

// 5. Trở về Trái Đất 
// Sau khi khám phá kho báu, bạn cần điều khiển tàu vũ trụ K12 trở về Trái Đất. 
// Bạn cần viết một hàm returnToEarth để thực hiện hành động này. Hàm này không nhận tham số đầu vào và không trả về giá trị. 
// Hàm này chỉ đơn giản in một thông điệp "Chuẩn bị trở về Trái Đất!" ra console. 
// Gọi hàm returnToEarth để hoàn thành nhiệm vụ. 

function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}

returnToEarth();

console.log("-----");
