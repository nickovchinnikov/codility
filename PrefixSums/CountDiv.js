/**
 Write a function:

 function solution(A, B, K);

 that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

 { i : A ≤ i ≤ B, i mod K = 0 }

 For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

 Assume that:

 A and B are integers within the range [0..2,000,000,000];
 K is an integer within the range [1..2,000,000,000];
 A ≤ B.
 Complexity:

 expected worst-case time complexity is O(1);
 expected worst-case space complexity is O(1).
 */
function solution(A, B, K) {
    const rightPart = Math.floor(B / K);
    const leftPart = Math.floor((A - 1) / K);
    return rightPart - leftPart;
}

const test1 = () => {
    const A = 6;
    const B = 11;
    const K = 2;

    const resultShouldBe = 3;

    const result = solution(A, B, K);

    console.log(result);
    console.log(resultShouldBe);
};

const test2 = () => {
    const A = 0;
    const B = 1;
    const K = 1;

    const resultShouldBe = 2;

    const result = solution(A, B, K);

    console.log(result);
    console.log(resultShouldBe);
};

const test3 = () => {
    const A = 1;
    const B = 1;
    const K = 1;

    const resultShouldBe = 1;

    const result = solution(A, B, K);

    console.log(result);
    console.log(resultShouldBe);
};

const testHiload = () => {
    const A = 1;
    const B = 1000000000;
    const K = 10;

    const resultShouldBe = 100000000;

    console.time('testHiload');
    const result = solution(A, B, K);
    console.timeEnd('testHiload');

    console.log(result);
    console.log(resultShouldBe);
};

test1();
console.log("\n");

test2();
console.log("\n");

test3();
console.log("\n");

testHiload();
console.log("\n");