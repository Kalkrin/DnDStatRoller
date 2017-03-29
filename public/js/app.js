function createStat() {
	var one = Math.floor((Math.random() * 6) + 1);
	var two = Math.floor((Math.random() * 6) + 1);
	var three = Math.floor((Math.random() * 6) + 1);
	var four = Math.floor((Math.random() * 6) + 1);

	var stats = [one, two, three, four];
	stats.sort();
	stats.splice(0, 1);

	var sum = 0;
	for(var i = 0; i < stats.length; i ++) {
		sum += stats[i];
	}
	return sum;
}

function showStat() {
	var sums = [];

	$('input').each(function() {
		sums.push(createStat());
	});

	sums.sort(function(a,b){return a - b});
	console.log(sums);
	var inc = 0;
	$('input').each(function() {
		$(this).val(sums[inc]);
		inc ++;
	});
}
