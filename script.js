var buttons = document.querySelector('#list');

buttons.onclick = function (e) {
    var target = e.target;

    if (target.tagName = 'BUTTON') {
        var product = target.closest('li').querySelector('h2').textContent;
        alert(product);
    }
}

