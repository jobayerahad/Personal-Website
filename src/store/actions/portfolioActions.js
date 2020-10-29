import firebase from "../../config/firebase";
import {
  PORTFOLIO_LOADING,
  GET_PORTFOLIOS,
  GET_PORTFOLIO_CATEGORY,
  PORTFOLIO_ERROR,
} from "./types";
import { downloadFile, downloadFiles } from "../../utils/apiRequests";
import { firebaseToUiStrArr, firebaseToUiStr } from "../../utils/dataConversion";

export const getPortfolios = () => async (dispatch) => {
  try {
    dispatch({ type: PORTFOLIO_LOADING });

    const snapshot = await firebase.database().ref("portfolio/list").once("value");

    const portfolios = [];
    snapshot.forEach((childSnapshot) => {
      const portfolio = childSnapshot.val();

      // modify category object to array for UI
      portfolio.category = firebaseToUiStr(portfolio.category);

      // modify skills object to array for UI
      portfolio.skills = firebaseToUiStrArr(portfolio.skills).join(", ");

      portfolios.push({ key: childSnapshot.key, ...portfolio });
    });

    // Looping portfolios for downloading images
    for (let i = 0; i < portfolios.length; i++) {
      // getting thumbnail & additional Url for display purpose
      portfolios[i].photos.thumbnail = await downloadFile(portfolios[i].photos.thumbnail);
      portfolios[i].photos.additional = downloadFiles(portfolios[i].photos.additional);
    }

    dispatch({
      type: GET_PORTFOLIOS,
      payload: portfolios,
    });
  } catch (error) {
    dispatch({
      type: PORTFOLIO_ERROR,
      payload: error,
    });
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    dispatch({ type: PORTFOLIO_LOADING });
    const snapshot = await firebase.database().ref("portfolio/categories").once("value");

    const categories = [];
    snapshot.forEach((childSnap) => {
      categories.push({ key: childSnap.key, ...childSnap.val() });
    });

    dispatch({
      type: GET_PORTFOLIO_CATEGORY,
      payload: categories,
    });
  } catch (error) {
    dispatch({
      type: PORTFOLIO_ERROR,
      payload: error,
    });
  }
};
