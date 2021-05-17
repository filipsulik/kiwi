## How to install

go to the kiwi/server folder then,

1) ### `npm install`
2) ### `npm run migrate`
   this creates the database with Words table inside
3) ### `npm run seed`
    this fills the table with english words
4) ### `npm run start`
   this starts the server and connects the database

now go to kiwi/client folder

1) ### `npm install`
2) ### `npm run start`

now the app runs on port 3000

## How to use

Now you can input digits into the input either using your keyboard,
or the UI keyboard. Once you input some digits the app will suggest
real english words + all combinations that can be made from the digits
you supplied. The strings that are not real words can be saved as real words
using the "+ add to dictionary" button. Once some strings are saved as
real words they will always be shown as real, because they get saved to
database as real words. You can click on any suggested string to render it as a text.


## go ahead try to input 5494