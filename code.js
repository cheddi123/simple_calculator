$(document).ready(function() {
	var num = '';
	var num1 = '';
	var num2 = '';
	var operator = '';
	var total = '';
	var input = '';

	$('button.input').on('click', function(e) {
		e.preventDefault();

		var btn = $(this).val();

		input = $('#inputNum').append(btn);
		num = parseFloat(input.val());

		console.log(num);

		// handleOperator(btn);
	});

	$('button.operator').on('click', function(e) {
		var btn = $(this).val();
		//clear the display
		$('#inputNum').text('');

		console.log(btn);
		handleOperator(btn);

		//  handleNumber(num1)
		console.log(num1);
	});

	function handleNumber(num) {
		if (num1 === '') {
			num1 = num;
		} else {
			num2 = num;
		}
	}

	function displayNumber(display) {
		$('#inputNum').text(display);
		// console.log(btn);
	}

	function handleOperator(oper) {
		if (operator === '') {
			operator = oper;
		}
		num1 = num;
		// handleNumber(num);
		operator = oper;
	}

	$('button.output').on('click', function() {
		num2 = $('#inputNum').text();
		handleTotal();
	});

	$('#clear').on('click', function() {
		total = '';
		num1 = '';
		num2 = '';
		operator = '';
		displayNumber(total);
	});

	function handleTotal() {
		switch (operator) {
			case '+':
				console.log('num1 : ' + num1);
				console.log('num2 :' + num2);
				total = +num1 + +num2;
				console.log(total);
				update(total);
				displayNumber(total);
				break;

			case '-':
				console.log('num1 : ' + num1);
				console.log('num2 :' + num2);
				total = +num1 - +num2;
				console.log(total);
				update(total);
				displayNumber(total);
				break;

			case 'X':
				console.log('num1 : ' + num1);
				console.log('num2 :' + num2);
				total = +num1 * +num2;
				console.log(total);
				update(total);
				displayNumber(total);
				break;

			case '/':
				console.log('num1 : ' + num1);
				console.log('num2 :' + num2);
				total = (+num1 / +num2).toFixed(3);
				console.log(total);
				update(total);
				displayNumber(total);
				break;

			case '^':
				console.log('num1 : ' + num1);
				console.log('num2 :' + num2);
				total = Math.pow(+num1, +num2);
				console.log(total);
				update(total);
				displayNumber(total);
				break;

			case '%':
				console.log('num1 : ' + num1);
				console.log('num2 :' + num2);
				total = +num1 % +num2;
				console.log(total);
				update(total);
				displayNumber(total);
				break;
		}
	}

	function update(total) {
		num = total;
		handleNumber(num);
		console.log(num);
	}
});
