// const { google } = require("googleapis");

// // Replace these with your credentials
// const oauth2Client = new google.auth.OAuth2(
//   "clientid",
//   "secret",
//   "redirecturk"
// );

// const SCOPES = ["https://www.googleapis.com/auth/calendar"];

// // Generate the authorization URL
// console.log("Authorize this app by visiting this URL:");
// console.log(
//   oauth2Client.generateAuthUrl({
//     access_type: "offline",
//     scope: SCOPES,
//     prompt: "consent", // Ensures the consent screen is shown
//   })
// );

// // Exchange authorization code for access and refresh tokens
// const code = "AUTHORIZATION_CODE"; // Replace with the code from the URL
// oauth2Client.getToken(code, (err, token) => {
//   if (err) {
//     console.error("Error retrieving access token", err);
//     return;
//   }
//   console.log("Access Token:", token.access_token);
//   console.log("Refresh Token:", token.refresh_token); // Should now be present
// });
