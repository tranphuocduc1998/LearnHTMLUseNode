//#region [Login Page]
var clearButton = document.getElementById('clearButton');
var loginButton = document.getElementById('loginButton');
var loginForm = document.getElementById('loginForm');
var userName = document.getElementById('userName');
var userPassword = document.getElementById('userPassword');
var loginAlert = document.getElementById('loginAlert');
var userNameAlert = document.getElementById('userNameAlert');
var userPasswordAlert = document.getElementById('userPasswordAlert');
clearButton.addEventListener('click', clearForm);

/**
 * [addEventListener]
 * có thể thêm nhiều sự kiện các nhau cho một lúc
 */
loginButton.addEventListener('click', checkUserName);
loginButton.addEventListener('click', checkUserPassword);
loginButton.addEventListener('click', checkUser);

function clearForm() {
    loginForm.reset(); //Method reset() dùng reset lại các Input trong Form.
}

function checkUserName() {
    if (userName.value != 'ductp') {
        var content = '<div class="alert alert-warning alert-dismissible fade show" role="alert">' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '<strong>' + 'Tên user là ductp, không phải ' + userName.value + '!</strong>' +
            '</div>' +
            '<script>$(".alert").alert();</script>';
    } else {
        var content = '';
    }
    userNameAlert.innerHTML = content;
}

function checkUserPassword() {
    if (userPassword.value != '08081998') {
        var content = '<div class="alert alert-warning alert-dismissible fade show" role="alert">' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '<strong>' + 'mật khẩu user là 08081998, không phải ' + userPassword.value + '!</strong>' +
            '</div>' +
            '<script>$(".alert").alert();</script>';

    } else {
        var content = '';
    }
    userPasswordAlert.innerHTML = content;
}

function checkUser() {
    if (userName.value == 'ductp' && userPassword.value == '08081998') {
        var content = '<div class="alert alert-warning alert-dismissible fade show" role="alert">' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '<strong>' + 'Thực hiện đăng nhập thành công!' + '!</strong>' +
            '</div>' +
            '<script>$(".alert").alert();</script>';
    } else {
        var content = '';
    }
    loginAlert.innerHTML = content;
}
//#endregion

//#region [Tìm kiếm với sự kiện keyup]
var users = [{
        name: 'Thinh',
        phone: '070123123'
    },
    {
        name: 'Hung',
        phone: '080456456'
    },
    {
        name: 'Hoang',
        phone: '090123123'
    }
];
var userList = document.getElementById('userList');
userList.style.listStyleType = 'none';
var searchInput = document.getElementById('searchInput');

function render(users) {
    var content = users.map(function(user) {
        return '<li>' + user.name + ' - ' + user.phone + '</li>';
    });
    userList.innerHTML = content.join('');
}

render(users);

searchInput.addEventListener('keyup', function(event) {
    // sự kiện 'change' chỉ xảy ra khi input bị mất focus
    // sử dụng sự kiện keyup để tìm kiếm người dùng có số điện thoại khớp với nội dung tìm kiếm.
    // Gợi ý: 
    // - biến value dưới đây là giá trị của input tại thời điểm gõ phím
    // - sử dụng array.filter và string.indexOf để lọc users array, trả về những phần tử có số điện thoại chứa string lưu trong biến `value`
    // Sử dụng Chrome Developer Tools để xem giá trị hiển thị ra sau mỗi lần gõ
    var value = searchInput.value;
    var stemp = users.filter(function(item) {
        return item.phone.indexOf(value) > -1;
    });
    console.log(stemp);
    render(stemp);

});

//#endregion