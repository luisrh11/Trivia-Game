var userAnswer1;
var userAnswer2;
var userAnswer3;
var userAnswer4;
var userAnswer5;
var userAnswers = [];
var correctAnswers = ["Venezuela","18","Rock","L C Bird","Apple"];
var time = 15;
var right=0;
var wrong=0;
var unanswered=0;

$("document").ready(function() {
    

    $(".submitBtn").hide();
});

startBtnTimer();

	function startBtnTimer() {
		$('.startBtn').on('click', function (startTimerGoing) {
       
         $('.restartBtn').hide().delay(15000).fadeIn();

		$('.starter').css({
				'display': 'none'
			});
			$('.screen').css({
				'display': 'block'
			});
			$('.timer').css({
				'display': 'block'
			});
            
            
        $(".submitBtn").show();
		timer();
	});
}



function timer(){
    time--;
    if(time > 0){
        setTimeout(timer,1000);
        $(".timer").html('<h2> Time Left: ' + time + ' Seconds!</h2>');
    } else {

        UserAnswers();
        showScoreboard();
        compare();


        $(".timer").html('<h2> Time is up!</h2>');
        
        $('.screen').css({
            'display': 'none'
        });
    }
}



$('.radioSelect1').on('click', function (storeTriviaBtnAnswer) {	
	userAnswer1 = $('input[name="question1"]:checked').val();
	}); 

$('.radioSelect2').on('click', function (storeTriviaBtnAnswer) {	
	userAnswer2 = $('input[name="question2"]:checked').val();
	}); 

$('.radioSelect3').on('click', function (storeTriviaBtnAnswer) {	
	userAnswer3 = $('input[name="question3"]:checked').val();
    }); 
    
$('.radioSelect4').on('click', function (storeTriviaBtnAnswer) {	
    userAnswer4 = $('input[name="question4"]:checked').val();
    }); 

$('.radioSelect5').on('click', function (storeTriviaBtnAnswer) {	
    userAnswer5 = $('input[name="question5"]:checked').val();
    }); 

    function UserAnswers() {
        userAnswers.push(userAnswer1);
        userAnswers.push(userAnswer2);
        userAnswers.push(userAnswer3);
        userAnswers.push(userAnswer4);
        userAnswers.push(userAnswer5);
        console.log(userAnswers);
        console.log(correctAnswers);
        }

        function compare() {

            var userAnswersLength = userAnswers.length;
            
            for (var i = 0; i < userAnswersLength; i++) 
                {
                    if (correctAnswer[i] === userAnswers[i]) {
                        right++;
                    } else if (userAnswers[i] === undefined) {
                        unanswered++;
                    } else {
                        wrong++;
                    }
                }
            }
        
        

            function showScoreboard() {
			
                $(".scoreBoard").html("<h2>All Done!</h2><h3>Right: "+ right + "</h3> <h3>wrong: " + wrong + "</h3>" + "<h3>Unanswered: " + unanswered + "</h3>");
                $('.endScreen').css({
                    'display': 'block'
                });
            }	

            $(".submitBtn").on("click", function(){
                showScoreboard();
                compare();
                UserAnswers();
                
        
                $('.screen').css({
                    'display': 'none'
                });

                if(time > 0){
                    timer.stop();
                    $(".timer").html('<h2> Time is up!</h2>');
                }
                else{
                    $(".timer").html('<h2> Time is up!</h2>');
                }
            });

            $('.restartBtn').on('click', function () {

                right = 0;
                wrong = 0;
                unanswered = 0;
                time = 15;
            
                userAnswer1 = 0;
                userAnswer2 = 0;
                userAnswer3 = 0;
                userAnswer4 = 0;
                userAnswer5 = 0;
                userAnswers = [];
            
                $(".scoreBoard").empty();
                $('.radioSelect1').prop('checked', false);
                $('.radioSelect2').prop('checked', false);
                $('.radioSelect3').prop('checked', false);
                $('.radioSelect4').prop('checked', false);
                $('.radioSelect5').prop('checked', false);
            
            
                $('.timer').css({
                            'display': 'none'
                    });
                $('.starter').css({
                            'display': 'block'
                    });
                $('.endScreen').css({
                            'display': 'none'
                    });
            
            })