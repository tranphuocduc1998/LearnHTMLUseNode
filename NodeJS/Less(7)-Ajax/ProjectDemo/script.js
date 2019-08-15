//#region [Sử dụng axios để lấy dữ liệu Nodejs Về]
var ajaxData = document.getElementById('AjaxData');
var Url = 'https://randomuser.me/api/';
axios.get(Url).then(function (response) {
    console.log(response.data);
    ajaxData.textContent = JSON.stringify(response.data);
}).catch(function (error) {
    console.log(error);
})
//#endregion

//#region [json-server để tạo api server và load dữ liệu]
var ulIdList = document.getElementById('ulIdList');
ulIdList.style.listStyleType = 'none';
var Urljson = 'http://localhost:3000/list/';
var countId = 0;
function loadax(parmater) {
    return new Promise(function (resolve, reject) {
        axios.get(parmater)
            .then(function (res) {
                resolve(res.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
}

render();

var inputIdList = document.getElementById('inputIdList');
var clear_Input = document.getElementById('clear_Input');
clear_Input.addEventListener('click', clearInput);
function clearInput() {
    inputIdList.value = '';
}

var add_List = document.getElementById('add_List');
add_List.addEventListener('click', addList);
function addList() {
    axios.post(Urljson, { id: countId + 1, title: inputIdList.value, author: "typicode" });
    render();
}

var clear_List = document.getElementById('clear_List');
clear_List.onclick = clearList;

function clearList() {
    for (var i = 1; i < (countId+1); i++) {
        axios.delete(Urljson + i);
    }
    clearInput();
    render();
}

function render() {
    loadax(Urljson).then(function (data) {
        var content = data.map(function (item) {
            return '<li>' + item.title + '</li>'
        });
        ulIdList.innerHTML = content.join(' ');
        countId = data.length; // sử dụng đếm bao nhiêu dữ liệu
    })
}
//#endregion