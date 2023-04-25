<script>
import { PieChart } from "../PieChart.vue";
import ColumnChart from "../views/Column.vue";

export default {
  data() {
    return {
      store,
      HomeView,
    };
  },
  // components:
  name: "ChartCard",

  props: {
    card: Object,
  },
};
</script>

<template>
  <div class="container">
    <div class="card">
      <h2>{{ card.name }}</h2>
      <img :src="card.image" alt="" />
      <h3>{{ card.price }}</h3>
      <button class="adddd" @click="addItemtoCart(card)">Add to Cart</button>
    </div>
  </div>
</template>

<style>
.card {
  box-shadow: 10px 7px 5px rgb(161, 122, 122);
  border-radius: 3rem;
  width: 80%;
  height: 75%;
  font-size: 3rem;
  background-color: rgb(255, 168, 168);
  margin: 8rem auto;
  align-items: center;
  border: 0.3rem solid rgb(216, 127, 149);
  padding: 3rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  box-sizing: border-box;
}

.container {
}

img {
  width: 90%;
}

.adddd {
  font-size: 3rem;
  padding: 9rem auto;
  margin: 3% auto;
  border: 0.5rem solid rgb(92, 128, 100);
  text-align: center;
  border-radius: 2rem;
  box-sizing: border-box;
  background-color: rgb(174, 228, 174);
}

.adddd:hover {
  background-color: darkgreen;
  border: 0.5rem solid rgb(0, 0, 0);
}
</style>
