$(document).ready(function() {
    var i = 2; // Khởi tạo số thứ tự
    // Viết code vào
    $("#btnDK").click(function() {
        $("#myModal").modal();
    });


    function kiemTraMSV() {
        var i = 1;
        let mauKT = /^[0-9]{10}$/;
        if ($("#msv").val() == "") {
            $("#tbmsv").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#msv").val())) {
            $("#tbmsv").html("sử dụng số");
            return false;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#msv").blur(kiemTraMSV);

    function kiemTraTen() {
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return false;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);





    function kiemTraNTG() {

        if ($("#NTG").val() == "") {
            $("#tbNTG").html("Không đề trống");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTG").val());
        today = today.setDate(today.getDate() + 7);
        if (today > ntt) {
            $("#tbNTG").html("Phải sau ngày hiện tại 7 ngày");
            return false;
        }
        $("#tbNTG").html("*");
        return true;
    }
    $("#NTG").blur(kiemTraNTG);


    function kiemTraEmail() {

        var mauKT = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
        if ($("#email").val() == "") {
            $("#tbemail").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#email").val())) {
            $("#tbemail").html("sai định dạng email");
            return false;
        }
        $("#tbemail").html("*");
        return true;
    }
    $("#email").blur(kiemTraSDT);

    function kiemTraSDT() {
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("Theo Dạng 0xxx-xxx-xxx trong đó x là số");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);




    $("#Save").click(function() {
        if (kiemTraTen() == true && kiemTraMSV() == true && kiemTraSDT() == true && kiemTraNTG() == true) {

            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#msv").val() + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";

            row += "<th>" + $("#NTG").val() + "</th>";
            row += "<th>" + $("#email").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");

        } else
            alert("thông tin bạn nhập chưa chính xác")
    })
});