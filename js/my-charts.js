//Bar chart
var ctx1 = document.getElementById("chart--1").getContext('2d');
var chart1 = new Chart(ctx1, {
	type: 'line',
	data: {
		labels: ["0", "1", "2", "3", "4", "5", "0", "6", "7", "8", "9", "10", "11", "12", "13", "14", ],
		datasets: [{
			label: '# Crash Rate',
			data: [1, 2, 3, 4, 15, 2, 1, 21, 32, 41, 14, 12, 2, 23, 4, 1,],
			backgroundColor: '#c0b2fc',
			borderColor: '#c0b2fc',
			borderWidth: 0.5
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		}
	}
});

//Line Chart
var ctx2 = document.getElementById("chart--2").getContext('2d');
var chart2 = new Chart(ctx2, {
	type: 'line',
	data: {
		labels: ["data", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", ],
		datasets: [{
			label: '# Crash Rate',
			data: [1, 2, 3, 4, 1, 2, 1, 2, 3, 4, 1, 1, 2, 3, 4, 1,],
			backgroundColor: '#38355a',
			borderColor: '#c0b2fc',
			borderWidth: 0.5
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		}
	}
});