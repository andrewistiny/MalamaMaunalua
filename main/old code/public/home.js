google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Average Bags Per Month'],
          ['Adopters',     25],
          ['Huki',      65],
          ['Organizations',  15],
        ]);

        var options = {
          title: 'Average Bags per Month'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
