import Joi from "joi";

export const authValidator = Joi.object({
    username: Joi.string().regex(/^[a-zA-Z]\w{1,19}$/).messages({
        'string.pattern.base': 'Username must start letter, consist with 20 characters'
    }).required(),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/).messages({
        'string.pattern.base': 'Password must consists from 1 uppercase, one number, one special sign, 1 lowercase, length min 8 max 20 characters'
    })
});