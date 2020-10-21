<template>
 <div ref="chartdiv"></div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

export default {
  name: 'DonutChart',
  props: {
    data: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    labelValue: {
      type: String,
      required: true,
    },
    labelText: {
      type: String,
      required: true,
    },
    handleLegendHit: {
      type: Function,
      required: true,
    },
    handleChartHit: {
      type: Function,
      required: true,
    },
  },
  mounted() {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.PieChart);
    chart.data = this.data;
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = this.value;
    pieSeries.dataFields.category = this.category;
    chart.innerRadius = am4core.percent(60);
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'right';
    const label = pieSeries.createChild(am4core.Label);
    const labelValue = pieSeries.createChild(am4core.Label);
    labelValue.text = this.labelValue;
    labelValue.horizontalCenter = 'middle';
    labelValue.verticalCenter = 'bottom';
    labelValue.fontSize = '75%';
    label.text = this.labelText;
    label.horizontalCenter = 'middle';
    label.verticalCenter = 'top';
    label.fontSize = '50%';
    this.chart = chart;

    chart.legend.itemContainers.template.togglable = false;
    chart.legend.itemContainers.template.events.on('hit', (event) => {
      this.handleLegendHit(event);
    });
    pieSeries.slices.template.events.on('hit',(event) => {
      this.handleChartHit(event);
    });

  },
  beforeDestroy() {
    if(this.chart) this.chart.dispose();
  },
}
</script>

<style scoped>

</style>
