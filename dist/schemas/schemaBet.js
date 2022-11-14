import Joi from "joi";
export var betSchema = Joi.object({
    userId: Joi.number().required(),
    gameId: Joi.number().required(),
    bet: Joi.string().required()
});
