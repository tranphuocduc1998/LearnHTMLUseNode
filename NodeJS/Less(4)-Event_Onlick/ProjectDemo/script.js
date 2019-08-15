//#region [Node thực hiện tăng biến đếm]
var count = 0;
var countId = document.getElementById('countId');
countId.style.fontSize = '20px';
countId.innerHTML = count;

var btn_Count = document.getElementById('btn_Count');
btn_Count.onclick = btnCount;

function btnCount() {
    count++;
    countId.innerHTML = count;
};
//#endregion


//#region [Thêm vào List, Clear List, Clear Input nhập vào]
var ulIdList = document.getElementById('ulIdList');
ulIdList.style.listStyleType = 'none';
var inputIdList = document.getElementById('inputIdList');
var arrayList = [];

var add_List = document.getElementById('add_List');
add_List.onclick = addList;

function addList() {
    arrayList.push(inputIdList.value);
    render();
}

var clear_List = document.getElementById('clear_List');
clear_List.onclick = clearList;

function clearList() {
    arrayList = [];
    render();
}

var clear_Input = document.getElementById('clear_Input');
clear_Input.onclick = clearInput;

function clearInput() {
    inputIdList.value = '';
}

function render() {
    var content = arrayList.map(function(item) {
        return '<li>' + item + '</li>'
    });
    ulIdList.innerHTML = content.join(' ');
}
//#endregion

//#region [Say Hello, name]
var alertId = document.getElementById('alertId');
var inputIdName = document.getElementById('inputIdName');

var btn_SayHello = document.getElementById('btn_SayHello');
btn_SayHello.onclick = btnSayHello;

function btnSayHello() {
    if (inputIdName.value) {
        var content = '<div class="alert alert-warning alert-dismissible fade show" role="alert">' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '<strong>' + 'Say Hello, ' + inputIdName.value + '!</strong>' +
            '</div>' +
            '<script>$(".alert").alert();</script>';
        alertId.innerHTML = content;
    }
}

var clear_InputName = document.getElementById('clear_InputName');
clear_InputName.onclick = clearInputName;

function clearInputName() {
    inputIdName.value = '';
}
//#endregion