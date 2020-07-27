import LoadComponent from "./load.component";
import { addRaster } from "../../../actions/raster-actions";
import { doUpload } from "../../../actions/save-file-actions";
import { connect } from "react-redux";
import { compose, withState, withHandlers } from "recompose";
import { showAlert } from "../../../actions/alert-actions";
import { saveFile } from "../../../services/UploadFileService";

// let urlToTiff = new URLSearchParams(window.location.search).get("url");
// if (urlToTiff) window.loadRaster(urlToTiff);

const urlIsValid = (url) => {
  return /^http|^https/.test(url);
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAlert: (message) => dispatch(showAlert(message)),
    addRaster: (input) => dispatch(addRaster(input)),
    doUpload: () => dispatch(doUpload()),
  };
};

export const loadState = compose(
  connect(null, mapDispatchToProps),
  withState("urlInput", "setURLInput", ""),
  withState("fileInput", "setFileInput", ""),
  withHandlers({
    updateURLInput: ({ setURLInput }) => (event) => {
      return setURLInput(event.target.value.trim());
    },
    updateFileInput: ({ setFileInput }) => (event) => {
      return setFileInput(event.target.files[0]);
    },
    safeFileAreaHandler: ({ urlInput, fileinput, showAlert }) => (event) => {
      console.log(urlInput);
    },

    loadRaster: ({ urlInput, fileInput, addRaster, showAlert }) => () => {
      return new Promise(async (resolve, reject) => {
        try {
          if (urlInput !== "") {
            if (urlIsValid(urlInput)) {
              await addRaster(urlInput);
              /*  if (window.confirm("Você realmente quer sair?")) {
               
              } */

              resolve(true);
            } else {
              showAlert(
                "Please make sure you are using a valid url. It must start with either http or https."
              );
            }
          } else if (fileInput !== "") {
            await addRaster(fileInput);
            if (window.confirm("Deseja salvar o arquivo?")) {
              await saveFile(fileInput);
            }

            resolve(true);
          } else {
            showAlert("Please add either a url or a geotiff file");
          }
        } catch (e) {
          showAlert(
            "The raster you tried to load is not a valid geotiff. Please try again with a different file."
          );
          reject();
        }
      });
    },
  })
);

const LoadContainer = compose(loadState)(LoadComponent);

export default LoadContainer;
