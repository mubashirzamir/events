module.exports = (sequelize, DataTypes) => {

    const events = sequelize.define("events", {

        event_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        isFeatured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },

        banner_image: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        thumb_image: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        short_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        long_description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        date_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        level: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        can_join: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        program_fee: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        discount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        tags: {
            type: DataTypes.JSON,
            allowNull: false,
        },

        isDelete: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },

    })

    return events;
};