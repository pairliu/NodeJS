(function next(i, len, callback) {              // A little like recursive logic.
	if (i < len) {
		async(arr[i], function(value) {         // Some async function
			// value is the processing result
			next(++i, len, callback);           // call next element
		});
	} else {
		callback();
	}
}(0, arr.length, function() {
	// Do something after all elements have been processed.
}));