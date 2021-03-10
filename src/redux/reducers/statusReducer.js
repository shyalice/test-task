const statusReducer = (state = {}, action) => {
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(action.type);
    if (!matches) return state;
    const [, requestName, requestState] = matches;
    return {
        ...state,
        [requestName]: !!action.error && !!action.error.status && 'error' === action.error.status ? 'error' : requestState.toLowerCase(),
        serverError: !!action.error && !!action.error.status && 'error' === action.error.status
    };
};

export default statusReducer;

export const createStatusSelector = (action) => (state) => {
    return !!state.status[action] ? state.status[action] : null;
};