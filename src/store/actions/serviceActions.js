import { SERVICE_LOADING, GET_SERVICES, SERVICE_ERROR } from "./types";
import firebase from "../../config/firebase";
import { downloadFile } from "../../utils/apiRequests";

export const getServices = () => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_LOADING });

    const snapshot = await firebase.database().ref("services").once("value");

    const services = [];
    snapshot.forEach((childSnapshot) => {
      services.push({ key: childSnapshot.key, ...childSnapshot.val() });
    });

    // Looping services for downloading images
    for (let i = 0; i < services.length; i++)
      services[i].thumbnail = await downloadFile(services[i].thumbnail);

    dispatch({
      type: GET_SERVICES,
      payload: services,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_ERROR,
      payload: error.code,
    });
  }
};
