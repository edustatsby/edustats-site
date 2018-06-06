const store = {
    state: {
        userName: 'Koster',
    },
    mutations: {
        changeUserName(state, newName) {
            state.userName = newName;
        }
    },
};

export default store;