import axios from "axios";
import { CONTACT_LOADING, SEND_MESSAGE, CONTACT_ERROR } from "./types";
import firebase from "../../config/firebase";
import { setAlert } from "./alertActions";

export const sendMessage = (formData, token) => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_LOADING });

    // Checking the request sent by a bot
    const response = await axios.get(
      `${process.env.REACT_APP_FIREBASE_CLOUD_FUNCTION_URL}/app/api/recaptcha?token=${token}`
    );

    const human = response.data;
    if (human) {
      const snapshot = await firebase.database().ref("contact").push(formData);

      dispatch({
        type: SEND_MESSAGE,
        payload: { key: snapshot.key, ...formData },
      });

      dispatch(setAlert("Message Sent!", "success"));
    } else dispatch(setAlert("Looks like you're a bot!", "error"));
  } catch (error) {
    dispatch({
      type: CONTACT_ERROR,
      payload: error,
    });
  }
};
