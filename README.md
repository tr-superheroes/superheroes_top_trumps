# 🤖 Superheroes Top Trumps 🤖

by Subha 🦸, Smitha 🦸 and Annette 🦸
version 1.0 (updated 9/1/24)

🦇 🦇 🦇 🦇 🦇 🦇 🦇

## 🦸 Introduction 🦸

We have used the Superheroes api For the game to have information related to the cards we used the free Superheros public api https://superheroapi.com/index.html to generate 7 cards for the user player and the same number of cards for the Robot Player. The api response enables the creation of 7 superhero cards assigned at random to each player. The user then chooses a powerstat in a card and plays that card, triggering the computer to play one of the cards by comparing the same powerstat. The higher value of the powerstat wins that round, or if they are the same it is a draw. The totals of the 7 rounds played are added up to calculate a winner.

## 🦇 Frontend Design 🦇

BEM notation (Yandex 2009), is a CSS naming convention designed to keep CSS understandable and scaleable by avoiding naming conflicts and specificity wars. Creating CSS "Blocks" keeps code modular and re-usable, reducing the amount of code we have to write. BEM stands for Block Element Modifier. Less (https://lesscss.org/#overview), or Leaner Style Sheets is a language extension for CSS. We have used both BEM and Less for the css in this project.

## 🦸‍♂️ Frontend Logic and Components 🦸‍♂️

The game container holds the game logic and passes data to individual components to render the data on the top layer of the card.

##  🤖 Backend Logic 🤖

A request to the public api with a superhero id, returns a json file with details related to that superhero. The backend application checks for the validity of the information received from the public api and returns the requested number of unique superhero cards with just the id, name, powerstats,image information for each superhero. For every request, random ids are generated and hence every request will return a different set of cards. 

## 👉 How to use

👉 Run `npm install` on the root directory and then navigate into client and do the same.

👉 Create a .env file under the server folder with  ACCESS_TOKEN variable set to the number generated at https://superheroapi.com/index.html

👉 Run npm start at root of project and both server and client will start.

## The React application ✨

`Vite` - [Vite](https://vitejs.dev/guide/) has been used to develop this project.

👉 the ROOT `package.json`has been edited to: `"start-client": "cd client && npm run dev"`.

💡 The `client/package.json` has a script to enable opening of your browser automatically when you start the app using `npm run start-client`.

💡 You can use the following Health check endpoints to ensure the server is working correctly: "http://localhost:8080/health".

🦇 🦇 🦇 🦇 🦇 🦇 🦇 
