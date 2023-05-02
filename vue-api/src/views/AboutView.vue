<template>
  <div class="about">
    <h1>This is an about page</h1>
    <select name="" id="">
      <option value="All">All boroughs</option>
      <option value="Brooklyn">Brooklyn</option>
    </select>
    <div></div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: {
      labels: ['Manhattan'],
      datasets: [{ data: [] }]
    },
    chartOptions: {
      responsive: true
    }
  }),
  async mounted() {
    this.loaded = false
    try {
      const { userlist } = await fetch('/api/userlist')
      this.chartdata = userlist

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style></style>
