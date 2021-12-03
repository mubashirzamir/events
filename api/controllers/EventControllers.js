const EventService = require('../services/EventServices')
const noError = { status: 0, message: "No error" }

exports.getPrograms = async function (req, res, next) {
    try {

        // findOne
        if (Object.keys(req.query).length === 0 && req.params.event_id) {
            const event = await EventService.findOne(req.params.event_id);
            return res.status(200).json({ error: noError, data: event, message: "Successfully event retrieved" })
        }

        // findAll with search
        else {
            const events = await EventService.findAll(req);
            return res.status(200).json({ error: noError, data: events, message: "Succesfully events retrieved" });
        }

    } catch (e) {
        return res.status(400).json({ error: { status: 1, message: e.message }, data: {}, message: {} });

    }
}