$(function(){
    $('#sidebar nav.menu ul li.dropdown ul').hide();
    $('#sidebar nav.menu ul li.dropdown').click(function(){
        $('ul',this).slideToggle(300);
    });
});
