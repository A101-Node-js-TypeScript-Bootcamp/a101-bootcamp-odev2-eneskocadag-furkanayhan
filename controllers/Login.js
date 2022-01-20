const Joi = require('joi');
const registerSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).max(16).required()
});

module.exports.loginPost = async (req, res) => {
    try {
        const result = await registerSchema.validateAsync(req.body);
        res.json(result)
    } catch (error) {
        res.json(error.message)
    }
  };