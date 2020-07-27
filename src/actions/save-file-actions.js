import { UPLOAD_FILE_AREA } from "constants/actions";
import Axios from "axios";
import ApiService from "../services/ApiService";
import { getUser } from "../services/auth";
const user = !!getUser() && JSON.parse(getUser());

export const doUpload = (file) => {
  console.log("Arquivo chegou", file);
  return (dispatch) => {
    const formData = new FormData();
    formData.append("geotifFile", file);
    formData.append("user_id", user.id);
    console.log("FormData", formData);
    return Axios.post(`http://192.168.100.85:3010/create-file-area`, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    }).then((retorno) => {
      console.log("Retorno", retorno);
    });
  };
};

export const listAreas = () => {
  return (dispatch) => {
    return ApiService.get(`list-areas?user_id=${user.id}`);
  };
};
