const initialstate = {
  data: [],
  loading: false,
  error: false,
};

const course = (state = initialstate, action) => {
  switch (action.type) {
    case `GET_DATA_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `GET_DATA_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case `GET_DATA_REJECTED`:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
export default course;
