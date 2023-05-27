console.log("conected");

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
const tensan = urlParams.get('name');
document.getElementById('name').innerHTML = tensan;
const diachi = urlParams.get('address');
document.getElementById('address').innerHTML = diachi;
const lienhe = urlParams.get('contact');
document.getElementById('contact').innerHTML = lienhe;
//------------------------------------------------------------------------------

document.getElementById("submit").onclick = function() {
    if (document.forms["book"]["username"].value == "") {
        document.getElementById("usernameAlert").innerHTML = "Hãy điền tên của bạn.";
        document.getElementById("username").style.border = "1px solid #b90101";
    } else if (document.forms["book"]["username"].value.length > 50) {
        document.getElementById("usernameAlert").innerHTML = "Tên không dài quá 50 kí tự.";
        document.getElementById("username").style.border = "1px solid #b90101";
    } else {
        document.getElementById("usernameAlert").innerHTML = "";
        document.getElementById("username").style.border = "1px solid #5a5a5a";
    }
    //------------------------------------------------------------------------------
    if (document.forms["book"]["phonenumber"].value == "") {
        document.getElementById("phoneAlert").innerHTML = "Hãy điền số điện thoại của bạn.";
        document.getElementById("phonenumber").style.border = "1px solid #b90101";
    } else if (document.forms["book"]["phonenumber"].value.length > 50) {
        document.getElementById("phoneAlert").innerHTML = "Số điện thoại không dài quá 50 kí tự.";
        document.getElementById("phonenumber").style.border = "1px solid #b90101";
    } else {
        document.getElementById("phoneAlert").innerHTML = "";
        document.getElementById("phonenumber").style.border = "1px solid #5a5a5a";
    }
    //------------------------------------------------------------------------------
    if (document.forms["book"]["time"].value == 0) {
        document.getElementById("timeAlert").innerHTML = "Hãy chọn khung giờ muốn đặt sân.";
        document.getElementById("time").style.border = "1px solid #b90101";
    } else {
        document.getElementById("timeAlert").innerHTML = "";
        document.getElementById("time").style.border = "1px solid #5a5a5a";
    }
    //------------------------------------------------------------------------------
    if (document.forms["book"]["timenumber"].value == "") {
        document.getElementById("timeNumberAlert").innerHTML = "Hãy nhập số giờ muốn đặt sân.";
        document.getElementById("timeNumber").style.border = "1px solid #b90101";
    } else if (Number.isFinite(parseInt(document.forms["book"]["timenumber"].value)) == false || document.forms["book"]["timenumber"].value < 0) {
        document.getElementById("timeNumberAlert").innerHTML = "Chỉ được phép nhập số dương.";
        document.getElementById("timeNumber").style.border = "1px solid #b90101";
    } else {
        document.getElementById("timeNumberAlert").innerHTML = "";
        document.getElementById("timeNumber").style.border = "1px solid #5a5a5a";
    }
    //------------------------------------------------------------------------------
    if (document.forms["book"]["playernumber"].value == "") {
        document.getElementById("playerAlert").innerHTML = "Hãy nhập số người chơi";
        document.getElementById("playerNumber").style.border = "1px solid #b90101";
    } else if (Number.isInteger(parseInt(document.forms["book"]["playernumber"].value)) == false || document.forms["book"]["playernumber"].value < 0) {
        document.getElementById("playerAlert").innerHTML = "Chỉ được phép nhập số nguyên dương.";
        document.getElementById("playerNumber").style.border = "1px solid #b90101";
    } else {
        document.getElementById("playerAlert").innerHTML = "";
        document.getElementById("playerNumber").style.border = "1px solid #5a5a5a";
    }
    //------------------------------------------------------------------------------
    if (document.forms["book"]["teamnumber"].value == "") {
        document.getElementById("teamAlert").innerHTML = "Hãy nhập số đội chơi.";
        document.getElementById("teamnumber").style.border = "1px solid #b90101";
    } else if (Number.isInteger(parseInt(document.forms["book"]["teamnumber"].value)) == false || document.forms["book"]["teamnumber"].value < 0) {
        document.getElementById("teamAlert").innerHTML = "Chỉ được phép nhập số nguyên dương.";
        document.getElementById("teamnumber").style.border = "1px solid #b90101";
    } else {
        document.getElementById("teamAlert").innerHTML = "";
        document.getElementById("teamnumber").style.border = "1px solid #5a5a5a";
    }
}