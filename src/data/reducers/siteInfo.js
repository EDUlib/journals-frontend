import {
  STARTED_FETCHING_SITE_INFO,
  FINISHED_FETCHING_SITE_INFO,
  GET_SITE_INFO_SUCCESS,
  GET_SITE_INFO_FAILURE,
} from '../constants/actionTypes/siteInfo';

import configuration from '../../config/';

const siteInfo = (state = {
  username: '',
  userId: null,
  visitedPages: [],
  themeName: '',
  logo: '',
  serverBaseUrl: configuration.JOURNALS_BASE_URL,
  error: null,
  isAuthenticated: false,
  startedFetching: false,
  finishedFetching: false,
}, action) => {
  switch (action.type) {
    case GET_SITE_INFO_SUCCESS:
      return {
        ...state,
        username: action.siteInfo.user.username,
        userId: action.siteInfo.user.id,
        isAuthenticated: action.siteInfo.is_authenticated,
        visitedPages: action.siteInfo.visited_pages,
        themeName: action.siteInfo.theme_name,
        logo: action.siteInfo.logo,
        serverBaseUrl: action.siteInfo.server_url,
        error: null,
      };
    case GET_SITE_INFO_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.siteInfo.error,
      };
    case STARTED_FETCHING_SITE_INFO:
      return {
        ...state,
        startedFetching: true,
        finishedFetching: false,
      };
    case FINISHED_FETCHING_SITE_INFO:
      return {
        ...state,
        startedFetching: false,
        finishedFetching: true,
      };
    default:
      return state;
  }
};

export default siteInfo;