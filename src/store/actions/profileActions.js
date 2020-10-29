import { PROFILE_LOADING, LOAD_PROFILE, PROFILE_ERROR } from "./types";
import firebase from "../../config/firebase";
import { downloadFile } from "../../utils/apiRequests";

export const loadProfile = () => async (dispatch) => {
  try {
    dispatch({ type: PROFILE_LOADING });

    const response = await firebase.database().ref("profile").once("value");
    let profile = response.val();

    for (let file in profile.files) {
      const fileUrl = await downloadFile(profile.files[file].path);
      profile.files[file].url = fileUrl;
    }

    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error.code,
    });
    console.log(error);
  }
};
