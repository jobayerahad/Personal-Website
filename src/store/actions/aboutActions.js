import { ABOUT_LOADING, LOAD_ABOUT, ABOUT_ERROR } from "./types";
import firebase from "../../config/firebase";
import { setAlert } from "./alertActions";
import { downloadFile } from "../../utils/apiRequests";

export const loadAbout = () => async (dispatch) => {
  try {
    dispatch({ type: ABOUT_LOADING });

    const response = await firebase.database().ref("about").once("value");
    let profile = response.val();

    // Download URL of the The file
    if (profile) profile.thumbnail = await downloadFile(profile.thumbnail);

    dispatch({
      type: LOAD_ABOUT,
      payload: profile,
    });
  } catch (error) {
    dispatch({
      type: ABOUT_ERROR,
      payload: error,
    });

    dispatch(setAlert("Something Went Wrong!", "error"));
  }
};
