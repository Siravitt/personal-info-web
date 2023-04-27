import Joi from "joi";

const informationSchema = Joi.object({
  weight: Joi.string().trim().required().messages({
    "any.required": "Weight is required",
    "string.empty": "Weight is required",
    "string.base": "Weight must be a string",
  }),
  height: Joi.string().trim().required().messages({
    "any.required": "Height is required",
    "string.empty": "Height is required",
    "string.base": "Height must be a string",
  }),
  waistline: Joi.string().trim().required().messages({
    "any.required": "Waistline is required",
    "string.empty": "Waistline is required",
    "string.base": "Waistline must be a string",
  }),
  date: Joi.string().trim().required().messages({
    "any.required": "Date is required",
    "string.empty": "Date is required",
    "string.base": "Date must be a string",
  }),
});

const validateInformation = (input) => {
  const { error } = informationSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateInformation;
