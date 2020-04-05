export const actions = {
    updateAccountInfo: function ({
        commit,
        state,
        dispatch
    }) {
        if (state.jwtToken !== undefined) {
            return this._vm
                .$axios
                .account()
                .get('/AccountInfo')
                .then( r => {
                    commit('lastUpdatedAccountInfo', Date.now());
                    commit('username', r.data.username);
                    commit('roles', r.data.roles);
                    return Promise;
                })
                .catch(() => {
                    dispatch('logOut')
                });
        } else {
            return dispatch('logOut')
        }
    },
    getBackLog: function ({
        state,
        commit
    }) {
        if (state.backLog == undefined ||
            state.lastUpdatedBackLog == undefined ||
            state.lastUpdatedBackLog < Date.now() - 180 * 60 * 1000) {
            return this._vm
                .$axios
                .workout()
                .get('/Workout')
                .then(x => {
                    commit('backLog', x.data);
                    commit('lastUpdatedBackLog', Date.now())
                    return state.backLog;
                })
        } else {
            return Promise.resolve(state.backLog);
        }
    },
    getScheduledWorkouts: function ({
        state,
        commit
    }) {
        if (state.scheduledWorkouts == undefined ||
            state.lastUpdatedScheduledWorkouts == undefined ||
            state.lastUpdatedScheduledWorkouts < Date.now() - 180 * 60 * 1000) {
            return this._vm
                .$axios
                .workout()
                .get('/WorkoutSchedule')
                .then(x => {
                    commit('scheduledWorkouts', x.data);
                    commit('lastUpdatedScheduledWorkouts', Date.now());
                    return state.scheduledWorkouts;
                })
        }
        return Promise.resolve(state.scheduledWorkouts);
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
                    commit('lastUpdatedToken', Date.now());
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
        commit('workoutPlans', undefined);
        commit('workoutPlansLastUpdate', undefined);
        commit('workoutPlans', undefined);
        commit('lastUpdatedToken', undefined);
        commit('lastUpdatedAccountInfo', undefined);
        commit('lastUpdatedScheduledWorkouts', undefined);
        commit('scheduledWorkouts', undefined);
        commit('backLog', undefined);
        commit('lastUpdatedBackLog', undefined);
        commit('workoutPlanView', undefined);
        commit('workoutPlanViewUpdate', undefined);
    },
    getExercises: function ({
        state,
        commit
    }) {
        if (state.exercisesLastUpdated === undefined ||
            state.exercisesLastUpdated < Date.now() - 8 * 60 * 60 * 1000 ||
            state.exercises === undefined) {
            return this._vm.$axios
                .workout()
                .get("/Exercise")
                .then(
                    x => {
                        commit('exercisesLastUpdated', Date.now());
                        commit('exercises', x.data.map(y => {
                            return {
                                value: y.id,
                                label: y.name
                            };

                        }));
                        return state.exercises;
                    });
        }
        return Promise.resolve(state.exercises);
    },
    getMoods: function ({
        state,
        commit
    }) {
        if (state.moods === undefined ||
            state.lastUpdatedMoods === undefined ||
            state.lastUpdatedMoods < Date.now() - 8 * 60 * 60 * 1000) {
            return this._vm.$axios
                .workout()
                .get("/Mood")
                .then(x => {
                    commit('moods', x.data.map(y => {
                        return {
                            value: y.id,
                            label: y.name
                        };
                    }));
                    commit('lastUpdatedMoods', Date.now())
                    return state.moods;
                });
        }
        return Promise.resolve(state.moods);
    },
    getFatigues: function ({
        state,
        commit
    }) {
        if (state.fatigues === undefined ||
            state.lastUpdatedFatigues === undefined ||
            state.lastUpdatedFatigues < Date.now() - 8 * 60 * 60 * 1000) {
            return this._vm.$axios
                .workout()
                .get("/Fatigue")
                .then(x => {
                    commit('fatigues', x.data.map(y => {
                        return {
                            value: y.id,
                            label: y.name
                        };
                    }));
                    commit('lastUpdatedFatigues', Date.now())
                    return state.fatigues;
                });
        }
        return Promise.resolve(state.fatigues);
    },
    removeWorkoutPlan: function ({
        state,
        commit,
        dispatch
    }, entity) {
        dispatch('updateWorkoutPlanViewState', {
            username: state.username,
            workoutName: entity.name,
            data: undefined
        })
        if (state.workoutPlansLastUpdate == undefined ||
            state.workoutPlansLastUpdate < Date.now() - 8 * 60 * 60 * 1000 ||
            state.workoutPlans == undefined) {
            this._vm.$axios
                .workout()
                .get("/WorkoutPlan")
                .then(x => {
                    commit('workoutPlans', x.data);
                    commit('workoutPlansLastUpdate', Date.now())
                    return state.workoutPlans;
                })
        } else {
            for (var i = 0; i < state.workoutPlans.length; i += 1) {
                if (state.workoutPlans[i].name == entity.name) {
                    state.workoutPlans.splice(i, 1)
                    return;
                }
            }
        }
    },
    updateWorkoutPlans: function ({
        state,
        commit
    }, entity) {
        if (state.workoutPlansLastUpdate == undefined ||
            (state.workoutPlansLastUpdate < Date.now() - 8 * 60 * 60 * 1000) ||
            state.workoutPlans == undefined) {
            this._vm.$axios
                .workout()
                .get("/WorkoutPlan")
                .then(x => {
                    commit('workoutPlans', x.data);
                    commit('workoutPlansLastUpdate', Date.now());
                    return state.workoutPlans;
                })
        } else {
            state.workoutPlans.push(entity);
            commit('workoutPlans', state.workoutPlans);
        }
    },
    getWorkoutPlans: function ({
        state,
        commit
    }) {
        if (state.workoutPlansLastUpdate == undefined ||
            state.workoutPlansLastUpdate < Date.now() - 2 * 60 * 60 * 1000 ||
            state.workoutPlans == undefined) {
            return this._vm.$axios
                .workout()
                .get("/WorkoutPlan")
                .then(x => {
                    commit('workoutPlans', x.data);
                    commit('workoutPlansLastUpdate', Date.now());
                    return state.workoutPlans;
                });
        }
        return Promise.resolve(state.workoutPlans)
    },
    updateWorkoutPlanViewState: function ({
        commit,
        state
    }, {
        username,
        workoutName,
        data
    }) {

        let workoutPlanView = state.workoutPlanView || {};
        workoutPlanView[username] = workoutPlanView[username] || {};
        let workoutPlanViewUpdate = state.workoutPlanViewUpdate || {};
        workoutPlanViewUpdate[username] = workoutPlanViewUpdate[username] || {};
        workoutPlanView[username][workoutName] = data;
        workoutPlanViewUpdate[username][workoutName] = Date.now();
        commit('workoutPlanView', workoutPlanView)
        commit('workoutPlanViewUpdate', workoutPlanViewUpdate)
    },
    getWorkoutPlanView: function ({
        state,
        dispatch
    },{ username, workoutName}) {
        if (state.workoutPlanViewUpdate == undefined ||
            state.workoutPlanViewUpdate[username] == undefined ||
            state.workoutPlanViewUpdate[username][workoutName] == undefined ||
            state.workoutPlanViewUpdate[username][workoutName] < Date.now() - 30 * 60 * 1000 ||
            state.workoutPlanView == undefined ||
            state.workoutPlanView[username][workoutName] == undefined ||
            state.workoutPlanView[username][workoutName] == undefined ||
            state.username != username) {
            return this._vm.$axios
                .workout()
                .get(
                    `/WorkoutPlan/${username}/${workoutName}`
                ).then(x => {
                    dispatch('updateWorkoutPlanViewState', {username: username, workoutName:workoutName, data:x.data})
                    return state.workoutPlanView[username][workoutName];
                });
        }
        return Promise.resolve(state.workoutPlanView[username][workoutName]);
    },
    userIsInRole: ({
            state
        }, role) => state.roles != undefined ?
        state.roles.some(x => x == role) : false
}