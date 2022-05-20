# Password Generator 

## My password generator is created to generate a random password that meets the user requirements.  To accomplish this, I need to add the following criteria:

-Button will prompt a questions to the user
-Upon answer, prompt for additional clarifying questions, upon answer, must include one of each true answer:
    -how many characters
    -uppercase
    -lowercase
    -special characters
    -numbers
-Return random password meeting these criteria
-Ask to start again?
-Do we want to store in local setting?
-Do we want to be able to recall this data?

PsuedoCode Logic
windows alert: "How many characters?"
answer =x
windows alert: "uppercase?"
answer = (Yes or No)
if yes, 
random letter = Upper 
and next question
if no, do not include and next question
windows alert: "lowercase?"
answer (yes or No)
if yes, 
random letter = lower 
and next question
if no, do not include and next question
windows alert: "include numbers?"
answer (yes or No)
if yes, 
random number = Numbers 
and next question
if no, do not include and next questionwindows alert: "special characters?"
answer (yes or No)
if yes, 
random character = special 
and next question
if no, do not include and next question

Add each response in random order, x # of times, until x number of characters is reached

each response must return in a random order and include a random character so i need a loop until the max (x) number is reached.

answer = password

