# Wordle

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
