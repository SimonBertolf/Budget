<template>
 <div class="pieContainer" ref="chartdiv"></div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

export default {
  name: 'Chart',
  mounted() {
    console.log('Hallo');
    let chart = am4core.create(this.$refs.chatdiv, am4charts.PieChart);

    chart.data = [{
      'country': 'Belgium',
      'litres': 60,
    }, {
      'country': 'The Netherlands',
      'litres': 50,
    }];

  let pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = 'litres';
  pieSeries.dataFields.category = 'country';
  },
}
</script>

<style scoped>
.pieContainer{
  width: 100%;
  height: 100px;
}
</style>
