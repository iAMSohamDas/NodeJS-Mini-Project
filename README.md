# NodeJS-Mini-Project

Add note -> Requires user to enter Title and Body of the note and adds the note to our databse (json file)
Remove note -> Requires user to enter the Title of the note they want to remove and removes that note
List notes ->Lists the title of all the notes present
Read note -> Requires user to enter the title of the note they want to read and displays the body of that note on the terminal

If a user tries to add a note whose title is already taken then an error message in red should print on the terminal (“Title already taken!”)

ADD COMMAND - node app.js add  --title "note" --body "hello world"
REMOVE COMMAND - node app.js remove  --title "note"

LIST COMMAND - node app.js list
READ COMMAND - node app.js read --title "note"

