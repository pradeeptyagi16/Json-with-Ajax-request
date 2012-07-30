$(document).ready(function() {
    var items = new Array();
    items[0] = "Item 1";
    items[1] = "Item 2";
    items[2] = "Item 3";

    //var dataToSend = {'selections' : items} ;
    var dataToSend = {};
    dataToSend.id1 = "Item 1";
    dataToSend.id2 = "Item 2";
    dataToSend.id3 = "Item 3";
    $("#b1").click(function (){
       $.ajax({    
            traditional: true,
            type: "POST",
            url: 'reqajax.php',
            dataType:"text",
            data: dataToSend,
            success: function(request) {
                var response = JSON.parse(request);
                $('#d1').html(response[0]+' '+response[1]+' '+response[2]);
            } 
       });
    });
});