var async = require('async');

function sum1 (value, cb) {
    cb(null, value + 1);
}

function sum2 (value, cb) {
    cb(null, value + 2);
}

function sum3 (value, cb) {
    cb(null, value + 3);
}

function sum4 (value, cb) {
    cb(null, value + 4);
}

function sum5 (value, cb) {
    cb(null, value + 5);
}

function sum6 (value, cb) {
    cb(null, value + 6);
}

function sum7 (value, cb) {
    cb(null, value + 7);
}

function sum8 (value, cb) {
    cb(null, value + 8);
}

function sum9 (value, cb) {
    cb(null, value + 9);
}

function sum10 (value, cb) {
    cb(null, value + 10);
}

function sum (value) {
    async.waterfall([
        async.apply(sum1, value),
        async.apply(sum2),
        async.apply(sum3),
        async.apply(sum4),
        async.apply(sum5),
        async.apply(sum6),
        async.apply(sum7),
        async.apply(sum8),
        async.apply(sum9),
        async.apply(sum10)
    ], function (err, result) {
        console.log(result);
    })
};

sum(1);
