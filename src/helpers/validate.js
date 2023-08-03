// import { isValidPhoneNumber } from "react-phone-number-input";

function validate(name, value, password) {
  switch (name) {
    case "username":
      if (!value) return "Username is required";
      if (/^.{0,5}$/.test(value))
        return "Username should be at least 6 characters long";
      else return "";
    case "password":
      if (!value) return "Password is required";
      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value))
        return "Password should have at least 8 characters and 1 number";
      else return "";
    case "email":
      if (!value) return "Email address is required";
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value))
        return "Please enter a valid email address";
      else return "";
    case "cpassword":
      if (value !== password) return "The passwords you entered do not match";
      else return "";
    case "date":
      if (!value) return "Date is required";
      else return "";
    // case "tel":
    //   const telInput = document.getElementsByClassName("PhoneInputInput");
    //   if (!value) {
    //     telInput[0].classList.add("input-error");
    //     return "Phone number is required";
    //   }
    // if (!isValidPhoneNumber(value)) {
    //   telInput[0].classList.add("input-error");
    //   return "Please enter a valid phone number";
    // } else {
    //   telInput[0].classList.remove("input-error");
    //   return "";
    // }
    default:
  }
}

export default validate;
