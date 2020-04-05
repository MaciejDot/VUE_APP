<template>
  <b-container>
    <h1>Create Workout Execution</h1>
    <b-card class="white-card">
      <b-row>
        <b-col cols="12">
          <b-form-group label="Name Of Workout" label-for="name">
            <b-form-input
              id="name"
              placeholder="Enter Name of workout..."
              v-model="nameOfWorkout"
              style="height:35px;"
              type="text"
              :disabled="workoutEdition"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Description" label-for="descriptionWorkout">
            <b-form-textarea
              id="descriptionWorkout"
              v-model="descriptionOfWorkout"
              placeholder="Enter description..."
              rows="3"
              max-rows="6"
              :disabled="workoutEdition"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Choose Date of your workout" label-for="datepicker">
            <b-form-datepicker id="datepicker" v-model="dateOfWorkout" class="mb-2"></b-form-datepicker>
          </b-form-group>
        </b-col>
      </b-row>
    </b-card>
    <draggable
      v-model="rowsOfWorkout"
      :noTransitionOnDrag="true"
      :options="{disabled: editingIndex != -1}"
      @start="drag=true"
      @end="drag=false"
    >
      <b-card class="white-card draggable-card" v-for="(row, index) in rowsOfWorkout" :key="index">
        <div v-if="editingIndex==index">
          <b-row>
            <b-col cols="12" sm="6" md="4" lg="3">
              <b-form-group label="Exercise" label-for="exercise">
                <v-select
                  id="exercise"
                  placeholder="Select Exercise..."
                  v-model="exerciseRow.selectedExercise"
                  :options="exercises"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" sm="6" md="4" lg="3">
              <b-form-group label="Description" label-for="description">
                <b-form-input 
                  id="description"
                  placeholder="Enter description..."
                  v-model="exerciseRow.description"
                  style="height:35px;"
                  type="text"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" sm="6" md="4" lg="3">
              <b-form-group label="Reps" label-for="minReps">
                <b-form-spinbutton min="0" max="9999"
                  id="minReps"
                  v-model="exerciseRow.reps"
                  style="height:35px;"
                  type="number"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" sm="6" md="4" lg="3">
              <b-form-group label="Additional Kgs" label-for="minAdd">
                <b-form-spinbutton min="-9999" max="9999"
                  id="minAdd"
                  v-model="exerciseRow.additionalKgs"
                  style="height:35px;"
                  type="number"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" sm="6" md="4" lg="3">
              <b-form-group label="series" label-for="series">
                <b-form-spinbutton min="0" max="9999"
                  id="series"
                  v-model="exerciseRow.series"
                  style="height:35px;"
                  type="number"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" sm="6" md="4" lg="3">
              <b-form-group label="breaks (in s.)" label-for="breaks">
                <b-form-spinbutton min="0" max="9999"
                  id="breaks"
                  v-model="exerciseRow.break"
                  style="height:35px;"
                  type="number"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" sm="6" md="4" lg="3">
              <div class="empty-label-place" />
              <b-button
                :disabled="!validExercise(exerciseRow)"
                class="white-button"
                variant="white"
                @click="saveRow(index)"
              >Save Row</b-button>
            </b-col>
          </b-row>
        </div>
        <div v-else>
          <svg viewBox="0 0 90 90" @click.prevent.stop="openContextMenu($event, index)">
            <path
              d="m 13 45 a 1 1 0 0 0 15 0 a 1 1 0 0 0 -15 0 z m 25 0 a 1 1 0 0 0 15 0 a 1 1 0 0 0 -15 0 z m 25 0 a 1 1 0 0 0 15 0 a 1 1 0 0 0 -15 0 z "
            />
          </svg>
          <div class="break" />
          <b-row>
            <b-col cols="12" sm="6" md="4" lg="3">
              <b-form-group label="Exercise">{{row.selectedExercise.label}}</b-form-group>
            </b-col>
            <b-col cols="12" sm="6" md="4" lg="3">
              <b-form-group label="Description">{{row.description}}</b-form-group>
            </b-col>
            <b-col cols="12" sm="6" md="4" lg="3">
              <b-form-group label="Reps/Seconds">{{row.reps}}</b-form-group>
            </b-col>
            <b-col cols="12" sm="6" md="4" lg="3">
              <b-form-group label="Additional Kgs">{{row.additionalKgs}}</b-form-group>
            </b-col>
            <b-col cols="12" sm="6" md="4" lg="3">
              <b-form-group label="series">{{row.series}}</b-form-group>
            </b-col>
            <b-col cols="12" sm="6" md="4" lg="3">
              <b-form-group label="breaks (in s.)">{{row.break}}</b-form-group>
            </b-col>
          </b-row>
        </div>
      </b-card>
    </draggable>
    <b-card v-if="editingIndex==-1" class="white-card">
      <b-row>
        <b-col cols="12" sm="6" md="4" lg="3">
          <b-form-group label="Exercise" label-for="exercise">
            <v-select
              id="exercise"
              placeholder="Select Exercise..."
              v-model="exercise.selectedExercise"
              :options="exercises"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3">
          <b-form-group label="Description" label-for="description">
            <b-form-input 
              id="description"
              v-model="exercise.description"
              placeholder="Enter description..."
              style="height:35px;"
              type="text"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3">
          <b-form-group label="Reps/Seconds" label-for="minReps">
            <b-form-spinbutton min="0" max="9999" id="minReps" v-model="exercise.reps" style="height:35px;" type="number" />
          </b-form-group>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3">
          <b-form-group label="Additional Kgs" label-for="minAdd">
            <b-form-spinbutton min="-9999" max="9999"
              id="minAdd"
              v-model="exercise.additionalKgs"
              style="height:35px;"
              type="number"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3">
          <b-form-group label="series" label-for="series">
            <b-form-spinbutton min="0" max="9999" id="series" v-model="exercise.series" style="height:35px;" type="number" />
          </b-form-group>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3">
          <b-form-group label="breaks (in s.)" label-for="breaks">
            <b-form-spinbutton min="0" max="9999" id="breaks" v-model="exercise.break" style="height:35px;" type="number" />
          </b-form-group>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3">
          <div class="empty-label-place" />
          <b-button
            :disabled="!validExercise(exercise)"
            class="white-button"
            variant="white"
            @click="addExercise"
          >add to workout</b-button>
        </b-col>
      </b-row>
    </b-card>
    <b-card class="white-card">
      <b-row>
        <b-col cols="12" sm="6" md="4" lg="3">
          <b-form-group label="Mood after" label-for="mood">
            <v-select id="mood" placeholder="Mood..." v-model="mood" :options="moods" />
          </b-form-group>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3">
          <b-form-group label="Fatigue Level after" label-for="fatigue">
            <v-select id="fatigue" placeholder="Fatigue..." v-model="fatigue" :options="fatigues" />
          </b-form-group>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="3">
          <b-button class="white-button" variant="white" @click="saveWorkout">Save Workout Execution</b-button>
        </b-col>
      </b-row>
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
import draggable from "vuedraggable";
import {
  BRow,
  BCol,
  BContainer,
  BFormInput,
  BFormGroup,
  BButton,
  BFormDatepicker,
  BFormSpinbutton,
  BFormTextarea
} from "bootstrap-vue";
import VSelect from "vue-select";
export default {
  name: "WorkoutExecution",
  components: {
    VSelect,
    BRow,
    BCol,
    BContainer,
    BFormInput,
    BFormGroup,
    BButton,
    BFormTextarea,
    BFormDatepicker,
     BFormSpinbutton,
    draggable
  },
  props: {workoutName:{},username:{}},
  mounted: function() {
    Promise.all([
      this.$store.dispatch("getFatigues"),
      this.$store.dispatch("getMoods"),
      this.$store.dispatch("getExercises")
    ])
      .then(response => {
        this.fatigues = response[0];
        this.moods = response[1];
        this.exercises = response[2];
      })
      .then(() => {
        if (this.username !== undefined) {
          this.$axios
            .workout()
            .get(
              `/Workout/${this.username}/${this.workoutName}`
            )
            .then(response => {
              let data = response.data;
              this.workoutEdition = true;
              this.nameOfWorkout = data.name;
              this.descriptionOfWorkout = data.description;
              this.dateOfWorkout = data.dateOfWorkout;
              this.mood = {
                value: data.mood,
                label: this.moods.find(x => x.value == data.mood).label
              };
              this.fatigue = {
                value: data.fatigue,
                label: this.fatigues.find(x => x.value == data.fatigue).label
              };
              this.rowsOfWorkout = data.exercises.map(x => {
                return {
                  selectedExercise: {
                    label: x.name,
                    value: x.exerciseId
                  },
                  reps: x.reps,
                  additionalKgs: x.additionalKgs,
                  description: x.description,
                  break: x.break,
                  series: x.series
                };
              });
            })
            .catch(() => {
              this.$router.push({ path: "/404" });
            });
        }
      });
  },
  methods: {
    deleteRow(index) {
      this.rowsOfWorkout.splice(index, 1);
    },
    editRow(index) {
      this.exerciseRow = { ...this.rowsOfWorkout[index] };
      this.editingIndex = index;
    },
    saveRow(index) {
      this.rowsOfWorkout[index] = { ...this.exerciseRow };
      this.editingIndex = -1;
    },
    validExercise(exercise) {
      return exercise.selectedExercise != null;
    },
    saveWorkout() {
      let order = 0;
      if (!this.workoutEdition) {
        this.$axios
          .workout()
          .post(`/Workout`, {
            name: this.nameOfWorkout,
            description: this.descriptionOfWorkout,
            dateOfWorkout: this.dateOfWorkout,
            mood: this.mood.value,
            fatigue: this.fatigue.value,
            exercises: this.rowsOfWorkout.map(x => {
              order += 1;
              return {
                exerciseId: x.selectedExercise.value,
                reps: parseInt(x.reps),
                additionalKgs: x.additionalKgs,
                description: x.description,
                break: parseInt(x.break),
                series: x.series,
                order: order
              };
            })
          })
          .then(() => {
            this.$router.push({ path: "/workout" });
          })
          .catch(() => {
            alert("Unsuccessful");
          });
      } else {
        this.$axios
          .workout()
          .patch(`/Workout/${this.workoutName}`, {
            dateOfWorkout: this.dateOfWorkout,
            mood: this.mood.value,
            fatigue: this.fatigue.value,
            exercises: this.rowsOfWorkout.map(x => {
              order += 1;
              return {
                exerciseId: x.selectedExercise.value,
                reps: parseInt(x.reps),
                additionalKgs: x.additionalKgs,
                description: x.description,
                break: parseInt(x.break),
                series: x.series,
                order: order
              };
            })
          })
          .then(() => {
            this.$router.push({ path: "/workout" });
          })
          .catch(() => {
            alert("Unsuccessful");
          });
      }
    },
    openContextMenu(event, index) {
      this.$refs.menu.showMenu(event, { index: index });
    },
    optionClicked(event) {
      switch (event.option.name) {
        case "Edit":
          this.editRow(event.item.index);
          this.$refs.menu.hideMenu();
          break;
        case "Delete":
          this.deleteRow(event.item.index);
          this.$refs.menu.hideMenu();
          break;
      }
    },
    addExercise() {
      if (this.validExercise(this.exercise)) {
        this.rowsOfWorkout.push({ ...this.exercise });
      }
    }
  },
  data: () => {
    return {
      fatigues: [],
      fatigue: 0,
      moods: [],
      mood: 0,
      contextMenuOptions: [{ name: "Edit" }, { name: "Delete" }],
      rowsOfWorkout: [],
      exercises: [],
      workoutEdition: false,
      exerciseRow: {
        selectedExercise: null,
        reps: 0,
        additionalKgs: 0,
        description: null,
        break: 0,
        series: 0
      },
      exercise: {
        selectedExercise: null,
        reps: 0,
        additionalKgs: 0,
        description: null,
        break: 0,
        series: 0
      },
      dateOfWorkout: null,
      descriptionOfWorkout: null,
      nameOfWorkout: null,
      editingIndex: -1
    };
  }
};
</script>
<style lang="scss">
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
.white-button {
  border-radius: 4px;
  border: 1px solid #e7e7e7;
  padding-top: 4px;
  padding-bottom: 5px;
  width: -webkit-fill-available;
}
.white-button:hover {
  border: 1px solid #e7e7e7;
  background-color: #efefef;
}
.white-card {
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  margin: 10px;
  color: black;
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
.draggable-card {
  cursor: pointer;
}
.break {
  height: 50px;
}
.empty-label-place {
  height: 24px;
  margin-bottom: 0.5rem;
}
</style>