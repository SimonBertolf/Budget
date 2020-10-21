<template>
 <Div></Div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

export default {
  name: 'Chart',
  mounted() {
    var chart = am4core.create('chartdiv', am4charts.PieChart);

    Chart.data = [{
      'country': 'Belgium',
      'litres': 60,
    }, {
      'country': 'The Netherlands',
      'litres': 50,
    }];
  },

  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = 'litres';
  pieSeries.dataFields.category = 'country';
}
</script>

<style scoped>

</style>
