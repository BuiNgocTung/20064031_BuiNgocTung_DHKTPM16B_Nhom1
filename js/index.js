//Javascript source code
$(document).ready(function() {
    var i = 1;
    $("#myBtn").click(function() {
        $("#myModal").modal();
    });
    //kiểm tra mã tour: *, theo mẫu
    function KiemtraMa() {
        var re = /^[A-Z]{3}\-[A-Z]{3}\-\d{2}\-\d{4}$/;
        if ($("#txtMa").val() == "") {
            $("#tbMa").html("* bắt buộc nhập");

            return false;
        }
        if (!re.test($("#txtMa").val())) {
            $("#tbMa").html("* Mã tour theo mẫu: XXX-XXX-00-0000");
            return false;
        }
        $("#tbMa").html("*");
        return true;
    }
    $("#txtMa").blur(KiemtraMa);
    //kiểm tra điểm đến: *
    function KiemtraDD() {
        if ($("#txtDiemDen").val() == "") {
            $("#tbDiemDen").html("* bắt buộc nhập");
            return false;
        }
        $("#tbDiemDen").html("*");
        return true;
    }
    $("#txtDiemDen").blur(KiemtraDD);
    //kiểm tra ngày khởi hành, phải sau ngày hiện tại
    function KiemtraNgayKH() {
        if ($("#txtNgay").val() == "") {
            $("#tbNgay").html("* bắt buộc nhập");
            return false;
        }
        var day = new Date($("#txtNgay").val());
        var today = new Date();
        today.setDate(today.getDate() + 30);
        if (day < today) {
            $("#tbNgay").html("* Ngày khởi hành phải sau ngày hiện tại 30 ngày");
            return false;
        }
        $("#tbNgay").html("*");
        return true;
    }
    $("#txtNgay").blur(KiemtraNgayKH);
    //kiem tra giá tour
    function KTGia() {
        //var re = /^[1-9] [0-9] * $/
        var gia = $("#txtGia").val();
        if (gia == "") {
            $("#tbGia").html("* Bat buoc");
            return false;
        }
        if (isNaN(gia)) {
            $("#tbGia").html("* Phai nhap so");
            return false;
        }
        if (eval(gia) < 0) {
            $("#tbGia").html("* Phai nhap so > 0");
            return false;
        }
        $("#tbGia").html("*");
        return true;
    }
    $("#txtGia").blur(KTGia);
    //kiêm tra chung
    $("#btnSave").click(function() {
        if (!KiemtraMa() || !KiemtraDD() || !KiemtraNgayKH() || !KTGia()) {
            $("#thongbao").html("Mời bạn nhập đúng và đẩy đủ thông tin")
            return false;
        }
        var matour = $("#txtMa").val();
        var diemden = $("#txtDiemDen").val();
        var ngaykh = $("#txtNgay").val();
        var tg = $("#txtTG").val();
        var gia = $("#txtGia").val();

        var anh = $("#txtAnh").val().substring(12);

        var them = "<tr><td>" + (i++) + "</td><td>" + matour + "</td><td>" + diemden + "</td><td>" + ngaykh +
            "</td><td>" + tg + "</td><td>" + gia + "</td><td>" + anh + "</td></tr>"
        $("table tbody").append(them);
        $("#myModal").modal("hide");
        return true;
    })
});