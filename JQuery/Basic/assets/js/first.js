$(document).ready(function () {
// hide & show
  $("#hide").click(function () {
    $(this).prev().prev().hide(3000);
  });
  $("#show").click(function () {
    $(this).parent("#hideAndShow").find("p:nth-child(3)").show(5000);
  });
// toggle
  $("#toggleBtn").click(function () {
    console.log(
      $(this).parent("#toggle").find("p:nth-child(3)").toggle(1000)
    );
  });
// fadeIn
$("#fadeInBtn").click(function(){
$(this).parent("#fadeIn").find('div').fadeIn();
$(this).parent("#fadeIn").find('div:nth-child(3)').fadeIn(2000);
});
// fadeOut 
$("#fadeOutBtn").click(function(){
$(this).parent("#fadeOut").find("#out1").fadeOut(1000);
$(this).parent("#fadeOut").find("#out2").fadeOut(2000);
$(this).parent("#fadeOut").find("#out3").fadeOut(3000);

});
// fadeToggle-
$("#fadeToggleBtn").click(function(){
$(this).parent("#fadeToggle").find("div").fadeToggle();
});
// fadeTo
$("#fadeToBtn").click(function(){
$(this).parent("#fadeTo").find("#fadeTo1").fadeTo("slow", 0.15);
$(this).parent("#fadeTo").find("#fadeTo2").fadeTo("slow", 0.25);
$(this).parent("#fadeTo").find("#fadeTo3").fadeTo("slow", 0.5);
});

// slideup
$("#slideUpBtn").click(function(){
$(this).parent().find("p").slideUp(1000);
});

//slidedown
$("#slidedownBtn").click(function(){
  $(this).parent().find("p").slideDown(3000);
});

    // slidetoggle
    $("#slidetoggleBtn").click(function(){
        $(this).parents().find("#slidetoggle").slideToggle("4000");
    });

    // animation
$("#animateBtn").click(function(){
  $(this).parents().find("#aniamtion").animate({left:"100px", height:"150px",opacity:"0.5"});
});

// stop
$("#flip").click(function(){
  $("#panel").slideDown(5000);
  $("#stop").click(function(){
$("#panel").stop();
  });
});

//Callback 
$("#callBackBtn").click(function(){
$(this).parent().find("#callbackPara1").hide("2000", function(){
alert("this is a hide para");
});
});

// withoutcallBackBtn
$("#withoutcallBackBtn").click(function(){
$(this).parent().find("#withoutcallBackpara").hide();
alert("this is a new alert")
});

//chaining
$("#chainBtn").click(function(){
$(this).parent().find("#p5").css("color","pink").slideUp("3000").slideDown(5000);
});

 //Get text
$("#btn1").click(function(){
  alert("Text:" +$(".FindText").text());
});

//Get Html

$("#btn2").click(function(){
  alert("Html:" +$(".FindText").html());
})

//val
  $("#ValBTN").click(function(){
    alert("value:"+ $("input").val());
  });
 
//  val
$("#sform").submit(function(){
  var student= $("#sname").val();
  var className = $("#sclass").val();
  var countryName = $("#scountry").val();
  alert("hello"+ student + "class:"+className + "country" + countryName);
 });

// attribute
$("#attr").click(function(){
  alert($(".w3s").attr("href"));
});

// set metheod

// text
$("#Setbtn1").click(function(){
  $("#test1").text("Hello Alok")
});
// html
  $("#Setbtn2").click(function(){
    $("#test2").html("Hello everyone");
});
// val
$("#Setbtn3").click(function(){
  $("#test3").val("first name")
})
// attr()
$("#changeHref").click(function(){
  $("#W3sc").attr({
    "href" : "https://abc.com/",
});
});



// css width & Height-








});