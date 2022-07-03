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

    // var disP = document.querySelector('.sp-thongbao').innerHTML;
    // if (disP != '') {
    //     document.querySelector('.sp-thongbao').style.display = 'block';
    // }
    
    var test = true;

    test &= kiemTraRong(nv.taiKhoan, '#tbTKNV', 'Tài khoản') & kiemTraRong(nv.hoTen, '#tbTen', 'Họ tên') & kiemTraRong(nv.email, '#tbEmail', 'email') &kiemTraRong(nv.matKhau, '#tbMatKhau', 'Mật khẩu') &kiemTraRong(nv.ngayLam, '#tbNgay', 'Ngày làm') & kiemTraRong(nv.luongCoBan, '#tbLuongCB', 'Lương cơ bản') &kiemTraRong(nv.tongGioLam, '#tbGiolam', 'Giờ làm');

    test &= kiemTraDoDai(nv.taiKhoan, '#tbTKNV1','Tài khoản', 4,6) & kiemTraDoDai(nv.matKhau, '#tbMatKhau1', 'Mậ khẩu', 6, 10);

    test &= kiemTraEmail(nv.email,'#tbEmail1','Email') & kiemTraChucVu(nv.chucVu, '#tbChucVu') & kiemTraNgayThangNam(nv.ngayLam, '#tbNgay', 'Ngày làm');

    test &= kiemTraTatCaKyTu(nv.hoTen, '#tbTen1', 'Họ tên') & kiemTraMatKhau(nv.matKhau, '#tbMatKhau2', 'Mật khẩu') & kiemTraGiaTri(nv.luongCoBan, '#tbLuongCB1','Lương cơ bản', 1e+6, 2e+7) & kiemTraGiaTri(nv.tongGioLam, '#tbGiolam1', 'Tổng giờ là', 80, 200);

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
                    <button class="btn btn-primary ml-2" data-toggle="modal" data-target="#myModal" onclick="suaNhanVien('${nv.taiKhoan}')">Sửa</button>
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