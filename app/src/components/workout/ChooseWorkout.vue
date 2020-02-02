<template>
  <div>
    <h2>Your Home Page</h2>
    <b-container>
      <b-row>
        <b-col lg="6" md="8" sm="12">
          <b-card style="height:480px">
            Your progress (charts) (choose what to track) and time stamps
            <line-chart ref="chart" />
          </b-card>
        </b-col>
        <b-col lg="6" md="8" sm="12">
          <b-row>
            <b-col md="6" sm="12">
              <b-card style="height:230px">calendar(last few days)</b-card>
            </b-col>
            <b-col md="6" sm="12">
              <b-card style="height:230px">
                <p>plan for today</p>
                <p>Hypertrophy pull (/) done</p>
                </b-card>
            </b-col>
            <b-col md="6" sm="12">
              <b-card style="height:230px">
                <p>plan for next day(s)</p>
                <p>Hypertrophy push day</p>
                </b-card>
            </b-col>
            <b-col md="6" sm="12">
              <b-card style="height:230px">new workout / begin workout</b-card>
            </b-col>
            <b-col md="6" sm="12">
              <b-card style="height:230px">
                <p>Your Goals</p>
                <p>Planche</p>
                <p>Vidtorian Cross</p>
              </b-card>
            </b-col>
            <b-col md="6" sm="12">
              <b-card style="height:230px">
                <p>History of workouts</p>
              </b-card>
            </b-col>
            <b-col md="6" sm="12">
              <b-card style="height:230px">
                <p>Notes</p>
                <p>'Always be patient'</p>
              </b-card>
            </b-col>
             <b-col md="6" sm="12">
              <b-card style="height:230px">
                <p>Statistics</p>
                <p>Maxes</p>
                <p>10 s planche</p>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { BCol, BRow, BCard, BContainer } from "bootstrap-vue";
import { Line } from "vue-chartjs";
export default {
  name: "ChooseWorkout",
  components: { BCol, BRow, BCard, BContainer, LineChart: Line },
  mounted: function(){
    this.$refs.chart.renderChart({
      labels: ['mon','tue','wen','thr','friday'],
      datasets: [
        {
          label: 'planche total seconds hold',
          backgroundColor: '#f87979',
          data: [60,0,54,90,0]
        },
        {
          label: 'front lever total seconds hold',
          backgroundColor: '#03c003',
          data: [0,60,0,20,60]
        },
        {
          label: 'one arm pull up reps',
          backgroundColor: '#c3c003',
          data: [0,20,0,10,20]
        },
      ]
    }, {responsive: true, maintainAspectRatio: false});
  }
};
</script>
<style>
.card {
  border-radius: 2px;
  margin-top: 20px;
  border: 1px solid #eee;
}
</style>