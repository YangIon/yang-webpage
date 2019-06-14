var sections = $('.section-container .block-section');
console.log(sections[0]);
var num = 0;

$(".about-nav").click(function() {
    num >= sections.length ? num = 0 : num = num;
    $('html,body').animate({
        scrollTop: $(sections[num]).offset().top}, 
        'slow');
        num++;
    });