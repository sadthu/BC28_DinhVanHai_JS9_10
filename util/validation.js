function kiemTraRong(value, selectorError, name) {
    if (value.trim() === '') {
        document.querySelector(selectorError).innerHTML = name + ' không được bỏ trống !';
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}

function kiemTraDoDai(value, selectorError, name, minLength, maxLength) {
    if (value.length > maxLength || value.length < minLength) {
        document.querySelector(selectorError).innerHTML = name + ' độ dài từ ' + minLength + ' đến ' + maxLength + ' ký tự';
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}

function kiemTraTatCaKyTu(value, selectorError, name) {
    var regexLetter = /^[A-Z a-z]+$/;
    if (regexLetter.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' tất cả phải là ký tự !';
    return false;
}

function kiemTraEmail(value, selectorError, name) {
    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regexEmail.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' không đúng định dạng <br /> Ví dụ: email@gmail.com !';
    return false;
}

function kiemTraMatKhau(value, selectorError, name) {
    var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (regexPassword.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' phải có số và chữ, ít nhất 1 ký tự viết hoa và 1 ký tự đặc biệt!';
    return false
}

function kiemTraChucVu(value, selectorError) {
    switch (value) {
        case 'Chọn chức vụ': {
            document.querySelector(selectorError).innerHTML = 'Chọn chức vụ';
        }
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}

function kiemTraGiaTri(value,selectorError,name,minValue,maxValue) {
    if(Number(value) < minValue || Number(value) > maxValue) {
        document.querySelector(selectorError).innerHTML = name +' giá trị từ '+ minValue + ' đến ' + maxValue;
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}

function kiemTraNgayThangNam (value,selectorError,name) {
    var regex = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    if(regex.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' phải có định dạng yyyy-mm-dd';
    return false;
}