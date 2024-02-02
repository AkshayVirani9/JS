$(function () {
    $("#datepicker").datepicker({
        maxDate: "now",
        dateFormat: "dd/mm/yy",
    });
});
function isEmailValid(email) {
    const Reg =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return Reg.test(email);
}
function isPercentileValid(percentile) {
    const Reg = /^\d{1,2}\.\d{1,2}$|^\d{1,3}$/;
    return Reg.test(percentile);
}
const form = document.getElementById("create-account-form");
const firstnameInput = document.getElementById("firstname");
const middlenameInput = document.getElementById("middlename");
const lastnameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const mobilenoInput = document.getElementById("mobileno");
const passwordInput = document.getElementById("password");
const confirmpasswordInput = document.getElementById("confirm-password");
const genderInputs = form.querySelectorAll('input[name="gender"]');
const datepickerInput = document.getElementById("datepicker");
const addressInput = document.getElementById("address");
const pincodeInput = document.getElementById("pincode");
const city = document.getElementById("city");
const state = document.getElementById("state");
const hobbyCheckboxes = document.querySelectorAll('input[name="hobbiee[]"]');
const otherHobbieeCheckbox = document.getElementById("others");
const otherHobbieeInput = document.getElementById("otherHobbiee");
const hobbieeError = document.getElementById("hobbiee-error");

