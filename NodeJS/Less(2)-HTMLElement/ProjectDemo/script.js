var tags = document.getElementsByTagName('ul').item(0);
tags.style.listStyleType = 'none';

/**
 * [children]
 * sử dụng hiện list Element con.
 */
console.log(tags.children);

/**
 * [textContent]
 * sử dụng để thêm thông tin vào Element thông qua Node.
 */
tags.children.item(0).textContent = 'Dữ liệu đã được sửa bằng .textContent - 1';
tags.children.item(2).textContent = 'Dữ liệu đã được sửa bằng .textContent - 3';

/**
 * [createElement]
 * sử dụng tạo Element mới.
 */
var newElement = document.createElement('li');
newElement.textContent = 'Dữ liệu được tạo bằng document.createElement và thêm bằng .appendChild - 4';

/**
 * [append]
 * sử dụng để thêm Element mới vào.
 */
tags.appendChild(newElement);

/**
 * [remove]
 * sử dụng để xoá Element được chọn.
 */
tags.children.item(1).remove();