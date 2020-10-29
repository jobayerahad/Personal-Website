import { SERVICE_LOADING, GET_SERVICES, SERVICE_ERROR } from "../actions/types";

const initialState = {
  services: [],
  loading: true,
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SERVICE_LOADING:
      return { ...state, loading: true };

    case GET_SERVICES:
      return { ...state, services: payload && payload, loading: false, error: null };

    case SERVICE_ERROR:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
}
