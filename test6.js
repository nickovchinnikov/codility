/**
 A non-empty zero-indexed array A consisting of N integers is given.

 A permutation is a sequence containing each element from 1 to N once, and only once.

 For example, array A such that:

 A[0] = 4
 A[1] = 1
 A[2] = 3
 A[3] = 2
 is a permutation, but array A such that:

 A[0] = 4
 A[1] = 1
 A[2] = 3
 is not a permutation, because value 2 is missing.

 The goal is to check whether array A is a permutation.

 Write a function:

 function solution(A);

 that, given a zero-indexed array A, returns 1 if array A is a permutation and 0 if it is not.

 For example, given array A such that:

 A[0] = 4
 A[1] = 1
 A[2] = 3
 A[3] = 2
 the function should return 1.

 Given array A such that:

 A[0] = 4
 A[1] = 1
 A[2] = 3
 the function should return 0.

 Assume that:

 N is an integer within the range [1..100,000];
 each element of array A is an integer within the range [1..1,000,000,000].
 Complexity:

 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 */
function solution(A) {
    if(A.length < 1) {
        return 0;
    }

    if(A.length === 1) {
        return Number(A[0] === 1);
    }

    let sequence = {};

    for (let key = 0; key < A.length; key++) {
        const val = A[key];
        if(sequence[val]) {
            return 0;
        }
        sequence[val] = val;
    }

    const sequenceKeys = Object.keys(sequence);

    let prev = Number(sequenceKeys[0]);

    if(prev !== 1) {
        return 0;
    }

    for (let key = 1; key < sequenceKeys.length; key++) {
        const val = Number(sequenceKeys[key]);
        if(val - prev !== 1) {
            return 0;
        }
        prev = val;
    }

    return 1;
}

const test1 = () => {
    const A = [];

    const resultShouldBe = 0;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test2 = () => {
    const A = [1];

    const resultShouldBe = 1;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test3 = () => {
    const A = [4, 1, 3, 2] ;

    const resultShouldBe = 1;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test4 = () => {
    let A = [];

    for (let i = 1; i < 1000000; i++) {
        A.push(i)
    }

    const resultShouldBe = 1;

    console.time('test4');
    const result = solution(A);
    console.timeEnd('test4');

    console.log(result);
    console.log(resultShouldBe);
};

const test5 = () => {
    let A = [];
    const max = 1000000;

    for (let i = 1; i < max; i++) {
        A.push(i)
    }

    A.push(max + 3);

    const resultShouldBe = 0;

    console.time('test5');
    const result = solution(A);
    console.timeEnd('test5');

    console.log(result);
    console.log(resultShouldBe);
};

const test6 = () => {
    let A = [];
    const max = 1000000;

    for (let i = 1; i <= max; i++) {
        A.push(i)
    }

    A.push(A[max - 1]);

    const resultShouldBe = 0;

    console.time('test6');
    const result = solution(A);
    console.timeEnd('test6');

    console.log(result);
    console.log(resultShouldBe);
};

const test7 = () => {
    let A = [];
    const max = 10;

    for (let i = 1; i <= max; i++) {
        A.push(i)
    }

    A.push(A[5]);

    const resultShouldBe = 0;

    console.time('test7');
    const result = solution(A);
    console.timeEnd('test7');

    console.log(result);
    console.log(resultShouldBe);
};

const test8 = () => {
    let A = [2];

    const resultShouldBe = 0;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test9 = () => {
    let A = [3, 2];

    const resultShouldBe = 0;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test10 = () => {
    let A = [1, 2];

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