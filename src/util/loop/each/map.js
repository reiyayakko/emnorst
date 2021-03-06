
import { Each } from "../base/each-class.js";
import { copyType } from "../../../object/clone/copyType.js";

export const map = function(items, fn, copy=true) {
    const maped = copy ? copyType(items) : items;
    for(const each = new Each(items);each.continue();) {
        const { current } = each;
        const key = current.key || current.index;
        maped[key] = fn.call(this, current.value, key);
    }
    return maped;
};
