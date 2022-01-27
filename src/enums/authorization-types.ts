/**
 * Authorization Types
 * */
enum AuthorizationTypes {
  None = 0,
  NoAuth = 1,
  BearerToken = 2,
  BasicAuth = 3,
  DigestAuth = 4,
  OAuth1_0 = 5,
  OAuth2_0 = 6,
  NTLM = 7,
}

export default AuthorizationTypes;
