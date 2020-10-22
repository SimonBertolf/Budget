<template>
 <div class="w-full h-full" ref="chartdiv"></div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themesAnimated);

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
    const chart = am4core.create(this.$refs.chartdiv, am4charts.PieChart);
    const pieSeries = chart.series.push(new am4charts.PieSeries());
    const label = pieSeries.createChild(am4core.Label);
    const labelValue = pieSeries.createChild(am4core.Label);
    this.chart = chart;
    pieSeries.dataFields.value = this.value;
    pieSeries.dataFields.category = this.category;
    chart.data = this.data;
    chart.responsive.enabled = true;
    chart.responsive.useDefault = false;
    chart.innerRadius = am4core.percent(60);
    chart.legend = new am4charts.Legend();
    chart.legend.itemContainers.template.togglable = false;
    pieSeries.labels.template.disabled = true;
    chart.responsive.rules.push({
      relevant(target) {
        if (target.pixelWidth <= 640) return true;
        return false;
      },
      state(target, stateId) {
        if (target instanceof am4charts.Legend) {
          const state = target.states.create(stateId);
          state.properties.position = 'bottom';
          return state;
        }
        if (target instanceof am4core.Label) {
          const state = target.states.create(stateId);
          state.properties.fontSize -= 10;
          return state;
        }
        return null;
      },
    });
    chart.legend.position = 'right';
    labelValue.text = this.labelValue;
    labelValue.horizontalCenter = 'middle';
    labelValue.verticalCenter = 'bottom';
    labelValue.fontSize = 30;
    label.text = this.labelText;
    label.horizontalCenter = 'middle';
    label.verticalCenter = 'top';
    label.fontSize = 20;
    pieSeries.slices.template.events.on('hit', (event) => {
      this.handleChartHit(event);
    });
    chart.legend.itemContainers.template.events.on('hit', (event) => {
      this.handleLegendHit(event);
    });
  },
  beforeDestroy() {
    if (this.chart) this.chart.dispose();
  },
};
</script>

<style scoped>

</style>
