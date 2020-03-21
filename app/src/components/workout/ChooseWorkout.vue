<template>
  <div>
    <h1>Your Home Page</h1>
    <b-container>
      <b-row>
        <b-col lg="6" sm="12">
          <b-card style="height:480px">
            Your progress (charts) (choose what to track) and time stamps
            <line-chart ref="chart" />
          </b-card>
        </b-col>
        <b-col lg="6" sm="12">
          <b-row>
            <b-col md="6" sm="12">
              <b-card style="height:230px;cursor:pointer" @click="workoutCreatorLink">
                <p>
                  <b>Create new workout plan</b>
                </p>
              </b-card>
            </b-col>
            <b-col md="6" sm="12">
              <b-card style="height:230px">
                <p>
                  <b>Your workout plans</b>
                </p>
                <p v-for="(workoutPlan,index) in workoutPlans" :key="index">
                  <router-link class="link" :to="`WorkoutViewer/${username}/${workoutPlan.name}`">{{workoutPlan.name}}</router-link>
                </p>
              </b-card>
            </b-col>
            <b-col md="6" sm="12">
              <b-card style="height:230px;cursor:pointer" @click="workoutExecutionCreatorLink">
                <p>
                  <b>Create new workout execution</b>
                </p>
              </b-card>
            </b-col>
            <b-col md="6" sm="12">
              <b-card style="height:230px;cursor:pointer;">
                <p>
                  <b>Calendar / Back log</b>
                </p>
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
import { mapState } from 'vuex'
export default {
  name: "ChooseWorkout",
  components: { BCol, BRow, BCard, BContainer, LineChart: Line },
  data: function() {
    return {
      workoutPlans: []
    };
  },
  computed: mapState({
    username: state => state.username
  }),
  methods: {
    workoutCreatorLink: function() {
      this.$router.push({ path: "/WorkoutCreator" });
    },
    workoutExecutionCreatorLink: function(){
      this.$router.push({ path: "/WorkoutExecution" });
    }
  },
  mounted: function() {
    this.$axios
      .workout()
      .get("/WorkoutPlan")
      .then(x => {
        this.workoutPlans = x.data;
      });

    this.$refs.chart.renderChart(
      {
        labels: ["mon", "tue", "wen", "thr", "friday"],
        datasets: [
          {
            label: "planche total seconds hold",
            backgroundColor: "#f87979",
            data: [60, 0, 54, 90, 0]
          },
          {
            label: "front lever total seconds hold",
            backgroundColor: "#03c003",
            data: [0, 60, 0, 20, 60]
          },
          {
            label: "one arm pull up reps",
            backgroundColor: "#c3c003",
            data: [0, 20, 0, 10, 20]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
<style>
.link:focus, .link:hover {
    color: rgba(0,0,0,.7);
    text-decoration: none;
}
.link {
    color: rgba(0,0,0,.5);
}
.card {
  border-radius: 2px;
  margin-top: 20px;
  border: 1px solid #eee;
}
</style>