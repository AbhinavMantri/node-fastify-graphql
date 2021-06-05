class Core {
    findAll(model, options) {
        return model.findAll(options);
    }

    findOne(model, options) {
        return model.findOne(options);
    }

    create(model, data, options = {}) {
        return model.create(data, options);
    }

    bulkCreate(model, data, options = {}) {
        return model.bulkCreate(data, options);
    }

    update(model, data, options = {}) {
        return model.update(data, options);
    }

    delete(model, options) {
        return model.destory(options);
    }
}

module.exports = new Core();