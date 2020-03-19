export const actions = {
    updateAccountInfo: function({
        commit,
        state,
        dispatch
    })  {
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
    updateToken: function({
        commit,
        state,
        dispatch
    },) {
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
    userIsInRole: ({
        state
        }, role) => state.roles !== undefined ?
        state.roles.some(x => x === role) : false
}