/** @format */

//1.Given a number. Write a recursive function that reverse the number. Return the new number.

function reverseNumber(n) {
	if (n < 10) {
		return n;
	}
	let lastDigit = n % 10;
	let otherDigits = Math.floor(n / 10);

	let currentReverse = reverseNumber(otherDigits);

	return Number(lastDigit.toString() + currentReverse.toString());
}
console.log(reverseNumber(815796));

/* 2.Given a number and an array. Find the second occurrence of the number in the array.
Consider that the occurrence of each element in the array is at least two. (recursive) */

function secondOccurence(arr, n, i = 0, count = 0) {
	//county cuyca tali te i-rd iteraciayin qani hata gtel hamynknum
	if (i >= arr.length) {
		return "not found";
	}
	if (arr[i] === n) {
		count++;
		if (count === 2) {
			return i;
		}
	}
	return secondOccurence(arr, n, i + 1, count);
}
console.log(secondOccurence([0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6], 5));

/* 3. Given a substring and a string. Find how many times the substring occurred in the string.
(For getting substring of the string use str.substring(startIndex, endIndex),
str.substr(startIndex, length) ) (recursive)*/

function countOfoccuring(str, substring, i = 0, count = 0) {
	if (i >= str.length) {
		return count;
	}
	if (str.substr(i, substring.length) === substring) {
		count++;
	}
	return countOfoccuring(str, substring, i + 1, count);
}
console.log(countOfoccuring("Facebook looks odd", "ook"));

/*4. Given a string, compute recursively (no loops) a new string where all appearances of "pi";
have been replaced by 3.14.*/

//Solution1
function replacePi1(str, substring, i = 0, newStr = "") {
	if (i >= str.length) {
		return newStr;
	}
	if (
		str.substr(i, substring.length).toLowerCase() === substring.toLowerCase()
	) {
		newStr += "3.14";
		return replacePi1(str, substring, i + substring.length, newStr);
	}
	newStr += str[i];
	return replacePi1(str, substring, i + 1, newStr);
}
console.log(replacePi1("picturespicturespictures", "pi"));

//Solution2
function replacePi2(str) {
	if (!str.includes("Pi") || !str.includes("pi")) {
		return str;
	}
	return replacePi2(str.replace("Pi", "3.14").replace("pi", "3.14"));
}
console.log(replacePi2("Picsart pipelines", "pi"));

/* 5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
function that concats arrays).*/

function concatArrays(arr, i = 0, newArray = []) {
	if (i >= arr.length) {
		return newArray;
	}
	if (typeof arr[i] === typeof 1) {
		newArray.push(arr[i]);
		return concatArrays(arr, i + 1, newArray);
	}
	return concatArrays(arr, i + 1, newArray.concat(concatArrays(arr[i])));
}

console.log(concatArrays([14, [1, [[[3, []]], 1], 0]]));

/* 6. Given a number. Write a function that calculates its sum of the digits and if that sum has
more than 1 digit find the sum of digits of that number. Repeat that process if needed
and return the result. (recursive) */

function sumofDigits(n) {
	if (n < 10) {
		return n;
	}
	let lastDigit = n % 10;
	let otherDigits = Math.floor(n / 10);
	let sum = lastDigit + sumofDigits(otherDigits);
	if (sum > 9) {
		return sumofDigits(sum);
	}
	return sum;
}

console.log(sumofDigits(29));