function validateForm() {
    if (firstnameInput.value.trim() == "") {
        toastr.error('Firstname required!.')
        setError(firstnameInput, "Name can not empty");

    } else if (
        firstnameInput.value.length < 5 || firstnameInput.value.length > 15 || !/^[A-Za-z]+$/.test(firstnameInput.value)
    ) {
        toastr.error('only 5 to 15 character allowed!.')
        setError(firstnameInput, "only 5 to 15 character allowed");

    } else {
        setSuccess(firstnameInput);
        toastr.success('Your Firstname submitted')
    }
    if (middlenameInput.value.trim() == "") {
        toastr.error('Middlename required!.')
        setError(middlenameInput, "Name can not empty");
    } else if (
        middlenameInput.value.length < 5 || middlenameInput.value.length > 15 || !/^[A-Za-z]+$/.test(middlenameInput.value)
    ) {
        toastr.error('only 5 to 15 character allowed!.')
        setError(middlenameInput, "only 5 to 15 character allowed");
    } else {
        toastr.success('Your Middlename submitted')
        setSuccess(middlenameInput);
    }
    if (lastnameInput.value.trim() == "") {
        toastr.error('lastname required!.')
        setError(lastnameInput, "Name can not empty");
    } else if (
        lastnameInput.value.length < 5 || lastnameInput.value.length > 15 || !/^[A-Za-z]+$/.test(lastnameInput.value)
    ) {
        toastr.error('only 5 to 15 character allowed!.')
        setError(lastnameInput, "only 5 to 15 character allowed");
    } else {
        toastr.success('Your lastname submitted')
        setSuccess(lastnameInput);
    }
    if (emailInput.value.trim() == "") {
        toastr.error('email required!.')
        setError(emailInput, "Enter email address");
    } else if (isEmailValid(emailInput.value)) {
        toastr.success('Email submitted!.')
        setSuccess(emailInput);
    } else {
        toastr.error('Enter valid email!.')
        setError(emailInput, "Enter Valid email address");
    }
    if (mobilenoInput.value.trim() == "") {
        toastr.error('Mobile No required!.')
        setError(mobilenoInput, "Enter your Mobile Number");
    } else if (
        mobilenoInput.value.length !== 10
    ) {
        toastr.error('enter valid mobile no!.')
        setError(mobilenoInput, "Enter valid number");
    } else {
        toastr.success('Your Mobile no submitted')
        setSuccess(mobilenoInput);
    }
    if (passwordInput.value.trim() == "") {
        toastr.error('Password required!.')
        setError(passwordInput, "Please Enter Password");
    } else if (
        passwordInput.value.trim().length < 6 || passwordInput.value.trim().length > 15
    ) {
        toastr.error('Enter password min 6 and max 15 characters!.')
        setError(passwordInput, "Enter password min 6 and max 15 characters");
    } else {
        toastr.success('Password submitted')
        setSuccess(passwordInput);
    }
    if (confirmpasswordInput.value.trim() == "") {
        toastr.error('Password required!.')
        setError(confirmpasswordInput, "Password can not empty");
    } else if (confirmpasswordInput.value !== passwordInput.value) {
        toastr.error('Password not match!.')
        setError(confirmpasswordInput, "Password does not match");
    } else {
        toastr.success('Confirm submitted')
        setSuccess(confirmpasswordInput);
    }

    let isGenderSelected = false;
    genderInputs.forEach((input) => {
        if (input.checked) {
            isGenderSelected = true;
        }
    });

    if (!isGenderSelected) {
        toastr.error('Gender required!.')
        setError(genderInputs[0], "Select a gender");
    } else {
        toastr.success('Gender submitted')
        setSuccess(genderInputs[0]);
    }
    if (datepickerInput.value == "") {
        toastr.error('Date of Birth required!.')
        setError(datepickerInput, "select date");
    } else {
        toastr.success('Date of Birth submitted')
        setSuccess(datepickerInput);
    }
    if (addressInput.value.trim() == "") {
        toastr.error('Address required!.')
        setError(addressInput, "Enter your Address");
    } else if (
        addressInput.value.length < 10 || addressInput.value.length > 100
    ) {
        toastr.error('Min character 10 and max 50 allowed!.')
        setError(addressInput, "Min character 10 and max 50 allowed");
    } else {
        toastr.success('Address submitted')
        setSuccess(addressInput);
    }
    if (city.value === "") {
        toastr.error('City required!.')
        setError(city, "choose city");
    } else {
        toastr.success('City submitted!.')
        setSuccess(city);
    }
    if (state.value === "") {
        // toastr.error('State required!.')
        setError(state, "select state");
    } else {
        toastr.success('State submitted!.')
        setSuccess(state);
    }
    if (pincodeInput.value.trim() == "") {
        toastr.error('Pincord required!.')
        setError(pincodeInput, "Enter pincode");
    } else if (pincodeInput.value.length !== 6) {
        toastr.error('pincode only 6 character!.')
        setError(pincodeInput, "pincode only 6 character");
    } else {
        toastr.success('Pincode submitted!.')
        setSuccess(pincodeInput);
    }

    const selectedHobbies = Array.from(hobbyCheckboxes).filter(
        (checkbox) => checkbox.checked
    );
    if (selectedHobbies.length < 1) {
        toastr.error('Hobbiee required!.')
        setError(hobbieeError, "Select hobby");
    } else {
        toastr.success('Hobbiee submitted!.')
        setSuccess(hobbieeError);
        if (otherHobbieeCheckbox.checked) {
            if (otherHobbieeInput.value.trim() === "") {
                setError(otherHobbieeInput, "Enter your Hobby");
                return false;
            } else {

                setSuccess(otherHobbieeInput);
            }
        }
    }
    document.getElementById("others").addEventListener("change", function () {
        if (this.checked) {
            otherHobbieeInput.style.display = "block";
        } else {
            otherHobbieeInput.style.display = "none";
            otherHobbieeInput.value = "";
        }
    });
    const educationRows = document.querySelectorAll("#education-section .row");
    educationRows.forEach((row) => {
        const educationLevel = row.querySelector('select[name="education-level"]');
        const major = row.querySelector('input[name="major"]');
        const school = row.querySelector('input[name="school"]');
        const errorContainer = row.querySelector(".error-message");

        if (educationLevel.value === "") {
            toastr.error('education required!.')
            setError(educationLevel, "Enter field", errorContainer);
        } else {
            toastr.success('Education submitted!.')
            setSuccess(educationLevel, errorContainer);
        }
        if (major.value.trim() === "") {
            toastr.error('school name required!.')
            setError(major, "Enter field", errorContainer);
        } else {
            toastr.success('school name submitted!.')
            setSuccess(major, errorContainer);
        }
        if (school.value.trim() === "") {
            toastr.error('persentile required!.')
            setError(school, "Enter field", errorContainer);
        } else if (isPercentileValid(school.value)) {
            toastr.success('Persentile submitted!.')
            setSuccess(school, errorContainer, "Enter Field");
        } else {
            setError(school, "Enter only numbers", errorContainer);
        }
    });
    function isFormValid() {
        const inputContainers = form.querySelectorAll(".input-group");
        let result = true;
        inputContainers.forEach((container) => {
            if (container.classList.contains("error")) {
                result = false;
            }
        });
        return result;
    }
    return isFormValid();
}
document.getElementById("add-education").addEventListener("click", function () {
    const newRow = createNewRow();
    document.getElementById("education-section").appendChild(newRow);
    addDeleteButtonListener(newRow.querySelector(".delete-btn"));
});
function createNewRow() {
    const firstRow = document.querySelector("#education-section .first-row");
    const newRow = firstRow.cloneNode(true);
    newRow.classList.remove("first-row");

    const inputs = newRow.querySelectorAll("input, select");
    inputs.forEach((input) => {
        input.value = "";

        const parent = input.parentElement; // Remove success and error classe
        parent.classList.remove("success", "error");
        const errorContainer = parent.querySelector(".error-message"); // Clear error message
        if (errorContainer) {
            errorContainer.textContent = "";
        }
    });

    return newRow;
}
function addDeleteButtonListener(deleteButton) {
    deleteButton.addEventListener("click", function () {
        const row = deleteButton.parentElement;
        if (!row.classList.contains("first-row")) {
            row.parentElement.removeChild(row); // Check if the current row is the first one
        }
    });
}
function setError(element, errorMessage) {
    if (element && element.parentElement) {
        const parent = element.parentElement;

        if (parent.classList.contains("success")) {
            parent.classList.remove("success");
        }
        parent.classList.add("error");
        const paragraph = parent.querySelector("p");
        paragraph.textContent = errorMessage;
    }
}
function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains("error")) {
        parent.classList.remove("error");
    }
    parent.classList.add("success");
}



form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm() == true) {
        confirm("Are you sure to submit this form!");
        form.submit();
    }
});
