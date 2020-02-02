<template>
  <div>
    <h2>BackLog</h2>
    <day-of-back-log v-for="day in days" :key="day.day" :day="day.day" :trainings="day.trainings" />
  </div>
</template>
<script>
import DayOfBackLog from "./components/DayOfBackLog.vue";
export default {
  name: "BackLog",
  components: { DayOfBackLog },
  data: () => {
    return {
      days: [
        {
          day: "2019 November 18",
          trainings: [
            {
              name: "Morning Routine",
              exercises: [
                {
                  exercise: "push ups",
                  reps: 7,
                  addKgs: 0
                },
                {
                  exercise: "push ups",
                  reps: 7,
                  addKgs: 0
                },
                {
                  exercise: "push ups",
                  reps: 7,
                  addKgs: 0
                },
                {
                  exercise: "push ups",
                  reps: 7,
                  addKgs: 0
                },
                {
                  exercise: "push ups",
                  reps: 7,
                  addKgs: 0
                },
                {
                  exercise: "push ups",
                  reps: 7,
                  addKgs: 0
                },
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>