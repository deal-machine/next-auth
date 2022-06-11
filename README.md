# next-auth
Next JS project to apply authentication

Explain Access Token and Refresh Token :information_source:

## Access token :key:
  - used into requests to check user and session
  - have a minimum duration
  - it's dangerous if token save critical informations and have a long duration
## Refresh token :recycle:
  - used to update access token time expiration without the login necessity
  - have a long duration 
