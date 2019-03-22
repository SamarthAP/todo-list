const ListItem = require('../models/listitem.model');

exports.item_get = function (req, res) {
    if (req.params.id == 'all') {
        ListItem.find({}, function (err, listitems) {
            if (err) return next(err);
            res.send(listitems);
        })
    } else {
        ListItem.findById(req.params.id, function (err, listitem) {
            if (err) return next(err);
            res.send(listitem);
        })
    }
}

exports.item_create = function (req, res) {
    let item = new ListItem({message: req.body.message});
    item.save(function(err) {
        if (err) return next(err);
        res.send(item);
    });
}

exports.item_update = function (req, res) {
    ListItem.findByIdAndUpdate(req.params.id, {$set: req.body}, 
        function (err, listitem) {
            if (err) return next(err);
            res.send('ListItem updated');
        });
}

exports.item_delete = function (req, res) {
    ListItem.findByIdAndDelete(req.params.id, function (err) {
        if (err) return next(err);
        res.send('ListItem deleted');
    });
}