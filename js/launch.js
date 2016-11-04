(function (window, document) {
    document.getElementById('search-switch').style.display = 'inline';
    document.getElementById('toggle-search-label').addEventListener('click', switchSearch);
    if (document.getElementById('tagfilter_value').value != '') {
        switchSearch();
        document.getElementById('toggle-search').checked = 'checked';
    }
})(this, this.document);

function switchSearch() {
    var searchtag = document.getElementById('tagfilter_value');
    var searchterm = document.getElementById('searchform');
    var type = window.getComputedStyle(searchtag).getPropertyValue('display') == 'none';
    if (type) {
        searchtag.style.display = 'inline';
        searchtag.name = 'searchtags';
        searchterm.style.display = 'none';
        searchterm.name = '';
    } else {
        searchtag.style.display = 'none';
        searchtag.name = '';
        searchterm.style.display = 'inline';
        searchtag.name = 'searchterm';
    }
}

var lis = document.querySelectorAll('.liststatic li');
[].forEach.call(lis, function(li) {
    li.addEventListener('mouseenter', function(event) {
        toggleList(event.target);
    });
    li.addEventListener('mouseleave', function(event) {
        toggleList(event.target);
    });
});

var icons = document.querySelectorAll('#icons li a');
[].forEach.call(icons, function(icon) {
    icon.addEventListener('mouseenter', function(event) {
        toggleIcon(event.target);
    });
    icon.addEventListener('mouseleave', function(event) {
        toggleIcon(event.target);
    });
});

function toggleList(elem) {
    var id = elem.id;
    var item = document.querySelector('#icons a[li="'+ id +'"]');
    item.parentNode.className = toggleHoveredClass(item.parentNode.className);
    item.className = toggleHoveredClass(item.className);
}

function toggleIcon(elem) {
    var id = elem.getAttribute('li');
    var item = document.querySelector('.liststatic #'+ id +' a');
    item.className = toggleHoveredClass(item.className);
}

function toggleHoveredClass(className) {
    if (className.indexOf('hovered') > -1) {
        return className.replace(' hovered', '');
    }
    return className + ' hovered';
}