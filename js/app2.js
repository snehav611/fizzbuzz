$(document).ready(function() {
	do {
		var number = +prompt("Please enter an integer starting from 1 to start Fizz Buzz:");
	}
	while(isNaN(number) || number % 1 != 0 || number <= 0);
	var fizzBuzz = function(number) {
	var count = 1;
	for (count = 1; count <= number; count++) {
	    if (count % 15 == 0) {
	       $('ul').append('<li>' + 'Fizz Buzz' + '</li>');
	    } else if (count % 5 == 0) {
	       $('ul').append('<li>' + 'Buzz' + '</li>')
	    } else if (count % 3 == 0) {
	       $('ul').append('<li>' + 'Fizz' + '</li>')
	    } else {
	       $('ul').append('<li>' + count + '</li>')
	    }
	};
	};
	fizzBuzz(number);
});