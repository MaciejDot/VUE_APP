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
    },
    getExercises: function({state}){
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
    getMoods: function({state}){
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
    getFatigues: function({state}) {
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
    userIsInRole: ({
            state
        }, role) => state.roles !== undefined ?
        state.roles.some(x => x === role) : false
}