const Joi=require('joi');

const HatJoiSchema=Joi.object({
    HatID:Joi.number().integer(),
    HatName:Joi.string(),
    DesignerID:Joi.string(),
    Color:Joi.string(),
    Material:Joi.string(),
    isLiked:Joi.string()
});

const CustomSchema = Joi.object({
    design_name: Joi.string().required(),
    description: Joi.string().required(),
    imageUrl: Joi.string().required(),
    created_at: Joi.date().default(() => new Date(), 'current date and time')
});


const ValidateCustom=(input)=>{
    return CustomSchema.validate(input);
}
const ValidateHat=(input)=>{
    return HatJoiSchema.validate(input);
}

module.exports= {ValidateCustom,ValidateHat};