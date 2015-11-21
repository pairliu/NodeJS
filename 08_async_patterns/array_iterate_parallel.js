(function (i, len, count, callback) {              // use a 'count' to check if all is finished.
	for (; i < len; ++i) {                         // Is there any racing condition for 'count'?
		(function(i) {							   // Why cann't call async directly at this line?
			async(arr[i], function(value) {
				// value is the processing result
				if (++count === len) {
					callback();
				}
			});
		})(i);
	}
}(0, arr.length, 0, function() {
	// All elmements have been processed.
}));
