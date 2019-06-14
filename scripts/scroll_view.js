function isScrolledView(ele) {
    var rect = ele.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = (elemTop >=0) && (elemBottom <= window.innerHeight);

    return isVisible;
}

var scrollView = function() {
    var ele = document.getElementsByClassName('dimen-0')[0];
    
    if (isScrolledView(ele)) {
        console.log('scrolled into view');
        unbindScrollHandler();
    } else {
        console.log('not scrolled into view.');
    }
}

function unbindScrollHandler() {
    $(document).unbind('scroll', scrollView);
}

$(document).scroll(scrollView);



