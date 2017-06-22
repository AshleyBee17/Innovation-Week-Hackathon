$(document).ready(function(){
    $("#sidebarbutton").click(function(){
        $("#myBar").slideToggle({direction:'right'});
        $("#page-content").css("margin-left","255px");
    });

    $("#close").click(function() {
    	$("#myBar").slideToggle();
        $("#page-content").css("margin-left","0px");

    })
});