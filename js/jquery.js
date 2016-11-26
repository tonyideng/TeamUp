
//animation for elements.


//$(document).ready(function(){
    $("#add-btn").click(function(){
        $("#done").fadeIn(1000);
    });
//});

//Landing Page JQuery
$('#team-up, #logo').hide(0).fadeIn({queue: false, duration: 1600});//animation to show logos on page load
$('#logo').animate({'margin-top': '60px'}, 1600);//animation to show logos on page load
$('#team-up').animate({'margin-top': '25px'}, 1000);//animation to show logos on page load

$("#create").delay(2400).fadeIn(2000);//animation to show Create Team button on landing.html on page load after a 2.5s delay
//Landing Page JQuery


//teamname.html JQuery
$('#team-input').on('input', function() {
    $('#team-done').fadeIn(1000);
});

$('#team-done').click(function(){
  $('.main-container').fadeOut(500); //fading one one div out
  $('.new-team-container').fadeIn(1200);//and replacing it with divs containing the new team name

  var input = $('#team-input').val()//getting the input value for the new team name
  $('#new-team-name').append(input);
});

$('#diff-name').click(function(){
  location.reload(); //reloading the page so the user can put in a new team name
});
//teamname.html JQuery


//invite.html/chat.html/teams/html jquery
$( '#hamburger' ).click(function(){ //animating the slide menu
  $('.slide-menu').animate({'margin-left': '-10px'}, 300);
});

$( '#close-button' ).click(function(){
  $('.slide-menu').animate({'margin-left': '-680px'}, 300); //sliding the menu off screen
});

$(".check").change(function(){
  if($(this).prop("checked") == true){
        $("#invite-done").fadeIn(1000);
      }
});


//in-chat.html
$('#send-msg').click(function(){
  var msg = $('#chat-input').val()
  $(".sent-msg").append($('<li>').text(msg)); //adding in a message
});



//animation to show "Task Complete"
//$(document).ready(function(){
    $(".check1").change(function(){
			if($(this).prop("checked") == true){
                $("#li1").css("background-color", "#7ED321");
                $("#li1").css( "transition", "all .3s ease-in-out");
            }
            else if($(this).prop("checked") == false){
                $("#li1").css("background-color", "#FFCC78");
            }

            $("#complete").fadeIn(1000);
		});

    $(".check2").change(function(){
			if($(this).prop("checked") == true){
                $("#li2").css("background-color", "#7ED321");
                $("#li2").css( "transition", "all .3s ease-in-out");
            }
            else if($(this).prop("checked") == false){
                $("#li2").css("background-color", "#FFCC78");
            }

            $("#complete").fadeIn(1000);
		});

    $(".check3").change(function(){
			if($(this).prop("checked") == true){
                $("#li3").css("background-color", "#7ED321");
                $("#li3").css( "transition", "all .3s ease-in-out");
            }
            else if($(this).prop("checked") == false){
                $("#li3").css("background-color", "#FFCC78");
            }

            $("#complete").fadeIn(1000);
		});




//});
