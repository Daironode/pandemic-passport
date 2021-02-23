import actionTypes from './actionTypes';

const initialState = {
    user: {},
    currentSpaces: null,
};

export default (state = initialState, action) => {
    let { user } = state;
    const { type, payload } = action;
    let newState = false;

    switch (type) {


    }

    return newState || state;
}
