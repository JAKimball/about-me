# Lab 04: Pair Programming and Functions

Today will be your first exercise in pair programming. You will be assigned to work with a partner, and the two of you will work on and extend each other's About Me guessing game projects. Be sure to read and follow these instructions very carefully.

Equally divide your lab time so that you and your partner spend the same amount of time in each other's code. Time management is critical.

## Setup and Documentation

- In this lab, you will work with a pair to extend and refine each other's projects. Plan your time carefully to give each codebase an equal amount of the allotted lab time.

### Pair Programming Basics

* In pair programming, there are two developers working on a single body of code on a single computer.
* One member of the pair is the Driver, and this person will be the one doing all of the actual typing work on the laptop. The Driver will be working on the Navigator's code by way of forking and cloning the Navigator's repository.
* The other member of the pair is the Navigator, and this person will work with only their voice and their thoughts.
* The Navigator does not touch the keyboard, nor does the Navigator work on their laptop "on the side". The Navigator is fully engaged with the work that the pair is doing, typically using a piece of scratch paper to sketch diagrams, take notes, or list ideas. At most the Navigator uses their laptop to perhaps keep a copy of this assignment document open or to look up something needed to write the code, such as a reference page like MDN.
* Under no circumstances does the Navigator work on any code on their laptop: for the pair programming process to be effective, both parties must be fully engaged on the code they're working on together.
* The lab time should be divided into two sections of approximately two hours each. At the halfway mark, you should swap roles and work on the other person's code. Remember to watch the clock and determine the best point to swap roles.
* In the case of an odd number of students, one group will have three members and you should rotate through three roles: Driver, Navigator, Observer. Each person should take on each role one time. You will need to be even more mindful about watching the clock to ensure that equal time is devoted to all three projects.

## Feature Tasks

### How To Get Code Ready For Work

Be sure to follow these instructions **VERY** carefully.

Note: Before starting these steps, make sure that both of your repositories are 'clean': in other words, everything is committed and pushed so that both the remote and local versions of your projects are in sync. This will prevent potential problems later.

- Decide whose code you will work on first. The owner of that code (who will be the Navigator) provides the link to their GitHub repo to the other member of the pair (who will be the Driver). You can send this link over Slack, spell it verbally, or by carrier pigeon.

- The Driver follows the link to that repo and creates a fork of the repo in GitHub like we did in class.

- The Driver then goes to *their fork* of the repo (the URL should have the Driver's GitHub name in it) and copies the HTTPS link to that repo (the link have the Driver's GitHub name in it and should end in `.git`).

- Inside of the Driver's main work directory on their laptop, make a directory with your partner’s name and then navigate (`cd`) into it. From there, enter the command `git clone the-https-link-you-copied`. That will create a local version of the forked repo on the Driver's laptop.

- `cd` into that directory and enter `code .` in the terminal to open all of the files in VSCode.

- Start working on the code!

### Extend and Refine

- You'll be making some edits to each other's sites. After each bit of work is completed (in other words, after each successful modification of a single question), be sure to do an add-commit-push cycle (**a-c-p**) to place the code on GitHub and preserve a versioned history of your work.

- Move the logic for all questions into functions: Today we learned about functions, and now we'll move the logic for the individual questions into separate functions, and call those functions to run the game.

- In its most basic sense, this is pretty simple and straightforward: 'wrap' the logic and variables for a given question with `function someFuncNameYouChoose() {` at the beginning, and add a closing curly brace `}` at the end. To make the function execute, just call it afterwards: `someFuncNameYouChoose();` After completing this step the game should behave exactly as it did before. **a-c-p**

- Update the README file: In the README file, add in the names of the Driver and Navigator and indicate that the code was worked on together. This is basic record-keeping so that you can keep up with how the code has been edited in a user-friendly format. **a-c-p**

### Push to GitHub; Make a Pull Request

- Once everything is finished, and the Driver has done the last edits and pushed them to GitHub, it's time to send the edited code to the owner (who has been in the Navigator role the whole time, of course). We do this with a GitHub feature called a ***Pull Request***, which we generally refer to as a **PR**.

- From the Driver's repo that is a fork of the Navigator's repo, hit the green button that says 'Create pull request'.

- Follow the remaining steps as described onscreen and as shown here: https://help.GitHub.com/articles/using-pull-requests. (These instructions for doing a pull request from a forked repo to its source are deliberately vague, to give you practice in reading through instructions, trying things out, solving problems collaboratively, and getting guidance from documentation).

- The owner of the code (the Navigator) then goes to their GitHub repo for the project and accepts the pull request. After that, in terminal on their laptop, while in the game directory, enter the command 'git pull origin master' to retrieve the modified code from GitHub.

- When everything is finished for one person's project, submit the links for the last pull request made from the Driver to the Navigator (in both cases) in the Canvas assignment.

### Stretch Goals

1. Work from collections of like data: Create 3 arrays, one for each of: your questions, the correct answers, and the two possible responses. (The same applies if you've added in any other pieces to the questions besides the most basic structure.) Replace that content in the functions by accessing the arrays. 

1. Make it DRY: Reduce the yes/no questions from five functions to one function, and then use a 'for' loop to iterate through the arrays and call the function for each question.  

1. Code review: Take time to explore each other's CSS and talk about how it is organized and what it is doing. Make suggestions for how it can be improved. Integrate your partner's suggestions to improve your own styling.

1. Improve accessibility: Collaborate on achieving better scores on accessibility audits. Include a screenshot of your new audit score in your README.md file. 

## Submission Instructions

In the text box on this assignment, enter the URLs from the repos that you worked on in this format:

```
I was Navigator on: link-to-the-last-PR-your-partner-made
I was Driver on: link-to-the-last-PR-you-made-as-Navigator
```

Also, give a brief answer the following questions:

- How did the pair programming process go in general?
- Did you learn anything from your partner? If so, what?
- What was the most difficult part of the assignment today?
- What was the easiest part of the assignment today?
- Anything else you'd like to share?
- How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?
