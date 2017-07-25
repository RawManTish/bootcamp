$(document).ready(function(){ 

    var price = 0,
    q =1;
    function result(){
        var result =  $(".result").find("span").text(price * q);
        return result;
    }
    $(".auto").on({

        change: function(){

            price = $(this).find(".audi").find(":selected").val();
            
           result();

        },
        
        keyup: function(){

            q = $(this).find("[name=days]").val();
              result();
        }
    });
});
