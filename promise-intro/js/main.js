// Normal functions
console.log("######### Normal function ########");

function checkApproval(isApproval) {
    if (isApproval) {
        return "It's approved"
    } else {
        return "It's NOT approved"
    }
}

console.log('Success: ' + checkApproval(true)); 
console.log('Error: ' + checkApproval(false)); 


// Rewrite formatting the message above, to its own funcitons
function logSuccessMessage(message) {
    console.log('Success: ' + message); 
}
function logErrorMessage(message) {
    console.log('Error: ' + message); 
}

let message = checkApproval(true);
logSuccessMessage(message);
message = checkApproval(false);
logErrorMessage(message);



// Rewrite the above code to callbacks
// The arguments 'successMessageCallback' / 'errorMessageCallback' are functions of their own
// That gets sent in and gets called within the function 'checkApprovedWithCallbacks'
console.log("######### Callbacks ########");
function checkApprovedWithCallbacks(
    isApproval, 
    successMessageCallback, 
    errorMessageCallback
) {
    if (isApproval) {
        successMessageCallback("It's approved");
    } else {
        errorMessageCallback("It's NOT approved");
    }
}

checkApprovedWithCallbacks(
    false,
    function(message) {
        console.log('Success: ' + message)
    },
    function(message) {
        console.log('Error: ' + message)
    }
)

// Work with predefined callback functions
checkApprovedWithCallbacks(
    true,
    logSuccessMessage,
    logErrorMessage
)


// We have already worked with callbacks before, with the DOM object
// document.getElementById('something').addEventListener('click', function() {
//     // This code is sent in through a callback function
// })






// Rewrite the above example with Promises()
// It's used to determine an outcome. Depending if a condition got met or not
// Similar to a promise in real life, determines an outcome. Either it got fulfilled (resolve) or broken (reject)
console.log("######### Promise ########");
// function checkApprovedWithPromise(isApproved) {
//     return new Promise( (resolve, reject) => {
//         if (isApproved) {
//             resolve("It's approved");
//         } else {
//             reject("It's NOT approved");
//         }
//     })
// }

// checkApprovedWithPromise(false)
// .then((message) => { 
//     /* Code executed if resolved */ 
//     console.log('Success: ' + message)
// })
// .catch((message) => { 
//     /* Code executed if rejected */ 
//     console.log('Error: ' + message)
// })

// The JS script keeps running

console.log("######### Promise with non-primitive datatypes such as array/object ########");
function checkApprovedWithPromise2(isApproved) {
    return new Promise( (resolve, reject) => {
        if (isApproved) {
            resolve({
                code: 200, //HTTP code, means OK
                message: "It's approved"
            });
        } else {
            reject({
                code: 403, //HTTP code, means Forbidden
                message: "It's NOT approved"
            });
        }
    })
}

checkApprovedWithPromise2(true)            // Calling the promise
.then((response) => { 
    /* Code executed if resolved */ 
    console.log('Success code: ' + response.code);
    console.log('Success message: ' + response.message);
})
.catch((error) => { 
    /* Code executed if rejected */ 
    console.log('Error code: ' + error.code);
    console.log('Error message: ' + error.message);
})
.finally(() => {
    console.log("The finally-block is used when something is needed to be done regardless of the outcome")
});




console.log('%cWhy is this message shown before, and not after "checkApprovalWithPromise2"', 'color:green;');
console.log('%cBecause Promises are one of the ways we can deal with asynchronous operations in JavaScript. The operation dosent have to complete before executing the next line. Asynchronous means its executed parallell to the rest of the script.', 'color:green;');