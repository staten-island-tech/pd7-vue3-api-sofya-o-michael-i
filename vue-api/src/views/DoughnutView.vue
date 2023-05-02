<template>
  <div class="doughnut">
    <h1>EMS Incidents By Borough</h1>
    <DoughnutChart v-if="loaded" :chartData="chartData" :chartOptions="chartOptions" />
  </div>
</template>

<script>
import DoughnutChart from '../components/DoughnutChart.vue'

const boroughLabels = ['MANHATTAN', 'BROOKLYN', 'BRONX', 'QUEENS', 'RICHMOND / STATEN ISLAND']
const backgroundColors = ['#9b5de5', '#f15bb5', '#fee440', '#00bbf9', '#00f5d4']

export default {
  name: 'DoughnutView',
  components: { DoughnutChart },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: boroughLabels,
        datasets: [
          {
            data: [],
            backgroundColor: backgroundColors
          }
        ]
      },
      chartOptions: {
        responsive: true,
        backgroundColor: backgroundColors
      }
    }
  },
  methods: {
    async boroughData() {
      try {
        const response = await fetch('https://data.cityofnewyork.us/resource/8m42-w767.json')
        const data = await response.json()

        const boroughType = boroughLabels.map((borough) => {
          return data.filter((result) => result.alarm_box_borough == borough).length
        })
        this.chartData.datasets[0].data = boroughType
        this.chartOptions.backgroundColor = backgroundColors
        this.loaded = true
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted() {
    await this.boroughData()
  }
}
</script>

<style scoped></style>
