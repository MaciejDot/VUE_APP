<template>
  <b-container>
    <h2>Create workout</h2>
    <b-row>
      <b-col cols="1" />
      <b-col cols="5">Exercise Name</b-col>
      <b-col cols="3">Reps/ Seconds of hold</b-col>
      <b-col cols="3">Additional Kg's</b-col>
    </b-row>
    <b-row v-for="(row,index) in rowsOfWorkout" :key="index">
        <b-col cols="1"/>
         <b-col cols="5">
        {{row.exercise}}
      </b-col>
      <b-col cols="3">
        {{row.reps}}
      </b-col>
      <b-col cols="3">
        {{row.addKgs}}
      </b-col>
        </b-row>
        
    <b-row>
      <b-col cols="1">
        <svg
          width="20"
          height="20"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="addExercise"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 7H7V12H5V7H0V5H5V0H7V5H12V7Z"
            fill="#1B1F23"
          />
        </svg>
      </b-col>
      <b-col cols="5">
        <v-select v-model="selectedExercise" :options="['planche hold','front lever hold']" />
      </b-col>
      <b-col cols="3">
        <b-form-input v-model="numberOfReps" style="height:35px;" type="number"></b-form-input>
      </b-col>
      <b-col cols="3">
        <b-form-input v-model="AdditionalKgs" style="height:35px;" type="number"></b-form-input>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { BRow, BCol, BContainer, BFormInput } from "bootstrap-vue";
import VSelect from "vue-select";
export default {
  name: "WorkoutCreator",
  components: { VSelect, BRow, BCol, BContainer, BFormInput },
  methods:{
      addExercise(){
          this.rowsOfWorkout.push({
              exercise: this.selectedExercise,
              reps: this.numberOfReps,
              addKgs: this.AdditionalKgs
          })
      }
  },
  data: () => {
    return {
      rowsOfWorkout: [],
      exercises: [],
      selectedExercise:null,
      numberOfReps:0,
      AdditionalKgs:0
    };
  }
};
</script>
<style scoped>
svg {
  opacity: 0.5;
  cursor: pointer;
  margin-top: 7px;
}
svg:hover {
  opacity: 0.7;
}
</style>