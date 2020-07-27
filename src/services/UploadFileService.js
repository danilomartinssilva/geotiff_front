import api from "./ApiService";

export const saveFile = (input) => {
  console.log("Recebeu arquivo", input);
  return (dispatch) => {
    const formData = new FormData();
    formData.append("geotifFile", input);
    console.log("fORMdATA", formData);
    return api
      .post("/uploads", {
        body: formData,
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((retorno) => {
        console.log("Retorno", retorno);
        dispatch({
          type: UPLOAD_FILE_AREA,
        });
      })
      .catch((err) => {
        console.log("Erro", err);
      });
  };
};
