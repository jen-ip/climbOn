// var d = new Date();
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.getElementById("dayOne").innerHTML = days[d.getDay()];

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.getElementById("dayTwo").innerHTML = days[d.getDay() + 1 ];

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.getElementById("dayThree").innerHTML = days[d.getDay() + 2 ];

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.getElementById("dayFour").innerHTML = days[d.getDay() + 3 ];

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.getElementById("dayFive").innerHTML = days[d.getDay() + 4 ];

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.getElementById("daySix").innerHTML = days[d.getDay() - 2 ];

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.getElementById("daySeven").innerHTML = days[d.getDay() - 1  ];


$(document).ready(function(){
 
				$('.lightbox').click(function(){
					$('.backdrop, .box').animate({'opacity':'.5'}, 100, 'linear');
					$('.box').animate({'opacity':'1.00'}, 100, 'linear');
					$('.backdrop, .box').css('display', 'block');
				});
 
				$('.close').click(function(){
					close_box();
				});
 
				$('.backdrop').click(function(){
					close_box();
				});
 
			});
 
			function close_box()
			{
				$('.backdrop, .box').animate({'opacity':'0'}, 100, 'linear', function(){
					$('.backdrop, .box').css('display', 'none');
				});
			}

