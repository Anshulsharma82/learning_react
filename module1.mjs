function validateRequest() {
    console.log('Request Validated!')
}

const a = 10;

export default validateRequest; // If module system of project is ECMA Script.
export { a }
// module.exports = {validateRequest}
// If module system of project is common js