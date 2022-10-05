# Morse Code Translator

## Intro

In this project we had to create a simple website with the ability to translate from English to Morse Code and vice-versa.

### Skills

-   JavaScript
-   HTML
-   SCSS

### Challenges

# MVP

-   Create a user interface that allows the user to either input some English text or some Morse Code
-   Create JS functions that would allow the user to:
    -   translate their English text into Morse Code
    -   Morse Code into English text
-   Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters)
-   Make sure to keep your pure functions separated from the JS DOM interaction code.

### Tasks

1. Add const object for the translation codex (an object that holds all letters as properties with their morse code values assigned to them)
2. Add a function that acccepts a string and returns the morse code equivalent
    - split string into array
    - reduce the array but have it run the morse conversion returning the value into the accumulator
3. Create HTML file
    - Make a title
    - Add instructional text
    - Add text input field
    - Add submit button
    - Add result area to display the output or errors
    - Link JavaScript to HTML
4. Add DOM references
    - save each element needed to a const variable (i.e. Sumbit button, input text field, output text field)
    - Add listener to button so that it will start the conversion function
    - Display output of conversion to the output text area, or display an error if needed
5. Create SCSS and CSS files
    - Make it look pretty
