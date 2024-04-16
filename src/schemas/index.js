import * as Yup from 'yup'
 
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d@$!#%*?&]{8,}$/;
const emailRegex = /^(?!\s)\w+([.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/;
// const firstnameRegex = /^[A-Z][a-zA-Z]*(?:\s[A-Z][a-zA-Z]*)*\s*$/;
const firstnameRegex = /^[a-zA-Z]*\s*$/;
const lastnameRegex = /^[a-zA-Z\s]*$/;
const nameRegex = /^[a-zA-Z\s]*$/;
// var phoneReg = /^(\+\d{1,3}\s?)?(\(\d{1,4}\)\s?|\d{1,4}[-]?)?\d{6,10}$/;
const phoneReg = /^(?:\+\d{1,3}\s?)?(?:\(\d{1,4}\)\s?|\d{1,4}[-]?)?\d{10}$/;
const phoneregex = /^[6789]\d{9}$/;

export const signupSchema = Yup.object({
    firstName:Yup.string().required('Please enter first name.').trim().matches(firstnameRegex, 'First name should only accept alphabets with no space').min(2,'Must be atleast 2 characters long.').max(20,'Must be less than 20 characters.'),
    lastName:Yup.string().required('Please enter the last name.').trim().matches(lastnameRegex, 'Last name should only accept alphabets').min(2,'Must be atleast 2 characters long.').max(20,'Must be less than 20 characters.'),
    address:Yup.string().required('Please enter the address.').trim().min(10,'Address must be atleast 10 characters long.'),
    phone:Yup.string().required('Please enter the phone number.').trim().matches(phoneregex,'Please enter valid phone number.'),
    email: Yup.string().required('Please enter the email.').trim().matches(emailRegex,'Invalid email id.').max(64,'Email cannot be more than 64 characters.').email('Invalid email address.'),
    pass1:Yup.string().required('Please enter the password.').trim().matches(passwordRegex, 'Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character (@, $, !, %, *, ?, &), and be a minimum of 8 characters long.'),
    pass2: Yup.string().required('Please enter the confirm password.').trim().oneOf([Yup.ref('pass1'),null],'Password must match.'),
    // profileImg: Yup.mixed().required('Please upload an image'),
})

export const loginSchema = Yup.object({
    email: Yup.string().required('Please enter the email.').trim().matches(emailRegex,'Invalid email id.').max(64,'Email cannot be more than 64 characters.').email('Invalid email address.'),
    pass1:Yup.string().required('Please enter the password.').trim().matches(passwordRegex, 'Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character (@, $, !, %, *, ?, &), and be a minimum of 8 characters long.'),
})

export const forgotpasswordSchema = Yup.object({
    email: Yup.string().required('Please enter the email.').trim().matches(emailRegex,'Invalid email id.').max(64,'Email cannot be more than 64 characters.').email('Invalid email address.'),
})

export const siteSchema = Yup.object({
    title: Yup.string().required('Please enter the title.').trim().min(3,'Title must be atleast 3 characters long.').max(64,'Title cannot be more than 64 characters.'),
    country: Yup.string().required('Please enter the country name.').trim().min(2,'Country Name must be atleast 2 characters long.').max(64,'Country cannot be more than 64 characters.'),
    street: Yup.string().required('Please enter the street name.').trim().min(2,'Street Name must be atleast 2 characters long.').max(64,'Street cannot be more than 64 characters.'),
    city: Yup.string().required('Please enter the city name.').trim().min(2,'City Name must be atleast 2 characters long.').max(64,'City cannot be more than 64 characters.'),
    state: Yup.string().required('Please enter the state name.').trim().min(2,'State Name must be atleast 2 characters long.').max(64,'State cannot be more than 64 characters.'),
    postalCode: Yup.string().required('Please enter the postal code.').trim().min(5,'Postal Code must be atleast 5 characters long.').max(10,'Postal Code cannot be more than 10 characters.'),
    firstName:Yup.string().required('Please enter first name.').trim().matches(firstnameRegex, 'First name should only accept alphabets with no space').min(2,'Must be atleast 2 characters long.').max(20,'Must be less than 20 characters.'),
    lastName:Yup.string().required('Please enter the last name.').trim().matches(lastnameRegex, 'Last name should only accept alphabets').min(2,'Must be atleast 2 characters long.').max(20,'Must be less than 20 characters.'),
    phone: Yup.string().required('Please enter the phone number.').trim().matches(phoneReg,'Please enter valid phone number').min(10,'Phone number must be atleast 10 characters long.'),
    division: Yup.string().required('Please select the division.'),
    // mainwarehouse: Yup.string(),
    description: Yup.string().required('Please enter the description.').trim().min(5,'Description must be atleast 5 characters long.').max(200,'Description cannot be more than 200 characters.'),
})

export const createDivisionSchema = Yup.object({
    title: Yup.string().required('Please enter the title.').trim().min(3,'Title Name must be atleast 3 characters long').max(64,'Title cannot be more than 64 characters'),
    mainwarehouse: Yup.string().required('Please select warehouse.'),
    fileUpload: Yup.mixed().required('Please upload the image.'),
})

export const addAssociateClientSchema = Yup.object({
    title: Yup.string().required('Please enter the title.').trim().min(3,'Title Name must be atleast 3 characters long.').max(64,'Title cannot be more than 64 characters.'),
    warehouse: Yup.string().required('Please select warehouse.'),
    fileUpload: Yup.mixed().required('Please upload the image.'),
})

export const addUserClientSchema = Yup.object({
    name:Yup.string().required('Please enter the name.').trim().matches(nameRegex,'Invalid Name format.').min(2,'Name must be atleast 2 characters long.').max(30,'Name cannot be more than 30 characters.'),
    email: Yup.string().required('Please enter the email.').trim().matches(emailRegex,'Invalid email id.').max(64,'Email cannot be more than 64 characters.').email('Invalid email address.'),
    pass1:Yup.string().required('*Please enter the password.').trim().matches(passwordRegex, 'Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character (@, $, !, %, *, ?, &), and be a minimum of 8 characters long.').max(20,'Password cannot be more than 20 characters.'),
    client:Yup.string().required('Please enter the client name.').trim().matches(nameRegex,'Invalid Client Name format.').min(2,'client must be atleast 2 characters long.').max(30,'client cannot be more than 30 characters.'),
})

export const addPartSchema = Yup.object({
    division:Yup.string().required('Please select the division.'),
    partNumber:Yup.string().required('Please enter the part number.').trim().min(2,'Part Number must be atleast 2 characters long.').max(10,'Part Number cannot be more than 10 characters.'),
    partDescription:Yup.string().required('Please enter the part description.').trim().min(5,'Part Description must be atleast 5 characters long.').max(30,'Part Description cannot be more than 30 characters.'),
    // addMedia:Yup.string().required('Upload Image')
    // serialized:Yup.string().required('Must be checked'),
})


