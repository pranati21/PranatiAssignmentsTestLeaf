let browserName="Safari"
function launchBrowser(browserName) {
    
    if(browserName=="Chrome"){
        console.log("Browser Name is Chrome")
    }
    else if(browserName=="Safari"){
        console.log("Browser Name is Safasri")
    }
    else
        console.log("Browser Name is Edge ")

    
}
let testType="Regression"
function runTests(testType) {
    
    switch (testType) {
        case "Sanity":
            console.log("Your test type is Sanity Test")
            break;
        case "Smoke":
            console.log("Your test type is Smoke Test")
            break;
        case "Regression":
            console.log("Your test type is Regression Test")
            break;

        default:
            console.log("Your test type is Smoke Test")
            break;
    }
}
//call funstions
launchBrowser(browserName)
runTests(testType)
