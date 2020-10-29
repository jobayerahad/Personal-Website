import { LOAD_PROFILE, PROFILE_LOADING, PROFILE_ERROR } from "../actions/types";

const initialState = {
  about: {},
  banner: {},
  sidebar: {},
  loading: true,
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case PROFILE_LOADING:
      return { ...state, loading: true };

    case LOAD_PROFILE:
      return {
        ...state,
        banner: {
          cover: payload.files.cover.url,
          fullName: payload.fName,
          typicalTexts: payload.slogans,
        },
        about: { avatar: payload.files.profile.url, headline: payload.sText, brief: payload.brief },
        sidebar: {
          avatar: payload.files.profile.url,
          shortName: payload.sName,
          availability: payload.availability,
        },
        loading: false,
        error: null,
      };

    case PROFILE_ERROR:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
}
