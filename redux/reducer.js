const initialState = {
  counter: 0,
  icc: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD":
      return { ...state, counter: state.counter + 1 };

    case "ADD_ICC":
      return {
        ...state,
        icc: [
          ...state.icc,
          {
            name: payload.name,
            cycle: payload.cycle,
            semecters: payload.semecters,
            unities: payload.unities,
            groups: payload.groups,
          },
        ],
      };

    default:
      return state;
  }
};
