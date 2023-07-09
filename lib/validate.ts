export function login_validate(values) {
    const errors = {

    };

    //email validation

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    //password validation
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8 || values.password.length > 20){
        errors.password = "Must be greater than 8 and less then 20 characters long";
    } else if (values.password.includes(" ")) {
        errors.password = "Invalid Password";
    }

    return errors;
};


export function register_validate(values) {
    const errors = {};

    //name validation

    if (!values.name) {
        errors.name = "Required";
    } else if (values.name.includes("  ")){
        errors.name = "Invalid Name...!"
    } else if (values.name.length < 3 || values.name.length > 20) {
        errors.name = "Name cannot be less than 3 characters and cannot be more than 20 characters..!"
    } else if (!/^[a-zA-Z0-9]+$/.test(values.name)) {
        errors.name = "The name can only contain upper and lower case letters..!"
    } else if (values.name.trim() !== values.name) {
        errors.name = "Remove special characters or spaces at the end and beginning..!"
    }

    //email validation

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    //password validation
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8 || values.password.length > 20){
        errors.password = "Must be greater than 8 and less then 20 characters long";
    } else if (values.password.includes(" ")) {
        errors.password = "Invalid Password";
    }

    //validate confirm password

    if(!values.cpassword) {
        errors.cpassword = "Required";
    } else if(values.password != values.cpassword) {
        errors.password = "Password Not Match";
    } else if(values.cpassword.includes(" ")) {
        errors.cpassword = "invalid Confirm Password";
    }

    return errors;
}