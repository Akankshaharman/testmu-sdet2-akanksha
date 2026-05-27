const Ajv = require('ajv');
const ajv = new Ajv();

function validateSchema(schema, data) {
    const validate = ajv.compile(schema);
    const valid = validate(data);

    if (!valid) {
        throw new Error(JSON.stringify(validate.errors));
    }

    return true;
}

module.exports = { validateSchema };