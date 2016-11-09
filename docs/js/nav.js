$(document).ready(function(){
  $('.tree-toggle').click(function () {
    $(this).parent().children('ul.tree').slideToggle(200);
  });
  $('.tree-toggle').each(function () {
    $(this).parent().children('ul.tree').slideToggle(0);
  });
  $('.abstract-toggle').click(function () {
 	$(this).parent().siblings('blockquote').slideToggle(200);
  });
});