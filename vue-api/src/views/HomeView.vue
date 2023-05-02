<template>
  <div class="content">
    <h1>Select type of Emergencies</h1>
    <select name="" id="">
      <option value="Default">Default</option>
      <option value="Medical">Medical</option>
      <option value="Non-Medical">Non-Mecical</option>
      <option value="Structural Fires">Structural Fires</option>
    </select>
    <div class="chart">
      <DoughnutChart v-if="loaded" :data="chartData" :options="chartOptions" />
      <BarChart v-if="loaded" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script>
import DoughnutChart from '../components/DoughnutChart.vue'
export default {
  name: 'DoughnutView',
  components: {
    DoughnutChart
  },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [],
        datasets: []
      },
      chartOptions: {}
    }
  },
  methods: {
    async boroughData() {
      try {
        const res = await fetch('https://data.cityofnewyork.us/resource/8m42-w767.json')
        const data = await res.json()
        let boroughType = []
        let labels = ['Manhattan', 'Brooklyn']
        let backCol = ['#cdb4db', '#ffc8dd']
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
        this.loaded = true
      } catch (error) {
        console.log(error)
      }
    }
    // async optionsSelect() {
    //   try {
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  },
  async mounted() {
    this.boroughData()
  }
}
</script>

<style scoped>
.chart {
  width: 40rem;
}
</style>
