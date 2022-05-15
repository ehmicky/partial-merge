import { set as setArray, test as isUpdatesObject } from 'set-array'

// Test whether the `secondObject` is an array `updates` object like
// `{ [index]: values, ... }`
// Also confirms the `firstValue` is an array, so we are sure the user intended
// to use an array `updates` object.
export const shouldPatchArray = function (firstValue, secondObject) {
  return Array.isArray(firstValue) && isUpdatesObject(secondObject)
}

// Patch an array using an `updates` object
// eslint-disable-next-line max-params
export const patchArray = function (array, updates, childSet, mergeValues) {
  return setArray(array, updates, {
    merge(firstValue, secondValue) {
      return mergeValues(firstValue, secondValue, childSet)
    },
  })
}
