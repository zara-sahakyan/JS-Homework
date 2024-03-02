/** @format */

//implement all array methods
const array = [23, 45, 8, 0];

//forEach
function myForEach(array, callback) {
	for (let i = 0; i < array.length; i++) {
		callback(array[i], i, array);
	}
}
myForEach(array, (element) => console.log(element));

//map
function myMap(array, callback) {
	const result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(callback(array[i], i, array));
	}
	return result;
}

myMap(array, (element) => console.log(element));

//filter
function myFilter(array, callback) {
	const res = [];
	for (let i = 0; i < array.length; i++) {
		if (callback(array[i], i, array)) {
			res.push();
		}
	}
	return res;
}

//some
function cmySome(array, callback) {
	for (let i = 0; i < array.length; i++) {
		if (callback(array[i], i, array)) {
			return true;
		}
	}
	return false;
}

//every
function myEvery(array, callback) {
	for (let i = 0; i < array.length; i++) {
		if (!callback(array[i], i, array)) {
			return false;
		}
	}
	return true;
}

//reduce
function myReduce(array, callback, initialValue) {
	let finalResult = initialValue;
	let startIndex = 0;
	if (initialValue === undefined) {
		finalResult = array[0];
		startIndex = 1;
	}
	for (let i = startIndex; i < array.length; i++) {
		finalResult = callback(finalResult, array[i], i, array);
	}
	return finalResult;
}

const sum = myReduce(array, (finalResult, current) => finalResult + current, 0);
console.log(sum);
