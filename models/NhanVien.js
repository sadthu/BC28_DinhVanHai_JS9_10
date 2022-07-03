function NhanVien () {
    this.taiKhoan = '';
    this.hoTen = '';
    this.email = '';
    this.matKhau = '';
    this.ngayLam = '';
    this.luongCoBan = '';
    this.chucVu = '';
    this.tongGioLam = 0;
    this.tongLuong = function () {
        var luong = 0;
        switch (this.chucVu) {
            case 'Sếp': {
                luong = this.luongCoBan * 3;
                break;
            }
            case 'Trưởng Phòng': {
                luong = this.luongCoBan * 2;
                break;
            }
            case 'Nhân Viên': {
                luong = this.luongCoBan;
                break;
            }
            default: {
                document.querySelector('#tbChucVu').innerHTML = 'Chọn chức vụ';
            }
        }
        return luong;
    };
    this.LoaiNhanVien = function () {
        var xepLoai = '';
        if (this.tongGioLam >= 192) {
            xepLoai = 'Nhân Viên xuất sắc';
        } else if (this.tongGioLam >= 176 && this.tongGioLam < 192) {
            xepLoai = 'Nhân Viên Giỏi';
        } else if (this.tongGioLam >= 160 && this.tongGioLam < 176) {
            xepLoai = 'Nhân Viên Khá';
        } else {
            xepLoai = 'Nhân Viên Trung Bình';
        }
        return xepLoai;
    }
}