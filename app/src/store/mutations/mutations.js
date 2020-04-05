export const mutations = {
  jwtToken: (state, token) => {
    state.jwtToken = token;
  },
  username: (state, username) => {
    state.username = username
  },
  roles: (state, roles) => {
    state.roles = roles
  },
  workoutPlans: (state, workoutPlans) => {
    state.workoutPlans = workoutPlans
  },
  workoutPlansLastUpdate: (state, workoutPlansLastUpdate) => {
    state.workoutPlansLastUpdate = workoutPlansLastUpdate
  },
  lastUpdatedAccountInfo: (state, lastUpdatedAccountInfo) => {
    state.lastUpdatedAccountInfo = lastUpdatedAccountInfo
  },
  lastUpdatedToken: (state, lastUpdatedToken) => {
    state.lastUpdatedToken = lastUpdatedToken
  },
  exercisesLastUpdated: (state, exercisesLastUpdated) => {
    state.exercisesLastUpdated = exercisesLastUpdated
  },
  exercises: (state, exercises) => {
    state.exercises = exercises;
  },
  moods: (state, moods) => {
    state.moods = moods;
  },
  fatigues: (state, fatigues) => {
    state.fatigues = fatigues
  },
  lastUpdatedFatigues: (state, lastUpdatedFatigues) => {
    state.lastUpdatedFatigues = lastUpdatedFatigues
  },
  lastUpdatedMoods: (state, lastUpdatedMoods) => {
    state.lastUpdatedMoods = lastUpdatedMoods
  },
  backLog: (state, backLog) => {
    state.backLog = backLog
  },
  lastUpdatedBackLog: (state, lastUpdatedBackLog) => {
    state.lastUpdatedBackLog = lastUpdatedBackLog;
  },
  scheduledWorkouts:(state, scheduledWorkouts) =>{
    state.scheduledWorkouts = scheduledWorkouts;
  },
  lastUpdatedScheduledWorkouts: (state, lastUpdatedScheduledWorkouts) =>{
    state.lastUpdatedScheduledWorkouts =lastUpdatedScheduledWorkouts;
  },
  workoutPlanView: (state, workoutPlanView) => {
    state.workoutPlanView = workoutPlanView;
  },
  workoutPlanViewUpdate: (state, workoutPlanViewUpdate) =>{
    state.workoutPlanViewUpdate = workoutPlanViewUpdate;
  }
};