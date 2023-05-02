<template>
  <Doughnut id="DoughnutChart" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)
export default {
  name: 'DoughnutChart',
  components: {
    Doughnut
  },
  props: {
    chartOptions: {
      type: Object,
      required: true,
      default: () => ({
        responsive: true
      })
    },
    chartData: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped></style>
