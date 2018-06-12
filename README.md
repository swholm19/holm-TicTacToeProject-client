
Technology Used:
HTML, CSS w/ Bootstrap, JavaScript, JSON, AJAX, and jQuery

Process:
Started out by making very basic simple wireframe in HTML so i had buttons i
could manipulate and check to make sure they were working the way i was intending.

Next i worked on all authentication Behavior (sign-up, sign-in, change-password,
sign-out). I first created curl scripts to validate that the API was working,
then i created the event-listener, the AJAX api call, and then the UI for both
a succesfull and not succesfull response.

Once authentication was done, i worked on the gameboard. I first started by
creating the event-listner that told me what box the user had selected. Once i
finished that i created the game logic that checked if it was a winner. Next
i created the logic that validated that a user could actually play (example:
they clicked a open box, game wasnt already won, or game was a draw). Then i
implemented the UI, so the user knew what was going on with the game.

After I created the curl scripts for communciation with the API to create and
update the gameboard. Once that was working where it made sense i added a
function in the game logic that called the API to create if it was the first
time or update if it was any susequent move after the first.

Once the authentication and game were working with the API. I started the
displaying of the player statistics. I created the curl-scripts to test the
API to make sure i could GET information. Then i created the HTML to house this
information. Then the event-listner, which then called the API to get the
informaiton. Once i had the information i created different functions to
collect the differnet information i was trying to display. Once i had the
information i created the UI manipulation to show the information to the user.

After all the functinality was built in, I started doing the page styling
to make sure there was a common theme across the page and that it all looked
goood.

After the page was looking good, i implemented 3 different user views. Depending
on where the user was different information would be displayed. For example
if you are not logged in you cant see the gameboard or the sign out option.

The last thing i did was play with the game and fix any bugs or change and odd
behavior that i saw to make sure the game was as intuitive as possible and
give the user the best gaming experience possible.


Odd Behavior:
