import { SETTINGS_LOADING, LOAD_SOCIAL_LINKS, SETTINGS_ERROR } from "../actions/types";

const initialState = {
  socialLinks: {},
  loading: true,
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SETTINGS_LOADING:
      return { ...state, loading: true };

    case LOAD_SOCIAL_LINKS:
      return { ...state, socialLinks: payload && payload, loading: false, error: null };

    case SETTINGS_ERROR:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
}
