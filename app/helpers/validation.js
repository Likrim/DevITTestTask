export const validateEmail = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(email);
};

export const validatePassword = (password) => {
    let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return reg.test(password);
}