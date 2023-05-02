<template>
  <Doughnut id="BarChart" :options="cOptions" :data="cData" />
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { bar } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)
export default {
  name: 'BarChart',
  components: {
    bar
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
