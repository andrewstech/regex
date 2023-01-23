const txtRegex = /^"(.*)"$/;

const txtRecord = "\"example text\"";

if (txtRegex.test(txtRecord)) {
    console.log("This is a valid TXT record.");
} else {
    console.log("This is not a valid TXT record.");
}
