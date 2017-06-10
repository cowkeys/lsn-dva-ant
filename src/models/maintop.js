
export default {

    namespace: 'maintop',

    state:{
        conns:0,
    },

    reducers: {
        conns(state, { payload: { conns=0 } }) {
            return { ...state,conns };
        },
    },
    effects: {},
};


