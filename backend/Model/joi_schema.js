const Joi=require('joi');

const HatJoiSchema=Joi.object({
    HatID:Joi.number().integer(),
    HatName:Joi.string(),
    DesignerID:Joi.string(),
    Color:Joi.string(),
    Material:Joi.string(),
    isLiked:Joi.boolean()
});

const CustomSchema = Joi.object({
    design_name: Joi.string().required().min(20).max(30),
    description: Joi.string().required().max(50),
    imageUrl: Joi.string().required(),
    created_at: Joi.date().default(() => new Date())
});


const ValidateCustom=(input)=>{
    return CustomSchema.validate(input);
}
const ValidateHat=(input)=>{
    return HatJoiSchema.validate(input);
}

module.exports= {ValidateCustom,ValidateHat};