var arrNhanVien = [];
document.querySelector('#btnThemNV').onclick = function () {
    var nv = new NhanVien ();
    nv.taiKhoan = document.querySelector('#tknv').value;
    nv.hoTen = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.matKhau = document.querySelector('#password').value;
    nv.ngayLam = document.querySelector('#datepicker').value;
    nv.luongCoBan = document.querySelector('#luongCB').value;
    nv.chucVu = document.querySelector('#chucvu').value;
    nv.tongGioLam = document.querySelector('#gioLam').value;

    var test = true;

    test &= kiemTraRong(nv.taiKhoan, '#tbTKNV', 'Tài khoản') & kiemTraRong(nv.hoTen, '#tbTKNV', 'Họ tên') & kiemTraRong(nv.email, '#tbTKNV', 'email') &kiemTraRong(nv.matKhau, '#tbTKNV', 'Mật khẩu') &kiemTraRong(nv.ngayLam, '#tbTKNV', 'Ngày làm') & kiemTraRong(nv.luongCoBan, '#tbTKNV', 'Lương cơ bản') &kiemTraRong(nv.tongGioLam, '#tbTKNV', 'Giờ làm');

    if(!!!test) {
        return ;
    }

    arrNhanVien.push(nv);
    tableNhanVien(arrNhanVien);

}

function tableNhanVien (arrNhanVien) {
    var htmlContent = '';
    for (var i = 0; i < arrNhanVien.length; i++) {
        var nv = arrNhanVien[i];
        var tr = `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong()}</td>
                <td>${nv.LoaiNhanVien()}</td>
                <td>
                    <button class="btn btn-danger ml-2" onclick="xoaNhanVien('${nv.taiKhoan}')">Xoá</button>
                    <button class="btn btn-primary ml-2" onclick="suaNhanVien('${nv.taiKhoan}')">Sửa</button>
                </td>
            </tr>
        `;
        htmlContent += tr;
    }
    document.querySelector('#tableDanhSach').innerHTML = htmlContent;
}

function xoaNhanVien(acc) {
    var index = -1;
    for (var i = 0; i < arrNhanVien.length; i++) {
        if (acc === arrNhanVien[i].taiKhoan) {
            index = i;
            break;
        }
    }
    arrNhanVien.splice(index,1);
    tableNhanVien(arrNhanVien);
}

function suaNhanVien(acc) {
    for (var i = 0; i < arrNhanVien.length; i++) {
        if (acc === arrNhanVien[i].taiKhoan) {
            document.querySelector('#tknv').value = arrNhanVien[i].taiKhoan;
            document.querySelector('#name').value = arrNhanVien[i].hoTen;
            document.querySelector('#email').value = arrNhanVien[i].email;
            document.querySelector('#password').value = arrNhanVien[i].matKhau;
            document.querySelector('#datepicker').value = arrNhanVien[i].ngayLam;
            document.querySelector('#luongCB').value = arrNhanVien[i].luongCoBan;
            document.querySelector('#chucvu').value = arrNhanVien[i].chucVu;
            document.querySelector('#gioLam').value = arrNhanVien[i].tongGioLam;
            break;
        }
    }
}

document.querySelector('#btnCapNhat').onclick = function () {
    var updateNV = new NhanVien();
    updateNV.taiKhoan = document.querySelector('#tknv').value;
    updateNV.hoTen = document.querySelector('#name').value;
    updateNV.email = document.querySelector('#email').value;
    updateNV.matKhau = document.querySelector('#password').value;
    updateNV.ngayLam = document.querySelector('#datepicker').value;
    updateNV.luongCoBan = document.querySelector('#luongCB').value;
    updateNV.chucVu = document.querySelector('#chucvu').value;
    updateNV.tongGioLam = document.querySelector('#gioLam').value;
    for (var i = 0; i < arrNhanVien.length; i++) {
        if (arrNhanVien[i].taiKhoan === updateNV.taiKhoan) {
            arrNhanVien[i].hoTen = updateNV.hoTen;
            arrNhanVien[i].email = updateNV.email;
            arrNhanVien[i].matKhau = updateNV.matKhau;
            arrNhanVien[i].ngayLam = updateNV.ngayLam;
            arrNhanVien[i].luongCoBan = updateNV.luongCoBan;
            arrNhanVien[i].chucVu = updateNV.chucVu;
            arrNhanVien[i].tongGioLam = updateNV.tongGioLam;
            break;
        }
    }
    tableNhanVien(arrNhanVien)
}