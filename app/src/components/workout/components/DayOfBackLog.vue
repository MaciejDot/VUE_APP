<template>
  <div>
    <h3 class="day" @click="expandDay">{{day}}</h3>
    <div v-if="expandedDay">
      <div v-for="training in trainings" :key="training.name">
        <h4>{{training.name}}</h4>
        <div
          v-for="(exercise,index) in training.exercises"
          :key="index"
        >exercise {{exercise.exercise}} reps {{exercise.reps}} add kgs {{exercise.addKgs}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DayOfBackLog",
  props: { day: { Type: String }, trainings: { Type: Array } },
  data: () => ({
    expandedDay: false
  }),
  methods: {
    expandDay: function() {
      this.expandedDay = !this.expandedDay;
    }
  }
};
</script>
<style scoped>
.day {
  cursor: pointer;
}
</style>