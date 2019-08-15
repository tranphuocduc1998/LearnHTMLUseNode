document.addEventListener('DOMContentLoaded', function () {
    var ulIdList = document.getElementById('ulIdList');
    ulIdList.style.listStyleType = 'none';
    var inputIdList = document.getElementById('inputIdList');
    //#region [load dữ liệu lấy về từ Cloud firebase và đưa vào List]
    // khai báo sử dụng firestorage
    var db = firebase.firestore();
    db.collection('account').get().then((querySnapshot) => {
        /**
         * [querySnapshot.docs]
         * dùng lấy dữ liệu theo mảng array
         */
        render(querySnapshot.docs);

        // lấy từng dữ liệu
        querySnapshot.forEach(element => {
            console.log(element.data());
        });
    });

    //#endregion

    //#region [thêm dữ liệu lên Cloud firebase]
    var add_List = document.getElementById('add_List');
    add_List.addEventListener('click', addList);
    function addList() {
        //Method thêm dữ liệu vào cloud
        db.collection('account').add({
            displaynames: inputIdList.value 
        })
        .then(function(docRef) {
            return docRef.get;
        });

        //Method load lại dữ liệu
        db.collection('account').get().then((querySnapshot) => {
            /**
             * [querySnapshot.docs]
             * dùng lấy dữ liệu theo mảng array
             */
            render(querySnapshot.docs);
        });
    }
    //#endregion

    //#region [xóa dữ liệu được chọn trong List]
    ulIdList.addEventListener('click', onListClicked);

    function onListClicked(event){
        var button = event.target;
        var id = button.dataset.id;
        db.collection('account').doc(id).delete().then(function() {
            console.log('Document successfully deleted!');
            
            db.collection('account').get().then((querySnapshot) => {
                /**
                 * [querySnapshot.docs]
                 * dùng lấy dữ liệu theo mảng array
                 */
                render(querySnapshot.docs);
            });
        }).catch(function(error) {
            console.error('Error removing document: ', error);
        });
    };

    //#endregion

    //#region [các hàm phụ]
    var clear_Input = document.getElementById('clear_Input');
    clear_Input.addEventListener('click', clearInput);
    function clearInput() {
        inputIdList.value = '';
    }

    var clear_List = document.getElementById('clear_List');
    clear_List.addEventListener('click', clearList);

    function clearList() {

    }

    function render(arrayList) {
        var content = arrayList.map(function (item, index) {
            return '<li>' + item.data().displaynames + '<button class="btn btn-primary" data-id="'+ item.id +'">Delete</button></li>'
        });
        ulIdList.innerHTML = content.join(' ');
    }
    //#endregion
    
});