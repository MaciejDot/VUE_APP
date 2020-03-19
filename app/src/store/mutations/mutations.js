export const mutations = {
    jwtToken: (state, token) => {
      state.jwtToken = token;
    },
    username: (state, username) => {
      state.username = username
    },
    roles: (state, roles) =>{
      state.roles = roles
    }
  };