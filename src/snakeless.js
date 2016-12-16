const _ = '_';

module.exports.fromSnake = function fromSnake(obj) {
    for (let prop in obj) {
        let propValue = obj[prop];

        delete obj[prop];

        let broken = prop.split(_);
        let firstPeace = broken[0];

        let restPeaces = broken.slice(1).map((item, i, array) => {
            let upper = item[0].toUpperCase();
            let rest = item.slice(1);

            return upper + rest;
        }).join('');

        let newProp = firstPeace + restPeaces;

        obj[newProp] = propValue;

        if (Object.prototype.toString.call(propValue) === '[object Object]') {
            fromSnake(propValue);
            return;
        }

        if (Object.prototype.toString.call(propValue) === '[object Array]') {
            propValue.forEach(item => {
                fromSnake(item);
            });
            return;
        }
    }
}


