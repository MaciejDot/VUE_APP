<template>
  <div>
    <h2>Your Home Page</h2>
    <b-container>
      <b-row>
        <b-col lg="6" md="8" sm="12">
          <b-card style="height:400px">Your progress (charts)</b-card>
        </b-col>
        <b-col lg="6" md="8" sm="12">
          <b-row>
        <b-col md="6" sm="12">
          <b-card style="height:200px">calendar(last few days)</b-card>
        </b-col>
        <b-col md="6" sm="12">
          <b-card style="height:200px">plan for next day(s)</b-card>
        </b-col>
        <b-col md="6" sm="12">
          <b-card style="height:200px">new workout / begin workout</b-card>
        </b-col>
        </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { BCol, BRow, BCard, BContainer } from "bootstrap-vue";
export default {
  name: "ChooseWorkout",
  components: { BCol, BRow, BCard, BContainer }
};
</script>
<style>
.card{
  border-radius: 2px;
  border: 1px solid #eee;
}
</style>