<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
export default {
  name:"BarChart",
  props: {
    msg:String
  },
}
mounted() {
    const ctx = document.getElementById("myChart"),
}

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>
