import { SETTINGS_LOADING, LOAD_SOCIAL_LINKS, SETTINGS_ERROR } from "./types";
import firebase from "../../config/firebase";

export const loadSocialLinks = () => async (dispatch) => {
  try {
    dispatch({ type: SETTINGS_LOADING });

    const reference = await firebase.database().ref("settings/socialLinks").once("value");

    dispatch({
      type: LOAD_SOCIAL_LINKS,
      payload: reference.val(),
    });
  } catch (error) {
    dispatch({
      type: SETTINGS_ERROR,
      payload: error,
    });
  }
};
