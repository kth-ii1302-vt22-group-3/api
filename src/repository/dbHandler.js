const sequelize = require("./config");

const findAll = async () => {
    const result = await sequelize.query(`
        SELECT * FROM public.temperature
    `, { type: sequelize.QueryTypes.SELECT });
    return result;
};
