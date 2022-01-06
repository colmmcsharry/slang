/* eslint-disable no-undef */

// state
export const state = () => ({
    counter: 0
})


// getters
export const getters = {

}


// actions
export const actions = {
    async getUsers({commit}) {
        // hit api to get users
    //    const users = await axios.post("https://randomuser.me/api/?results=10")
        const users = await this.$axios.$post('https://randomuser.me/api/?results=10')
       commit('addUsers', users)
       return users
    }
}

// In your actions, when you create a function you need to add commit param, example:
// export const actions = {
//   changeTheme({ commit }, theme) {
//     commit('something', theme);
//   },
// };


// mutations
export const mutations = {
    increment(state) {
        state.counter++
    }
}