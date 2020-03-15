<template>
  <div>
    <h2>BackLog</h2>
    <day-of-back-log v-for="workout in workouts" :key="workout.id" :day="workout.executed" :trainings="day.trainings" />
  </div>
</template>
<script>
import DayOfBackLog from "./components/DayOfBackLog.vue";
export default {
  name: "BackLog",
  components: { DayOfBackLog },
  data: () => {
    return {
      workouts:[]
    };
  }
};
</script>