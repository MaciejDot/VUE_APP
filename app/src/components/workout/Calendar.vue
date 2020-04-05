<template>
  <b-container>
    <h1>Calendar</h1>
    <b-row>
    <b-col cols="12" xl ="6">
    <v-calendar @dayclick="updateHooverDay" is-expanded :attributes="attrs"></v-calendar>
    </b-col>
    <b-col cols="12" xl ="6">
      <p>{{hooverDay}}</p>
      <WorkoutViewer username='maciej' workoutName='MASSIVE-Workout' />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { BContainer, BRow, BCol } from "bootstrap-vue";
import WorkoutViewer from "./WorkoutViewer"
export default {
  name: "Calendar",
  components: { BContainer, BRow, BCol, WorkoutViewer },
  mounted: function(){
    this
      .$store
      .dispatch('getBackLog')
      .then(x => x.forEach(y=>this.attrs.push({
        dot: 'yellow',
        dates: [new Date(y.executed)],
        popover: {
            label: `executed: ${y.name}`
          }
      })))
    this
      .$store
      .dispatch('getScheduledWorkouts')
      .then(x => x.forEach(y=>this.attrs.push({
        dot: 'red',
        dates: [new Date(y.scheduleDate)],
        popover: {
            label: `planned: ${y.workoutPlanName}`
          }
      })))
  },
  methods: {
    updateHooverDay: function(day){
      this.hooverDay = day.ariaLabel;
    },
    getAttributes: function() {
      //default blue todays date - highlight
      //red planned workouts -dots
      //yellow executed workouts -dots
    }
  },
  data() {
    return {
      hooverDay: new Date().toLocaleDateString(undefined,{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } ),
      attrs: [
        {
          key: "today",
          highlight: "blue",
          dates: new Date(),
          popover:{
            label:'today'
          }
        }
      ]
    };
  }
};
</script>