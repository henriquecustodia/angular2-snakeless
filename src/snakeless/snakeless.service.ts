import { Injectable } from '@angular/core';

import { isArray, isObject } from './useful';

let camelcase = require('camelcase');
let decamelize = require('decamelize');

@Injectable()
export class SnakelessService {

  constructor() { }
  
  fromSnake(obj) {
    if (isArray(obj)) {
      obj.forEach((item, i, arr) => {
        this.fromSnake(item);
      });
    }

    if (isObject(obj)) {
      for (let prop in obj) {
        let propValue = obj[prop];

        delete obj[prop];

        const newProp = camelcase(prop);

        obj[newProp] = propValue;

        if (isObject(propValue)) {
          obj[newProp] = this.fromSnake(propValue);

          continue;
        }

        if (isArray(propValue)) {
          propValue.forEach((item, i, array) => {
            array[i] = this.fromSnake(item);
          });

          continue;
        }

      }
    }

    return obj;
  }

  toSnake(obj) {
    if (isArray(obj)) {
      obj.forEach((item, i, arr) => {
        this.toSnake(item);
      });
    }

    if (isObject(obj)) {
      for (let prop in obj) {
        let propValue = obj[prop];

        delete obj[prop];

        const newProp = decamelize(prop);

        obj[newProp] = propValue;

        if (isObject(propValue)) {
          obj[newProp] = this.toSnake(propValue);

          continue;
        }

        if (isArray(propValue)) {
          propValue.forEach((item, i, array) => {
            array[i] = this.toSnake(item);
          });

          continue;
        }

      }
    }

    return obj;
  }

}
