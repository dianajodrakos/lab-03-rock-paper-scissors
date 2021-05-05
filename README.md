## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

- HTML - 3 radio inputs labelled with img, results div
- JS
    - state to track
        - CPU throw, wins, rounds
    - event: image click
        1. increment round
        1. generate random throw using `getRandomThrow` function
        1. get user throw
        1. eval winner of round using `didUserWin` function
        1. output results to DOM
        1. reset document for next round