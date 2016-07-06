function compute_sum_for(array) {
	var sum = 0;
	var i = 0;
	for (; i < array.length; i++) {
		sum += array[i];
	};
	return sum;
}

function compute_sum_while(array) {
	var sum = 0;
	var i = 0;
	while (i < array.length) {
		sum += array[i];
		i++;
	};
	return sum;
}

function compute_sum_recursive(array, sum) {
	// "deep" copy for primitives (String, Number)
	var arr = array.slice(0);
	if (typeof sum == 'undefined') {
		var sum = 0;
	} else {
		var sum = sum;
	}
	var length = arr.length;
	if (length == 0) {
		return sum;
	} else {
		sum += arr[length - 1];
		arr.pop();
		return compute_sum_recursive(arr, sum);
	}
}