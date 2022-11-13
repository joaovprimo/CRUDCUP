import Joi from "joi";

export const betSchema = Joi.object({
    userId: Joi.number().required(),
    gameId: Joi.number().required(),
    bet: Joi.string().required(),
});