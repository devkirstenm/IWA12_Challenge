// objective: there's 3 different books, you must modify the code to enable/disable the buttons based on the books status and change the color of the status indicator text according to the value in the STATUS_MAP object

// STATUS_MAP object in JS is used to determine the button and text color for each books status. It contains 4 different book types that ahve their own color and boolean properties that determine whether the reserve, checkout, or check-in buttons can be enabled for that particular status. 
const STATUS_MAP = { 
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
// book 1
/* STEP 1 
 * the code selects the elements from the HTML document that are needed to enable or disable the buttons, by using querySelector to select the elements based on their IDs and class names.
*/

const book1Status = document.querySelector('#book1 .status'); // must have space in between as they represent different parts of the selector. '.status' is element you select within the specific ID "#book1" 
const book1ReserveButton = document.querySelector('#book1 .reserve');
const book1CheckOutButton = document.querySelector('#book1 .checkout');
const book1CheckInButton = document.querySelector('#book1 .checkin');

/* STEP 2
 * use the book's status to enable/disable the buttons by referring to the rules in the 'STATUS_MAP' object
 *
*/

const book1StatusValue = book1Status.innerText; // we retrieve the value of the 'innerText' property of the book1Status element
const book1StatusConfig = STATUS_MAP[book1StatusValue]; // 'config' refers to a collection of settings just as there are in the STATUS_MAP 
// When we look at a book's status (such as "Available" or "Overdue"), we need to know which buttons should be enabled or disabled. For example, if a book is "Checked Out", we might want to disable the "Reserve" button and the "Check Out" button, but enable the "Check In" button. To determine which buttons should be enabled or disabled for a given status, we use the STATUS_MAP object. 
// '.disabled' is a boolean property that determines whether a button should be disabled or not. It's used to enable or disable a button element in HTML. If "true" = button disabled, if "false" button is enabled
// '!' is used to negate a boolean value (make opposite)
// the .canReserve and others etc. are names taken from the STATUS_MAP
book1ReserveButton.disabled = !book1StatusConfig.canReserve; 
book1CheckOutButton.disabled = !book1StatusConfig.canCheckOut;
book1CheckInButton.disabled = !book1StatusConfig.canCheckIn;

/* STEP 3 - set color of status text based on value in the STATUS_MAP object at the top
*/
book1Status.style.color = book1StatusConfig.color

// BOOK 2
const book2Status = document.querySelector('#book2 .status');
const book2ReserveButton = document.querySelector('#book2 .reserve');
const book2CheckOutButton = document.querySelector('#book2 .checkout');
const book2CheckInButton = document.querySelector('#book2 .checkin');

const book2StatusValue = book2Status.innerText;
const book2StatusConfig = STATUS_MAP[book2StatusValue];

book2ReserveButton.disabled = !book2StatusConfig.canReserve
book2CheckOutButton.disabled = !book2StatusConfig.canCheckOut
book2CheckInButton.disabled = !book2StatusConfig.canCheckIn

book2Status.style.color = book2StatusConfig.color


// BOOK 3
const book3Status = document.querySelector('#book3 .status');
const book3ReserveButton = document.querySelector('#book3 .reserve');
const book3CheckOutButton = document.querySelector('#book3 .checkout');
const book3CheckInButton = document.querySelector('#book3 .checkin');

const book3StatusValue = book3Status.innerText;
const book3StatusConfig = STATUS_MAP[book3StatusValue];

book3ReserveButton.disabled = !book3StatusConfig.canReserve
book3CheckOutButton.disabled = !book3StatusConfig.canCheckOut
book3CheckInButton.disabled = !book3StatusConfig.canCheckIn

book3Status.style.color = book3StatusConfig.color



