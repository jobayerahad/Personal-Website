import { BLOG_LOADING, GET_BLOGS, BLOG_ERROR } from "./types";
import firebase from "../../config/firebase";
import { firebaseToUiStrArr } from "../../utils/dataConversion";
import { downloadFile } from "../../utils/apiRequests";

export const getBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: BLOG_LOADING });

    const snapshot = await firebase.database().ref("blog/list").once("value");

    const blogs = [];
    snapshot.forEach((childSnapshot) => {
      const blog = childSnapshot.val();

      // modify categories object to array for UI
      blog.categories = firebaseToUiStrArr(blog.categories);

      blogs.push({ key: childSnapshot.key, ...blog });
    });

    // Looping blogs for downloading images
    for (let i = 0; i < blogs.length; i++)
      blogs[i].thumbnail = await downloadFile(blogs[i].thumbnailRef);

    dispatch({
      type: GET_BLOGS,
      payload: blogs,
    });
  } catch (error) {
    dispatch({
      type: BLOG_ERROR,
      payload: error,
    });
  }
};
