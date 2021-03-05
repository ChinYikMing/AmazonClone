This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setting your firebase for the web app

Step 1: Go to visit firebase docs https://firebase.google.com/docs/web/setup#config-object (Follow step 2 and step 3) 

Step 2: Open src directory and then open firebase directory, you will see a file called config.js

Step 3: Replace the API_KEY, PROJECT_ID, SENDER_ID, APP_ID, MEASUREMENT_ID with the actual one of your web app that just newly created

Step 4: Go to your web app console, click the "Build" section in sidebar,click Authentication enable Email/Password and Google sign-in method

Step 5: In the same "Build" section in sidebar, click "Cloud Firestore" and then click "Start collection" with Collection ID: users, Document ID: click Auto-ID, Field 1: avatarUrl(string), Field 2: displayName(string), Field 3: email(string)

Step 6: Click the "Rules" besides the "Data", choose production mode and change "allow read, write: if false" to "allow read, write: if request.auth != null"

Last Step: Congrats! Now Follow the scripts and notes below and you are ready to go. Enjoy!

## Available Scripts

In the project directory, you can run:

### `npm install`

Install the node_modules for the web app dependencies

After this script, if you see "npm audit fix" to fix some vulnerabilities, please run "npm audit fix --force"

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Notes

Please make sure your running machine has following version of tools:
1. Node.js, v12.18.3 or above
2. npm, 6.14.11 or above
