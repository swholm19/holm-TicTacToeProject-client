
Technology Used:
HTML, CSS, Bootstrap-Sass, JavaScript, JSON, AJAX, and jQuery

Process:
Started out by making very basic wireframe in HTML so i had buttons i
could manipulate and check to make sure they were working the way i was
intending.

Next i worked on all authentication behavior (sign-up, sign-in, change-password,
sign-out). I first created curl scripts to validate that the API was working,
then i created the event-listener, the AJAX api call, and then the UI for both
a succesful and not succesful response.

Once authentication was done, i worked on the gameboard. I first started by
creating the event-listner that told me what box the user had selected. Once i
finished that i created the game logic that checked if it was a winner. Next
i created the logic that validated that a user could actually play (example:
they clicked a open box, game wasnt already won, or game wasnt a draw). Then i
implemented the UI, so the user knew what was going on with the game.

After that I created the curl scripts for communciation with the API to create
and update the gameboard. Once that was working where it made sense i added a
function in the game logic that called the API to create if it was the first
time or update if it was any subsequent move after the first.

Once the authentication and game were working with the API. I started the
displaying of the player statistics. I created the curl-scripts to test the
API to make sure i could GET information. Then i created the HTML to house this
information. Then the event-listner, which then called the API to get the
information. Once i had the information i created different functions to
collect the differnet information i was trying to display. Once i had the
information i wanted, i created the UI manipulation to show the information
to the user.

After all the functinality was built in, I started doing the page styling
to make sure there was a common theme across the page and that it all looked
good.

After the page was looking good, i implemented 3 different user views. Depending
on what stage the user was at different information would be displayed.
For example if you are not logged in you cant see the gameboard or the sign
out option.

The last thing i did was play with the game and fix any bugs or change any odd
behavior that i saw to make sure the game was as intuitive as possible and
give the user the best gaming experience possible.


Odd Behavior/ Future Work:
-Browser Sizing, if the screen size gets to small the rendering gets all wonky
and boxs start to overlap and shift weirdly.
-If user has hundreds of game in the database it take a couple seconds for
the players statistics to load.
-In future iterations would like to make seeing the player statistics
completely automated where the player would never need to click to update
the information.

User Stories:
1) As a user, i want to be able to login so that i can play tic-tac-toe.
2) As a user, i want to be able to reset the gameboard so that i can play
another game.
3) As a user, i want to be told the final result so that i dont have to tell
my friend he lost.
4) As a user, i want to be able to click on the gameboard to put my peice there
so that i am able to play the game.
5) As a user, i want to be able to sign out so that no one else can use my
account.
6) As a user, i want the game to automatically switch between the users when
playing so that we dont accidentially play for each other.

Initial Paper WireFrame: https://imgur.com/a/dfYG4wn
