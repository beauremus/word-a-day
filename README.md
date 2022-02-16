# Word-a-Day

## Running the game

```bash
npm start
```

## Strategy

Default to native browser tools unless there's a justification for an outside tool.

## Justifications

### TypeScript

Type checking and static analysis is a good thing. While it may have a cost in development, it will save time in debugging and give confidence in stability.

## Basic definition of game play

- [ ] A random five letter word is selected.
- [ ] The player has six guesses to guess the selected word.
- [ ] When the player guesses the word, the game is over.
- [ ] If the player runs out of guesses, the game is over.
- [ ] After each guess, the player is given feedback on if the guessed word shares letters with the selected word.
- [ ] After each guess, the player is given feedback on if the guessed word shares the position letters with the selected word.

## Project requirements

- [ ] Use Node.js and Express.js to create a RESTful API.
- [ ] Use a template engine such as Handlebars.js.
- [ ] Use MySQL and the Sequelize ORM for the database.
- [ ] Have both GET and POST routes for retrieving and adding new data.
- [ ] Deploy using Heroku (with data).
- [ ] Use at least one new library, package, or technology that we haven’t discussed.
- [ ] Have a polished UI.
- [ ] Be responsive.
- [ ] Be interactive (i.e., accept and respond to user input).
- [ ] Must have a folder structure that meets the MVC paradigm.
- [ ] Must include authentication (cookies and express-session).
- [ ] Must protect API keys and sensitive information with environment variables.
- [ ] Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
- [ ] Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
