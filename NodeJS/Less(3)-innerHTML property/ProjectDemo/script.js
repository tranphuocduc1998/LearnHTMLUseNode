var data = {
    image: 'Assets/most-beautiful-cookies.jpg',
    name: 'Card title',
    title: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
}
var dataList = [
    data, data, data, data, data, data, data, data
]

var content = dataList.map(function(item) {
    return '<div class="col-md-3">' +
        '<div class="card" style="width: 100%;">' +
        '<div class="card-body">' +
        '<img src="' + item.image + '" class="card-img-top" alt="...">' +
        '<h5 class="card-title">' + item.name + '</h5>' +
        '<p class="card-text">' + item.title + '</p>' +
        '<a href="#" class="btn btn-primary">Go somewhere</a>' +
        '<a href="#" class="btn btn-primary">Go</a>' +
        '</div>' +
        '</div>' +
        '</div>';
});

console.log(content);

var cardTitle = document.getElementById('cardTitle');
cardTitle.innerHTML = content.join('');