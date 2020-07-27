import {
  LOAD_AREAS_REQUEST,
  LOAD_AREAS_SUCCESS,
  LOAD_AREAS_FAILED,
} from "constants/actions";
const INITIAL_STATE = {
  result: [],
  error: undefined,
  isBusy: false,
};
const areas = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_AREAS_SUCCESS:
      return { ...state, result: action.areas, isBusy: false };
    case LOAD_AREAS_FAILED:
      return { ...state, result: [], isBusy: false };
    default:
      return state;
  }
};

export default areas;
