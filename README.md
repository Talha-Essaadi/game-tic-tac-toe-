## Game Logic Breakdown
```sh
Board Setup

The board is a 3x3 grid = 9 cells.

Each cell can contain: 'X', 'O', or be empty.

Turn-Based Play

Player X and O alternate turns.

On each turn, the player places their mark on an empty cell.

Win Checking

After every move, check if the player has 3 in a row in:

Any of 3 rows

Any of 3 columns

Any of 2 diagonals

There are 8 possible winning combinations.

Draw Checking

If all 9 cells are filled without any winner, it’s a draw.

Restart Game

Clear all cells and reset turn tracker to restart the game.
```

## Fonts :
```css
.text {
    font-family: "Permanent Marker" , cursive;
}

```

# 🎮 Tic Tac Toe Game

A simple **Tic Tac Toe** game built with **HTML**, **CSS**, and **JavaScript**. Two players take turns marking the spaces in a 3×3 grid with X or O. The first to align three symbols in a row, column, or diagonal wins the game.

---

## 🚀 Features

- 🧠 Two-player game logic
- 📱 Responsive layout
- 🎨 Clean and minimal UI
- 🔁 Restart button
- ✅ Win and draw detection

---

## 📁 Project Structure

```sh

tic-tac-toe/
│
├── index.html              # Main landing page
├── /assets/                # Static assets (images, icons, fonts)
│   ├── /images/
│   └── /icons/
│   ├── /fonts/
├── /styles/                # CSS files
│   ├── /pages/
|   |   ├── home-page.css
|   │   ├── login.css
│   ├── main.css
│   ├── variables.css
│   └── responsive.css
├── /scripts/               # JavaScript files
│   └── main.js
├── /components/            # Optional HTML snippets (e.g., navbar, footer)
│   ├── navbar.html
│   └── footer.html
└── README.md               # This file


```

---

## 🛠️ Technologies Used

- **HTML** – Structure
- **CSS** – Styling and layout
- **JavaScript** – Game logic (turns, win/draw, restart)

---

## 🎯 How to Use

1. **Clone or Download** the repository.
2. Open `index.html` in any modern browser.
3. Play the game — X and O take turns.
4. Click "Restart" to play again.

---

## 📷 Preview

![Game Screenshot](https://via.placeholder.com/500x300?text=Tic+Tac+Toe+Preview)

[Link Text](https://talha-essaadi.github.io/game-tic-tac-toe-/)
---

## 📌 To Do / Possible Improvements

- 🎮 Add single-player mode (AI)
- 🔊 Add sound effects
- 💾 Save scores in local storage


---

## 📄 License

This project is open-source and free to use for learning purposes.

---

## 🙋‍♂️ Author

**Talha Essaadi**  
talhaessaadi@gmail.com


```

---

