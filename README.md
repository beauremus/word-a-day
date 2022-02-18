# Word-a-Day

## Running the game

```bash
npm start
```

## Strategy

Default to native browser tools unless there's a justification for an outside tool.

### Value added

Wordle is missing the community competition of something like WordsWithFriends.
Leader boards with ranks and scores are missing. MVP will be a global leader board.
The Leader boards will have all-time, weekly, and daily scores.

### Future ideas

- [ ] Create leagues for select players to compete against each other.

## Justifications

### TypeScript

Type checking and static analysis is a good thing. While it may have a cost in development, it will save time in debugging and give confidence in stability.

### Pug

Requirement for project 2.

## Project requirements

- [ ] Use Node.js and Express.js to create a RESTful API.
- [x] Use a template engine such as Handlebars.js. - Pug
- [ ] Use MySQL and the Sequelize ORM for the database.
- [ ] Have both GET and POST routes for retrieving and adding new data.
- [ ] Deploy using Heroku (with data).
- [x] Use at least one new library, package, or technology that we haven’t discussed. - Typescript, Pug
- [ ] Have a polished UI.
- [ ] Be responsive.
- [ ] Be interactive (i.e., accept and respond to user input).
- [x] Must have a folder structure that meets the MVC paradigm.
- [ ] Must include authentication (cookies and express-session).
- [ ] Must protect API keys and sensitive information with environment variables.
- [ ] Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
- [ ] Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
