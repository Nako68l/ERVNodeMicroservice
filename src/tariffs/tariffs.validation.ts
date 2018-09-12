import * as Joi from "joi"

export default {
    body: {
        residence_start_date: Joi.string().regex(/[0-9]{4}-[0-9]{2}-[0-9]{2}/).required(),
        residence_end_date: Joi.string().regex(/[0-9]{4}-[0-9]{2}-[0-9]{2}/).required(),
        persons_birthdays: Joi.array().items(Joi.string().regex(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)).required(),
        risks: Joi.array().items(Joi.string()),
        country_name: Joi.string().required(),
        travel_purpose: Joi.string().regex(/tourism|sport|work/)
    }
};
