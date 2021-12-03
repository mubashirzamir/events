const { Op } = require("sequelize");
const { events } = require('../models')

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: events } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, events, totalPages, currentPage };
};

exports.findAll = async function (req) {
    const { page, size, level, duration, title } = req.query;

    var condition_01 = level ? { level: level } : null;
    var condition_02 = duration ? { duration: duration } : null;
    var condition_03 = title ? { title: { [Op.like]: `%${title}%` } } : null;
    var condition_04 = { isDelete: false };

    const { limit, offset } = getPagination(page, size);

    const data = await events.findAndCountAll({ where: { ...condition_01, ...condition_02, ...condition_03, ...condition_04 }, limit, offset })
    const result = getPagingData(data, page, limit);
    return result;
};


exports.findOne = async function (event_id) {
    const event = await events.findOne({ where: { event_id: event_id, isDelete: false } });
    return event;
}
