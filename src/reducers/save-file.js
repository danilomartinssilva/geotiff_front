import { UPLOAD_FILE_AREA } from "constants/actions";

const INITIAL_STATE = {
  result: null,
};
export default saveFile = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPLOAD_FILE_AREA:
      return { name: "Danilo", idade: 29 };
    default:
      state;
  }
};
