export const makeUserObjectFromObject = (object) => {
    const userObject = {
        image: object.image,
        name: object.name,
        email: object.email,
        phone: object.phone,
        position: object.position,
        skype: object.skype
    };
    return userObject;
};

export const makeUserObjectFromValues = (image, name, email, phone, position, skype) => {
    const userObject = {
        image,
        name,
        email,
        phone,
        position,
        skype
    };
    return userObject;
}