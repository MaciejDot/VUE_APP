export const  getters = {
    jwtToken: state => state.jwtToken,
    username: state => state.username,
    roles: state => state.roles,
    logged: state => state.jwtToken !== undefined
  }