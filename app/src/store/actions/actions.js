export const actions = {
    updateAccountInfo: function ({
        commit,
        state,
        dispatch
    }) {
        if (state.jwtToken !== undefined) {
            this._vm
                .$axios
                .account()
                .get('/AccountInfo')
                .then(r => {
                    state.lastUpdatedAccountInfo = Date.now()
                    commit('username', r.data.username);
                    commit('roles', r.data.roles);
                })
                .catch(() => {
                    dispatch('logOut')
                });
        } else {
            dispatch('logOut')
        }
    },
    updateToken: function ({
        commit,
        state,
        dispatch
    }, ) {
        if (state.jwtToken !== undefined) {
            this._vm.$axios.account()
                .get("/Token")
                .then(t => {
                    state.lastUpdatedToken = Date.now()
                    commit('jwtToken', t.data.token);
                })
                .catch(() =>
                    dispatch('logOut')
                );
        } else {
            dispatch('logOut')
        }
    },
    logOut: ({
        commit
    }) => {
        commit('jwtToken', undefined);
        commit('username', undefined);
        commit('roles', undefined);
        commit('workoutPlans',undefined);
        commit('workoutPlansLastUpdate',undefined);
    },
    getExercises: function ({
        state
    }) {
        if (state.exercises === undefined) {
            return this._vm.$axios
                .workout()
                .get("/Exercise")
                .then(
                    x => {
                        state.exercises = x.data.map(y => {
                            return {
                                value: y.id,
                                label: y.name
                            };

                        })
                        return state.exercises;
                    });
        }
        return Promise.resolve(state.exercises);
    },
    getMoods: function ({
        state
    }) {
        if (state.moods === undefined) {
            return this._vm.$axios
                .workout()
                .get("/Mood")
                .then(x => {
                    state.moods = x.data.map(y => {
                        return {
                            value: y.id,
                            label: y.name
                        };
                    });
                    return state.moods;
                });
        }
        return Promise.resolve(state.moods);
    },
    getFatigues: function ({
        state
    }) {
        if (state.fatigues === undefined) {
            return this._vm.$axios
                .workout()
                .get("/Fatigue")
                .then(x => {
                    state.fatigues = x.data.map(y => {
                        return {
                            value: y.id,
                            label: y.name
                        };
                    });
                    return state.fatigues;
                });
        }
        return Promise.resolve(state.fatigues);
    },
    removeWorkoutPlan:  function ({
        state
    }, entity) {
        if (state.workoutPlansLastUpdate == undefined ||
            state.workoutPlansLastUpdate < Date.now() - 8 * 60 * 60 * 1000 ||
            state.workoutPlans == undefined) {
            this._vm.$axios
                .workout()
                .get("/WorkoutPlan")
                .then(x => {
                    state.workoutPlans = x.data;
                    state.workoutPlansLastUpdate = Date.now()
                    return state.workoutPlans;
                })
        } else {
                for(var i=0;i<state.workoutPlans.length;i+=1){
                    if(state.workoutPlans[i].name == entity.name){
                        state.workoutPlans.splice(i,1)
                        return;
                    }
                }
            }
    },
    updateWorkoutPlans: function ({
        state
    }, entity) {
        if (state.workoutPlansLastUpdate == undefined ||
            state.workoutPlansLastUpdate < Date.now() - 8 * 60 * 60 * 1000 ||
            state.workoutPlans == undefined) {
            this._vm.$axios
                .workout()
                .get("/WorkoutPlan")
                .then(x => {
                    state.workoutPlans = x.data;
                    state.workoutPlansLastUpdate = Date.now()
                    return state.workoutPlans;
                })
        } else {
                state.workoutPlans.push(entity);
            }
    },
    getWorkoutPlans: function ({
        state, commit
    }) {
        if (state.workoutPlansLastUpdate == undefined ||
            state.workoutPlansLastUpdate < Date.now() - 2 * 60 * 60 * 1000 ||
            state.workoutPlans == undefined) {
            return this._vm.$axios
                .workout()
                .get("/WorkoutPlan")
                .then(x => {
                    commit('workoutPlans',x.data);
        commit('workoutPlansLastUpdate',Date.now());
                    return state.workoutPlans;
                });
        }
        return Promise.resolve(state.workoutPlans)
    },
    userIsInRole: ({
            state
        }, role) => state.roles !== undefined ?
        state.roles.some(x => x === role) : false
}