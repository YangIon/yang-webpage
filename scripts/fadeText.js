$(function() {
    $('div').each(function (index) {
        setTimeout(function () {
            $(".letter-" + index).removeClass("hidden").addClass("animated fadeInUp")}, 250 * index)
        })
    })