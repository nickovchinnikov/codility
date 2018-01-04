/**
 This is a demo task.

 Write a function:

 function solution(A);

 that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

 For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

 Given A = [1, 2, 3], the function should return 4.

 Given A = [−1, −3], the function should return 1.

 Assume that:

 N is an integer within the range [1..100,000];
 each element of array A is an integer within the range [−1,000,000..1,000,000].
 Complexity:

 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 */
function solution(A) {
    let result = {};

    for(let key = 0; key < A.length; key++) {
        const val = A[key];
        if(val > 0) {
            result[val] = val;
        }
    }

    const keysArray = Object.keys(result);

    let prev = 1;

    if(keysArray.length === 0) {
        return prev;
    }

    if(result[prev] !== prev) {
        return prev;
    }

    for(let key = 1; key < keysArray.length; key++) {
        const val = result[keysArray[key]];

        if(val - prev > 1) {
            return ++prev;
        }
        prev++;
    }
    return ++prev;
}

const test1 = () => {
    const A = [1, 3, 6, 4, 1, 2];

    const resultShouldBe = 5;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test2 = () => {
    const A = [-1, -3];

    const resultShouldBe = 1;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test3 = () => {
    const A = [1, 2, 3];

    const resultShouldBe = 4;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test4 = () => {
    const A = [-1, -2, 3, 1];

    const resultShouldBe = 2;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test5 = () => {
    const A = [-1, -2, 0, 3, 1];

    const resultShouldBe = 2;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test6 = () => {
    const A = [-1, -2, 0, 3, 2];

    const resultShouldBe = 1;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test7 = () => {
    const A = [2];

    const resultShouldBe = 1;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test8 = () => {
    const A = [1];

    const resultShouldBe = 2;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test9 = () => {
    const A = [-1, 0, 2, 5];

    const resultShouldBe = 1;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test10 = () => {
    const A = [-1, 0, -2, 1];

    const resultShouldBe = 2;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test11 = () => {
    const A = [];

    const resultShouldBe = 1;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

test1();
console.log('\n');

test2();
console.log('\n');

test3();
console.log('\n');

test4();
console.log('\n');

test5();
console.log('\n');

test6();
console.log('\n');

test7();
console.log('\n');

test8();
console.log('\n');

test9();
console.log('\n');

test10();
console.log('\n');

test11();
console.log('\n');