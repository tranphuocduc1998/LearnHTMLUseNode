var ulIdList = document.getElementById('ulIdList');
ulIdList.style.listStyleType = 'none';
var inputIdList = document.getElementById('inputIdList');
var arrayList;
var clear_Input = document.getElementById('clear_Input');
clear_Input.onclick = clearInput;

function clearInput() {
    inputIdList.value = '';
}

function render() {
    var content = arrayList.map(function (item) {
        return '<li>' + item + '</li>'
    });
    ulIdList.innerHTML = content.join(' ');
}

//#region [localStorage cho List]
var dataList = JSON.parse(localStorage.getItem('listKey'));

if (dataList == null) {
    arrayList = [];
} else {
    arrayList = dataList;
    render();
}
var add_List = document.getElementById('add_List');
add_List.onclick = addList;

function addList() {
    arrayList.push(inputIdList.value);
    localStorage.setItem('listKey', JSON.stringify(arrayList));
    render();
}

var clear_List = document.getElementById('clear_List');
clear_List.onclick = clearList;

function clearList() {
    arrayList = [];
    localStorage.removeItem('listKey');
    render();
}
//#endregion

//#region [sessionStorage cho input]
var dataSessionInput = sessionStorage.getItem('sessionInput');
if (dataSessionInput == null) {
    inputIdList.value = '';
} else {
    inputIdList.value = dataSessionInput;
}
inputIdList.addEventListener('keyup', sessionStor);

function sessionStor() {
    sessionStorage.setItem('sessionInput', inputIdList.value);
}

//#endregion