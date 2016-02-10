### WDI_NYC_36_FUNKE

# Let's Create a Shell Game!

![Shell game and cat](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2L-3nfFsTsQtoeeN4XGFheORdbLpmAH6eU3lbpeYSK9AR1EGn)

## How to play the game
In the shell game, three or more identical containers (which may be cups, shells, coconut shells, etc.) are placed face-down on a surface.
A small ball or coin is placed beneath one of these containers so that it cannot be seen, and they are then shuffled by the operator in plain view.
One or more players are invited to bet on which container holds the ball .
Where the game is played honestly, the operator can win if he shuffles the containers in a way which the player cannot follow.
See this website for an example: http://mistupid.com/games/shellgame.htm

## User Stories

1. The user should be able to see where the 'ball' is originally.
2. The user should be able to start the shuffling sequence and follow (even if it's difficult) the card/coconut/cup. The shuffling should be random.
3. The user should be able to then click a card, and the game should tell them whether or not they picked the correct one.
4. the user should be able to reset game and do it all over again.

## How do we get the 'shuffle' animation?

One of the simpler animation effects is the fade. If you fade out two cards and then fade them back in, you can create a way to visualize two cards switching.

A harder method (and easier on the eyes) is using transitions. Think about the location you want for each card and how to 'swap' these locations.

## Bonuses and Extras

- The user should be able to see how many times s/he has won.
- The amount of times the cards swap on a shuffle is randomized.
- The more times the user completes the game, the harder it gets (the faster the shuffle).

## Before you start writing code...

1. Write out the objects you think you'll need.
2. For each object, list its responsiblities.  What data will it need to store?  What methods will it need?
3. List all possible object-to-object interactions.
4. Draw a 'paper prototype' of the DOM model for your game.  You'll use this to build it.
