var g_module = "";
var g_rotation = {
    "london": [
        {   "id":"london",
            "country": "United Kingdom",
            "city": "London",
            "class": "rot_london",
            "image": "box_uk_london.png"        }],
    "ashridge": [
        {   
            "id": "ashridge",
            "country": "United Kingdom",
            "city": "Ashridge",
            "class": "rot_ashridge",
            "image": "box_uk_ashridge.png"        }],
    "sanfrancisco": [    
        {   
            "id": "sanfrancisco",
            "country": "United State of America",
            "city": "San Francisco",
            "class": "rot_sanfrancisco",
            "image": "box_us_sanfran.png"        }],
    "newyork": [ 
        {   
            "id": "newyork",
            "country": "United State of America",
            "city": "New York",
            "class": "rot_newyork",
            "image": "box_us_newyork.png"        }],
    "boston": [ 
        {
            "id": "boston",
            "country": "United State of America",
            "city": "Boston",
            "class": "rot_boston",
            "image": "box_us_boston.png"        }],
    "dubai": [ 
        {
            "id": "dubai",
            "country": "United Arab Emirates",
            "city": "Dubai",
            "class": "rot_dubai",
            "image": "box_uae_dubai.png"        }],
    "shanghai": [ 
        {
            "it": "shangai",
            "country": "China",
            "city": "Shanghai",
            "class": "rot_shanghai",
            "image": "box_ch_shanghai.png"        }],
    "norotation": [ 
        {
            "it": "norotation",
            "country": "No Rotation",
            "city": "Stay in home campus",
            "class": "rot_london",
            "image": "box_uk_london.png"        }]
};

$(document).on("click", ".modal_opener", function () {
     g_module = $(this).data('id');
     switch(g_module){
         case "module_e": $(".modal-body #module_name").text("E");
                            break;
         case "module_d":$(".modal-body #module_name").text("D");
                            break;
     }
});

$(document).on("click", ".addrotation", function () {
    
    var module = $(this).data('id');
    var box_class = g_rotation[module][0].class;


    $("#box_" + g_module).attr( "class", "box-top " + box_class );

    var box_img = g_rotation[module][0].image;            
    $("#"+g_module).html("<img src=\"images/" + box_img + "\">");
    
    $("#rotationbox").modal("hide");
});


