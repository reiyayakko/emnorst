
/* eslint-disable no-self-compare */

/**
 * Validate that the values are all equal using the SameValueZero algorithm.
 *
 * @param first
 * @param values
 * @return
 */
export const equals = (first: unknown, ...values: unknown[]): boolean => {
    let i = 0;
    const size = values.length;
    if(first === first)
        while(first === values[i] && ++i < size);
    else while(values[i] !== values[i] && ++i < size);
    return i === size;
};