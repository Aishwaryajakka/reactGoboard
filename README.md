# React Go Board (without the Rules Implemented)

Name : Aishwarya Jakka <br>

Email: aij12@pitt.edu

## Assignment - React a Go Board - Description

The goal of this assignment is to create a functional Go board using React.
This means you will create an interactive, graphical user interface using HTML, CSS, and JavaScript that allows two people to play Go in the browser.
You are not required or expected to implement the logic of Go the game.
Rather, you must implement the characteristics and constraints of a physical Go board with rules that
enforce the rules of an actual Go board (not allowing players to place two stones on an intersection).<br>

You should implement React components, handlers, and state that behave like a physical Go board.
A physical Go board does not enforce any of the rules of the game, it merely provides a surface for placing stones at intersections.
Like Go in the physical world the calculations for keeping score at the end of the game will be done by human beings. <br>

To start, you should read about the history (Links to an external site.) and rules of Go
(Links to an external site.). You will need to understand the rules of the game,
even if you are not required to implement them. It is best to think through how the game is played on a physical board and then use
that to guide the design of your virtual Go board.<br>

#### Your React Go board application should have the following:

1. A grid that is at least 9x9 squares. 19x19 is the standard size. You might also consider designing a variable Grid, but this is not required.
2. The ability to place either a black or white stone at the intersections of the grid when the intersection is clicked.
3. Some kind of turn taking so players can alternate placing black or white stones. You will also need to implement the ability to pass a turn without placing a stone.
4. Some kind of mechanism for removing "captured" stones. For example, clicking a stone to remove it and maybe tracking the number of stones that have been removed.
5. An UNDO function that lets you reverse any moves in the game.

#### You are not being asked to implement the rules of the game. This means:

1. No capture detection
2. No territory calculations
3. No deep learning AI based automation that takes over the world
4. Before you jump into writing code, think about the architecture of your React application.

#### Document your design decisions by considering the following questions:

1. What are the various components you need to manage the application? What are all the various user interface elements?<br>

2. What information is needed by which components? Does the information change? How does information flow between components? Will you manage this using props or state?<br>

3. What are the interactions between the user and the interface? What are the interactions between components?<br>

4. You should use Bootstrap CSS (Links to an external site.) for styling your components. This means use Bootstrap buttons or widgets. <br>
   You should also consider using the Bootstrap grid system for making your Go board grid.<br>

##### Your assignment does not need to be responsive and you don’t need to use every aspect of Bootstrap in your Go board implementation<br>

# My React Go board design

## Components

I have 3 components - Board, Game and Square. I have remixed base template of the Tic tac toe tutorial.

My board is 19 x 19 size.

## Game

The Game component is the most essential component of the application and contains almost all of the state and handler functions for the board game.

### State Management

The game component handles the turn taking, when a piece has been captured, history that handles that undo and when turn has been passed.

Game has constructor has 5 state items:

1. history: which is an array of arrays called 'squares' of length 361 that is initialized to be filled with 'null' values.
   The indexes of the 'squares' array correspond to the 19x19 square components laid out in board.
   This array can be filled with null values that represent an empty square with no piece, '●' values that represent a black piece has been placed, and '○' values
   that represent a white piece has been placed.

2. isNext: which is a string variable that stores the turn of the player . It is either '●' or '○'
3. black : which represents how many black pieces have been captured or removed from the board.
4. white : which represents how many white pieces have been captured or removed from the board.
5. stepNumber: The number of steps in the game.

### Functions/Handler Functions

Other than render, the Game component has 4 key functions that allow the various functionalities of the game

1. handleClick: It is used to manage the state of the Game component and is called when a Sqaure component is clicked.
   Handle click accepts an argument 'i'(index of the sqaure). It manages history, current, and square variables .

2. Undo : This function reverses the moves

3. Pass: This function just changes the turn state of the game component from 'Black' to 'White' or 'White' to 'Black'.

4. Remove: This function captures the stones placed on the board. This function updates the state

5. Reset : Which resets all the constructor state items to it's initial state

### Render

The render function renders all of the interface elements of the game.
It handles the interface to the pass function, undo function and remove function. It handles the onClick() as well.

## Board

The Game component is the most essential component of the application and contains almost all of the state and handler functions for the board game.

### State Management

This component has no state. To manage the history of the game, the states is present in the <b>Game</b> component.

### Functions/Handler Functions

This component has one function "renderSquare()".

This function passes the props representing aspects of state from Game into the square components when clicked.
This function accepts an argument 'i' that is then passed into a prop called value as this.props.squares[i]
It is what allows the square to know whether it is empty or occupied by a 'black' or 'white' piece as this.props.squares[i]
will either be ''●' or '○'. It also accepts a property onClick which the argument 'i' is passed to (on click is a property passed from the Game
rendering a <b>board</b> object.

### Render

The render function creates the grid as the interface. I have used bootstrap container to automatically resize accordingly.

## Squares

The Square component is similar to the tic tac toe tutorial . This is a functional component that has no state but accepts a props value.
The props value is rendered on the board at the intersection when it is called by the renderSquares function by the Board component.

### State Management

As noted, there is no state managed. This is a stateless component.

### Functions/Handler Functions

The function is just the function that returns the button square when it is rendered on the board through the renderSquare function.

### Render

There is no render function because square is rendered through a function in the board component.

## Bootstrap

I have implemented bootstrap on the grid, header, buttons using a color that complements its functionality and list that shows the instructions about the game

## Alterations

1. With Ben's help I tried use a loop to render the board rows but wasn't successful. This would be one change I would like to make.
2. I would like to alter this code to use a stack implementation which i think would be an interesting way to do history
3. I would like to make the board size dynamic. I tried doing it but i had trouble with it.

##### I really enjoyed this assignment. It really helped me understand the react in pretty well.
