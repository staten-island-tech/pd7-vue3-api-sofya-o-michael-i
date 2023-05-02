<template>
  <div class="BarChart">
    <DoughnutChart v-if="loaded" :chartData="(c = Data)" :chartOptions="cOptions" />
  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue'
export default {
  name: 'BarView',
  components: { BarChart },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [],
        datasets: []
      },
      chartOptions: {
        responsive: true,
        backgroundColor: []
      }
    }
  },
  methods: {
    async boroughData() {
      try {
        const res = await fetch('https://data.cityofnewyork.us/resource/8m42-w767.json')
        const data = await res.json()
        let boroughType = []
        let labels = ['MANHATTAN', 'BROOKLYN', 'BRONX', 'QUEENS', 'RICHMOND / STATEN ISLAND']
        let backCol = ['#9b5de5', '#f15bb5', '#fee440', '#00bbf9', '#00f5d4']
        labels.forEach((label) => {
          boroughType.push(data.filter((results) => results.alarm_box_borough == label).length)
        })
        this.chartData = {
          labels: labels,
          datasets: [
            {
              data: boroughType,
              backgroundColor: backCol
            }
          ]
        }
        this.chartOptions = {
          backgroundColor: backCol
        }
        this.loaded = true
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted() {
    this.boroughData()
  }
}
</script>

<style scoped></style>
<!-- <template>
  <div class="content">
    <div class="chart">
      <DoughnutChart v-if="loaded" :data="chartData" :options="chartOptions" />
      <BarChart v-if="loaded" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style> -->
