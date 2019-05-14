let db = require('../models');
let Service = db.Service;

const index = (req, res) => {
    Service.findAll().then(result => {
        res.render('service/services', {services: result, success: req.flash('success'), 'error': req.flash('error')});
    }).catch(err => {
        res.send(err);
    });
};

const indexApi = (req, res) => {
    Service.findAll().then(services => {
        res.send(services);
    }).catch(err => {
        res.send(err);
    });
};

const newService = (req, res) => {
    res.render('service/new_service');
};
const saveNewService = (req, res) => {
    let service = {
        service_name: req.body.service_name,
        service_category: req.body.service_category
    };
    Service.create(service).then(result => {
        req.flash('success', 'New Service Created');
        res.redirect('/admin/services');
    }).catch(err => {
        res.send(err);
    });
};
const editService = (req, res) => {
    Service.findOne({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.render('service/edit_service', {service: result});
    }).catch(err => {
        res.send(err);
    });
};
const updateService = (req, res) => {
    let service = {
        service_name: req.body.service_name,
        service_category: req.body.service_category
    };
    Service.update(service, {
        where: {
            id: req.params.id
        }
    }
    ).then(result => {
        req.flash('success', 'Service Updated');
        res.redirect('/admin/services');
    }).catch(err => {
        res.send(err);
    });
};
const deleteService = (req, res) => {
    Service.destroy({
        where: {
            id: req.params.id
        }
    }
    ).then(result => {
        req.flash('success', 'Service Deleted');
        res.redirect('/admin/services');
    }).catch(err => {
        res.send(err);
    });
};

module.exports = {
    index,
    indexApi,
    newService,
    saveNewService,
    editService,
    updateService,
    deleteService
};