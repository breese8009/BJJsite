$(document).ready(function(){

	$("#navButton").on("click",function(){

		$("#bs-example-navbar-collapse-1").toggle(400);

	});

	$("#navLinks").click(function(){
		$("#bs-example-navbar-collapse-1").slideUp();

	});


	$(".pageScroll").on("click",function(){


		var thisId=$(this).attr("href");

		$("body").animate({scrolltop: $(thisId).offset().top});

		$("body").scrollspy({target: "mainNav"});

	});

	$("#button1").on("click",function(){

		$("#imageCircle").addClass("rotate");

		$("#html1").html("HEAD INSTRUCTOR – David Harvey Dean -Brazilian Jiu Jitsu Black Belt under Ricardo Barros David Harvey Dean was born in Oakley where he attended Liberty High School. David excelled at water polo and captained the water polo and swim teams in both his junior and senior years. David was introduced to Brazilian Jiu Jitsu through his best friend, Kyle Cometta. Twelve years after his front lawn introduction, David is currently a black belt under Ricardo Barros and spent time training with Milton Bastos while completing his Degree at Cal State Channel Islands. As owner of Big Break Jiu Jitsu, David is cultivating a strong competition team as well as giving back to his community through his love of Brazilian Jiu Jitsu, hoping to inspire his students both on and off the mat");


	});

	$("#button2").on("click",function(){

		$("#imageCircle2").addClass("rotate");

		$("#html2").html("ASSISTANT INSTRUCTOR - Samantha Annexstein -Brazilian Jiu Jitsu Purple Belt Samantha Annnexstein was born and raised in Southern California and started her Brazilian Jiu jitsu journey with Milton Bastos, training at “academy” 6 years ago. As a fierce competitor, Samantha has several tournaments under her belt and continues to let her love for the gentle art blossom. Samantha has specialized in training women and young children as she is extremely passionate about sharing her knowledge with all students.");

	});


	$("#button3").on("click",function(){

		$("#imageCircle3").addClass("rotate");

		$("#html3").html("US Open-Silver Medal<br>Pan Americans-Bronze Medal<br>World Championships-Silver Medal<br>Grapplers Quest-Gold Medal");

	});
	
	
	$('.carousel').carousel({
		interval: 30000000

	});

	

var mouse=$(".classesHeader");

mouse.on("mouseenter",function(){

$(".htmlClassBeg").html("We have several different classes that are available at your convience. We have beginner, intermediate, and advanced classes available. We recomend that everyone brand new starts out in the beginner class and then slowly works their way up to the advanced class by consistantly training and showing up for class.");
$(".htmlClassInt").html("We have several different classes that are available at your convience. We have beginner, intermediate, and advanced classes available. We recomend that everyone brand new starts out in the beginner class and then slowly works their way up to the advanced class by consistantly training and showing up for class.");
$(".htmlClassAdv").html("We have several different classes that are available at your convience. We have beginner, intermediate, and advanced classes available. We recomend that everyone brand new starts out in the beginner class and then slowly works their way up to the advanced class by consistantly training and showing up for class.");



});

mouse.on("mouseleave",function(){

$(".htmlClassBeg").html("...");
$(".htmlClassInt").html("...");
$(".htmlClassAdv").html("...");




});




});










