<template>
  <b-container>
    <b-card class="white-card">
      <svg viewBox="0 0 90 90" v-if="isOwner" @click.prevent.stop="openContextMenu($event)">
          <path
            d="m 13 45 a 1 1 0 0 0 15 0 a 1 1 0 0 0 -15 0 z m 25 0 a 1 1 0 0 0 15 0 a 1 1 0 0 0 -15 0 z m 25 0 a 1 1 0 0 0 15 0 a 1 1 0 0 0 -15 0 z "
          />
        </svg>
      <b-row>
        <b-col cols="12" class="center-text">
          <h1>{{nameOfWorkout}}</h1>
        </b-col>
        <b-col cols="12" class="center-text">{{descriptionOfWorkout}}</b-col>
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
    <vue-simple-context-menu
      ref="menu"
      elementId="context-menu"
      :options="contextMenuOptions"
      @option-clicked="optionClicked"
    ></vue-simple-context-menu>
  </b-container>
</template>
<script>
import { BContainer, BCard, BCol, BRow } from "bootstrap-vue";
import { mapState } from 'vuex'
const contextMenuOptionsEnum = Object.freeze({
edit:"Edit",
delete:"Delete",
});
export default {
  name: "WorkoutViewer",
  components: { BContainer, BCard, BCol, BRow },
  computed: mapState({
    isOwner: function(state){ return state.username === this.$route.params.username}
  }),
  methods: {
    openContextMenu(event) {
      this.$refs.menu.showMenu(event);
    },
    optionClicked(event) {
      switch (event.option.name) {
        case contextMenuOptionsEnum.edit:
          this.edit();
          break;
        case contextMenuOptionsEnum.delete:
          this.delete();
          this.$refs.menu.hideMenu();
          break;
      }
    },
    edit() {
      this.$router.push({ path: `/WorkoutCreator/${this.$route.params.username}/${this.$route.params.workoutName}`})
    },
    delete(){
      this.$axios.workout().delete(`/WorkoutPlan/${this.$route.params.workoutName}`).then(()=>{
        this.$store.dispatch('removeWorkoutPlan',
          {name:this.$route.params.workoutName});
       this.$router.push({ path:'/workout'})})
    },
    makepublic(){

    }
  },
  mounted: function() {
    this.$axios
      .workout()
      .get(
        `/WorkoutPlan/${this.$route.params.username}/${this.$route.params.workoutName}`
      )
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
      contextMenuOptions: [{ name: contextMenuOptionsEnum.edit }, { name: contextMenuOptionsEnum.delete }],
      rowsOfWorkout: [],
      descriptionOfWorkout: null,
      nameOfWorkout: null
    };
  }
};
</script>
<style lang="scss" scoped>
.vue-simple-context-menu {
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  display: none;
  list-style: none;
  position: absolute;
  z-index: 1000000;
  background-color: white;
  border: 1px solid #e7e7e7;
  border-radius: 2px;

  &--active {
    display: block;
  }

  &__item {
    display: flex;
    cursor: pointer;
    padding: 5px 15px;
    align-items: center;

    &:hover {
      background-color: #efefef;
    }
  }
  li {
    &:first-of-type {
      margin-top: 4px;
    }

    &:last-of-type {
      margin-bottom: 4px;
    }
  }
}
svg {
  max-width: 30px;
  float: right;
  opacity: 0.5;
  cursor: pointer;
}
svg:hover {
  opacity: 0.7;
}
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