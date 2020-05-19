
// @ts-check

import { isObject } from "../../is/index.js";
import { each } from "../each.js";
import { foldLeft } from "../fold.js";

/**
 * @typedef {function(any):
 * string | {[x: string]: any}
 * } groupCB
 */

/**
 * @param {*} array
 * @param {groupCB} func
 */
export const group = function(array, func=(value)=>value){
    return foldLeft(array, (groups, value)=>{
        const entry = func.call(this, value);
        const entries = isObject(entry)
            ? entry : { [entry]: value };
        each(entries, (value, key)=>{
            (
                groups[key]
                || (groups[key] = [])
            ).push(value);
        });
    }, {});
};
