<template>
  <b-container>
    <b-card class="white-card">
        <b-row>
        <b-col cols="12" class="center-text">
          <h1>{{nameOfWorkout}}</h1>
        </b-col>
        <b-col cols="12" class="center-text">
          {{descriptionOfWorkout}}
        </b-col>
      </b-row>
    </b-card>
    <b-card class="white-card" v-for="(row, index) in rowsOfWorkout" :key="index">
      <div>
        <b-row>
          <b-col cols="12" sm="6" md="4" lg="3">
            <b-form-group label="Exercise">{{row.selectedExercise.label}}</b-form-group>
          </b-col>
          <b-col cols="12" sm="6" md="4" lg="3">
            <b-form-group label="Description">{{row.description}}</b-form-group>
          </b-col>
          <b-col cols="12" sm="6" md="4" lg="3">
            <b-form-group label="Min Reps/Seconds">{{row.minNumberOfReps}}</b-form-group>
          </b-col>
          <b-col cols="12" sm="6" md="4" lg="3">
            <b-form-group label="Max Reps/Seconds">{{row.maxNumberOfReps}}</b-form-group>
          </b-col>
          <b-col cols="12" sm="6" md="4" lg="3">
            <b-form-group label="Min Additional Kgs">{{row.minAdditionalKgs}}</b-form-group>
          </b-col>
          <b-col cols="12" sm="6" md="4" lg="3">
            <b-form-group label="Max Additional Kgs">{{row.maxAdditionalKgs}}</b-form-group>
          </b-col>
          <b-col cols="12" sm="6" md="4" lg="3">
            <b-form-group label="series">{{row.breaks}}</b-form-group>
          </b-col>
          <b-col cols="12" sm="6" md="4" lg="3">
            <b-form-group label="breaks (in s.)">{{row.series}}</b-form-group>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </b-container>
</template>
<script>
import { BContainer, BCard, BCol, BRow } from "bootstrap-vue";
export default {
  name: "WorkoutViewer",
  components: { BContainer, BCard, BCol, BRow },
  mounted: function() {
    this.$axios
      .workout()
      .get(`/WorkoutPlan/${this.$route.params.workoutId}`)
      .then(x => {
        this.nameOfWorkout = x.data.name;
        this.descriptionOfWorkout = x.data.description;
        this.rowsOfWorkout = x.data.exercises.map(x => {
          return {
            selectedExercise: {
              label: x.exerciseName,
              value: x.exerciseId
            },
            minNumberOfReps: x.minReps,
            maxNumberOfReps: x.maxReps,
            minAdditionalKgs: x.minAdditionalKgs,
            maxAdditionalKgs: x.maxAdditionalKgs,
            description: x.description,
            breaks: x.break,
            series: x.series
          };
        });
      })
      .catch(() => {
        this.$router.push({ path: "/404" });
      });
  },
  data: function() {
    return {
      rowsOfWorkout: [],
      descriptionOfWorkout: null,
      nameOfWorkout: null
    };
  }
};
</script>
<style scoped>
.center-text {
    text-align: center;
}
.white-card {
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  margin: 10px;
  color: black;
}
</style>