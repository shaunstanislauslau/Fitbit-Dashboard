import Plotly from 'plotly.js-dist';

var data = [{
	x: ['giraffes', 'orangutans', 'monkeys'],
	y: [20, 14, 23],
	type: 'bar'
}];

Plotly.newPlot('myDiv', data, {}, {
	showSendToCloud: true
});
