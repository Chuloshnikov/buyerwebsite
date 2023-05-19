import { MdPassword } from "react-icons/md";

export default function login_validate(values) {
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
    } else if (values.password.includes("")) {
        errors.password = "Invalid Password";
    }

    return errors;
}