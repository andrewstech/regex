const mxRegex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])\s+IN\s+MX\s+[0-9]+\s+(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;

const mxRecord = "example.com IN MX 10 mail.example.com";

if (mxRegex.test(mxRecord)) {
    console.log("This is a valid MX record.");
} else {
    console.log("This is not a valid MX record.");
}
