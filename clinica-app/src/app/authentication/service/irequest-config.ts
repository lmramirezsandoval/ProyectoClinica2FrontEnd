export interface IRequestConfig {
  headers: {
    CONTENT_TYPE: string;
    WWW_FORM_URLENCODED: string;
    APPLICATION_JSON: string;
    AUTHORIZATION: string;
    IF_MODIFIED_SINCE: string;
    IF_MODIFIED_SINCE_DEFAULT: string;
    NO_CACHE_DEFAULT: string;
    CACHE_CONTROL: string;
    PRAGMA: string;
  };
  storage: {
    AUTHENTICATION: string;
  };
  cookies: {
    ACTIVE_COOKIE: string;
    USER_ID: string;
    SESSION_ID: string;
    SESSION_KEY: string;
    SESSION_TOKEN: string;
  };
}
