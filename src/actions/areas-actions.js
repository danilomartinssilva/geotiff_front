import {
  LOAD_AREAS_FAILED,
  LOAD_AREAS_SUCCESS,
  LOAD_AREAS_REQUEST,
} from "../constants/actions";

export const loadAreasRequest = () => {
  return {
    type: LOAD_AREAS_REQUEST,
  };
};
export const loadAreasSuccess = (areas) => {
  console.log("Areas", areas);
  return {
    type: LOAD_AREAS_SUCCESS,
    areas: areas,
  };
};
export const loadAreasFailed = (error) => {
  return {
    type: LOAD_AREAS_FAILED,
    error: error,
  };
};
