$(document).ready(function(){
    $("#sidebarbutton").click(function(){
        $("#myBar").slideToggle({direction:'right'});
    });

    $("#close").click(function() {
    	$("#myBar").slideToggle();
    })
});