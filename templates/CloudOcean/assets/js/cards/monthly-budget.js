// -----------------------------------------------------------------------------
// Title: Monthly budget
// ID: #monthly-budget
// Location: index.html
// Dependency File(s):
// assets/vendor/flot/jquery.flot.js
// assets/vendor/jquery.flot.tooltip/js/jquery.flot.tooltip.min.js
// assets/vendor/flot/jquery.flot.resize.js
// assets/vendor/flot/jquery.flot.time.js
// assets/vendor/flot.curvedlines/curvedLines.js
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
	$(function() {
		var data7_1 = picInvoiceJsArrayList;
		var data7_2 = picProductJsArrayList;


		$.plot($("#monthly-budget #monthly-budget-content"), [{
			data: data7_1,
			label: "Invoice Paid",
			points: {
				show: false
			},
			curvedLines: {
				apply: true
			},
			lines: {
				fill: true
			}
		}, {
			data: data7_2,
			label: "Product",
			points: {
				show: false
			},
			lines: {
				show: true
			},
			yaxis: 2
		}], {
			series: {
				lines: {
					show: true,
					fill: true
				},
				curvedLines: {
					apply: true,
					monotonicFit: true,
					active: true
				},
				points: {
					show: true,
					lineWidth: 2,
					fill: true,
					fillColor: "#ffffff",
					symbol: "circle",
					radius: 5
				},
				shadowSize: 0
			},
			grid: {
				hoverable: true,
				clickable: true,
				tickColor: "#e5ebf8",
				borderWidth: 1,
				borderColor: "#e5ebf8"
			},
			colors: [QuantumPro.APP_COLORS.accent, QuantumPro.APP_COLORS.primary],
			tooltip: true,
			tooltipOpts: {
				defaultTheme: false
			},
			xaxis: {
				ticks: [
					[1, "Jan"],
					[2, "Feb"],
					[3, "Mar"],
					[4, "Apr"],
					[5, "May"],
					[6, "Jun"],
					[7, "Jul"],
					[8, "Aug"],
					[9, "Sep"],
					[10, "Oct"],
					[11, "Nov"],
					[12, "Dec"]
				]
			},
			yaxes: [{
				min:0
			}, {
				min:0,
				position: "right" /* left or right */
			}]
		});
	});
})(window, document, window.jQuery);
