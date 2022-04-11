const sequelize = require("./config");

const findAll = async () => {
    const result = await sequelize.query(`
        SELECT * FROM public.temperature
    `, { type: sequelize.QueryTypes.SELECT });
    return result;
};

const findLatest = async () => {
    const result = await sequelize.query(`
        SELECT * FROM public.temperature
        ORDER BY id DESC
        LIMIT 1
    `, { type: sequelize.QueryTypes.SELECT });
    return result[0];
};

const insertOne = async (value, unit) => {
    const result = await sequelize.query(`
        INSERT INTO public.temperature (value, unit) 
        VALUES (${value}, '${unit}')
        RETURNING * 
    `, { type: sequelize.QueryTypes.INSERT });
    return result[0];
};

module.exports = {
    findAll,
    findLatest,
    insertOne
};