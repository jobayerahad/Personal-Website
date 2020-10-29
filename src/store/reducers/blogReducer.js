import { BLOG_LOADING, GET_BLOGS, BLOG_ERROR } from "../actions/types";

const initialState = {
  blogs: [],
  loading: true,
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case BLOG_LOADING:
      return { ...state, loading: true };

    case GET_BLOGS:
      return { ...state, blogs: payload && payload, loading: false, error: null };

    case BLOG_ERROR:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
}
