
  // Load Charts and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Draw the pie chart for Sarah's pizza when Charts is loaded.
  google.charts.setOnLoadCallback(drawColumnChart);

  // Draw the pie chart for the Anthony's pizza when Charts is loaded.
  google.charts.setOnLoadCallback(drawPieChart);

  // Callback that draws the pie chart for Sarah's pizza.
  function drawColumnChart() {

    var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["МОДУЛЬ 1", 70, "#0540f2"],
        ["МОДУЛЬ 2", 90, "#0540f2"],
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                      2]);

      var options = {
        // title: "Density of Precious Metals, in g/cm^3",
        width: 300,
        height: 300,
        bar: {groupWidth: "25%"},
        legend: { position: "none" },
        vAxis: {
          title: 'ПРОЦЕНТ ВЫПОЛНЕНИЯ ЗАДАНИЯ (%)',
          minValue: 0
        },
      
      };

    // Instantiate and draw the chart for Sarah's pizza.
    var chart = new google.visualization.ColumnChart(document.getElementById('ColumnChart_div'));
    chart.draw(view, options);
  }

  // Callback that draws the pie chart for Anthony's pizza.
  function drawPieChart() {

 // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Фактический результат по сумме баллов', 70],
        ['Остаток', 30]
    ]);

    // Set chart options
    var options = {
        // 'title': 'How Much Pizza I Ate Last Night',
        'is3D':true,
        'width': 300,
        'height': 300
    };

    // Instantiate and draw the chart for Anthony's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('PieChart_div'));
    chart.draw(data, options);
  }