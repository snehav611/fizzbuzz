$(document).ready(function() {
	var count = 1;
	for (count = 1; count <= 100; count++) {
		if (count % 3 = 0) {
			$('ul').append('<li>' + 'Fizz' + '</li>');
		}
		else if (count % 5 = 0) {
			$('ul').append('<li>' + 'Buzz' + '</li>');
		}
		else if (count % 15 = 0) {
			$('ul').append('<li>' + 'Fizz Buzz' + '</li>');
		}
		else () {
			$('ul').append('<li>' + count + '</li>');
		}
	};
});