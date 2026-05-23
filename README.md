# Tic Tac Toe

A sleek, responsive Tic Tac Toe game built with React. Features a dark glassmorphic UI with smooth animations, persistent score tracking across rounds, and a split-panel desktop layout.

**Live Demo:** https://www.himanshubalani.com/tictactoe

## Features

- **Two-player gameplay:** Classic X vs O, with per-round score tracking that persists across games so you can play a full session without losing the tally.
- **Win detection:** Winning squares highlight with a green glow animation. A status pill updates in real time to show whose turn it is, who won, or when a round ends in a draw.
- **Responsive layout:** On desktop, the info panel (title, status, scores, controls) sits on the left with the board on the right. On mobile, the layout stacks into a single column for easy thumb access.
- **Polished animations:** Pieces spring onto the board with a scale and rotate entrance. The active player's score card glows to make the current turn always clear at a glance.

## Technology Stack

- React (via Vite)
- Plain JavaScript (JSX)
- CSS-in-JS (scoped `<style>` tag, no external CSS framework)

## Local Setup

To run this project locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/himanshubalani/tictactoe.git
```

2. Navigate to the project directory:

```
cd tictactoe
```

3. Install the dependencies:

```
npm install
```

4. Start the local development server:

```
npm run dev
```

## Deployment

This project is configured to deploy directly to GitHub Pages using the `gh-pages` package. To deploy a new version to the live site, run:

```
npm run deploy
```

## Author

Designed and developed by [Himanshu Balani](https://www.himanshubalani.com/).  
Created as part of the Web Dev Cohort 2026.