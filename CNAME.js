const cnameRegex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;

const cnameRecord = "example.com";

if (cnameRegex.test(cnameRecord)) {
    console.log("This is a valid CNAME record.");
} else {
    console.log("This is not a valid CNAME record.");
}
