
function validateForm() {
    try {
        //kiểm tra mssv
        const maSV = document.getElementById("masv");
        const patternMaSV = /^21\d{8}$/; // Mã SV bắt đầu bằng "21" và có tổng cộng 10 chữ số
        if (!patternMaSV.test(maSV.value)) {
            maSV.focus();
            throw "Mã Sinh viên phải bắt đầu bằng số 21 và có tổng cộng 10 chữ số";
        }
        // Kiểm tra họ tên
        const hoTen = document.getElementById("hoten");
        if (hoTen.value.length == 0) {
            hoTen.focus();
            throw "Tên không được để trống";
        }

        // Kiểm tra số điện thoại
        const dienThoai = document.getElementById("dientthoai");
        const patternDienThoai = /(0[3|5|7|8|9])+([0-9]{8})\b/g;
        if (!patternDienThoai.test(dienThoai.value)) {
            dienThoai.focus();
            throw "Số điện thoại không hợp lệ";
        }
         // Kiểm tra Lớp
         const lop = document.getElementById("lop");
         const patternLop = /^CCQ.{5,6}\w{1,2}$/; // Lớp phải có 8 hoặc 9 ký tự, bắt đầu bằng "CCQ" và kết thúc bằng 1 hoặc 2 ký tự
         if (!patternLop.test(lop.value)) {
             lop.focus();
             throw "Lớp phải có 8 hoặc 9 ký tự, bắt đầu bằng 'CCQ' và kết thúc bằng 1 hoặc 2 ký tự";
         }
         
          // Kiểm tra email
        const email = document.getElementById("email");
        const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Biểu thức chính quy để kiểm tra địa chỉ email
        if (!patternEmail.test(email.value)) {
            email.focus();
            throw "Email không hợp lệ";
        }
        return true;
    } catch (error) {
        console.log(error);
    }
    return false;
}