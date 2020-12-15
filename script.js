$( document ).ready(function() {
var glitter= "https://assets.teenvogue.com/photos/5bef0e65a8c9f04ca551314c/master/pass/tout.jpg";

var matte= "https://triedandtestedblog.files.wordpress.com/2015/08/essie-cashmere-mattes-comfy-in-cashmere-wrap-me-up-just-stitched-all-eyes-on-nude-coat-couture-spun-in-luxe-matte-nail-polish-swatches-1.jpg";

var holo= "https://i.pinimg.com/736x/28/b1/cf/28b1cfbbafc4d80e7dab5b1111d5d25d.jpg";
              
var gel= "https://media.allure.com/photos/59023bd8360fb359df6a093f/master/pass/allure-rca-2017-essie-gel-couture-review.jpg";
              
var clear= "https://www.essie.com/-/media/Project/loreal/brand-sites/essie/Americas/US/products_nailpolish_hd/Top_Coats/095008006154/ESSIE-nail-care-good-to-go-top-coat-front.png"; 

var counter = 0;

$(".reset").click(function(){
$(".happiness").val("");
$(".preference").val("");
$(".result").empty();
$(".result").hide();
    
    
    });
    


$(".press").click(function(){

var happiness = $(".happiness").val();
var preference = $(".preference").val();
counter = counter + 1;
$(".counter").text("This quiz has been taken " + counter + " times!");
    
    
    
     if(parseInt(happiness) <= 2 && preference.toLowerCase() === "high heels")
    
       {
        $(".result").append("<p>Glitter Nail Polish!</p>");
        $(".result").show();
        $(".result").append("<img src=" + glitter + ">");
        $(".result").append("<h3>You have gotten: Glitter nail polish. You honestly brighten everyone's day!</h3>");
           
              
         
    
       }
    
    else if (parseInt(happiness) <= 2 && preference.toLowerCase() === "sneakers")
        
        {
        
        $(".result").append("<p>Matte Nail Polish!</p>");
        $(".result").show();
        $(".result").append("<img src=" + matte + ">");
        $(".result").append("<h3>You have gotten: Matte nail polish. You are very smart, cool, and collected.</h3>");
    
    
        }
    
    else if (parseInt(happiness) <= 4 && preference.toLowerCase() === "high heels")
        
        {
        
        $(".result").append("<p>Holographic Nail Polish!</p>");    
        $(".result").show();
        $(".result").append("<img src=" + holo + ">");
        $(".result").append("<h3>You have gotten: Holographic nail polish. You don't care what others think, and march to the beat of your own drum.</h3>");
        }
    
    else if (parseInt(happiness) <= 4 && preference.toLowerCase() === "sneakers")
        
        {
      
        $(".result").append("<p>Gel Nail Polish!</p>");    
        $(".result").show();
        $(".result").append("<img src=" + gel + ">");
        $(".result").append("<h3>You have gotten: Gel nail polish. You are a sleek fashionista, who always looks amazing.</h3>");
    
        }
    
else 
        {
       
        $(".result").append("<p>Clear Top Coat!</p>");    
        $(".result").show();
        $(".result").append("<img src=" + clear + ">");
        $(".result").append("<h3>Hmm, you must of typed something wrong. As a consolation prize, you have gotten: Clear top coat.</h3>");
    
        }



});
});

