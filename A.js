const aRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const aRecord = "1.2.3.4";

if (aRegex.test(aRecord)) {
    console.log("This is a valid A record.");
} else {
    console.log("This is not a valid A record.");
}
