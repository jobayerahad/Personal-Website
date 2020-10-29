import {
  PORTFOLIO_LOADING,
  GET_PORTFOLIO_CATEGORY,
  GET_PORTFOLIOS,
  PORTFOLIO_ERROR,
} from "../actions/types";

const initialState = {
  loading: true,
  portfolio: null,
  portfolios: [],
  categories: [],
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case PORTFOLIO_LOADING:
      return { ...state, loading: true };

    case GET_PORTFOLIOS:
      return { ...state, portfolios: payload && payload, loading: false, error: null };

    case GET_PORTFOLIO_CATEGORY:
      return { ...state, categories: payload && payload, loading: false, error: null };

    case PORTFOLIO_ERROR:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
}
