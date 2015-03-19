function sum1 (value, cb) {
    cb(value + 1);
}

function sum2 (value, cb) {
    cb(value + 2);
}

function sum3 (value, cb) {
    cb(value + 3);
}

function sum4 (value, cb) {
    cb(value + 4);
}

function sum5 (value, cb) {
    cb(value + 5);
}

function sum6 (value, cb) {
    cb(value + 6);
}

function sum7 (value, cb) {
    cb(value + 7);
}

function sum8 (value, cb) {
    cb(value + 8);
}

function sum9 (value, cb) {
    cb(value + 9);
}

function sum10 (value, cb) {
    cb(value + 10);
}

function sum (value) {
    sum1(value, function (value) {
        sum2(value, function (value) {
            sum3(value, function (value) {
                sum4(value, function (value) {
                    sum5(value, function (value) {
                        sum6(value, function (value) {
                            sum7(value, function (value) {
                                sum8(value, function (value) {
                                    sum9(value, function (value) {
                                        sum10(value, function (value) {
                                            console.log(value);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
};

sum(1);
