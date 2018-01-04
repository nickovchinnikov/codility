/**
 A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

 The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

 Write a function:

 function solution(A, K);

 that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.

 For example, given

 A = [3, 8, 9, 7, 6]
 K = 3
 the function should return [9, 7, 6, 3, 8]. Three rotations were made:

 [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
 [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
 [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
 For another example, given

 A = [0, 0, 0]
 K = 1
 the function should return [0, 0, 0]

 Given

 A = [1, 2, 3, 4]
 K = 4
 the function should return [1, 2, 3, 4]

 Assume that:

 N and K are integers within the range [0..100];
 each element of array A is an integer within the range [−1,000..1,000].
 In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
 */
function solution(A, K) {
    if(K <= 0 || A.length <= 1 || A.length === K) {
        return A;
    }

    let result = [];

    let start = K < A.length ? K : K % A.length;

    if(start === 0) {
        return A;
    }

    for(let i = (A.length - start); i < A.length; i++) {
        result.push(A[i]);
    }

    for(let i = 0; i < (A.length - start); i++) {
        result.push(A[i]);
    }

    return result;
}

let test1 = () => {
    const A = [3, 8, 9, 7, 6];
    const K = 3;

    const resultShouldBe = [9, 7, 6, 3, 8];

    const result = solution(A, K);

    console.log(result);
    console.log(resultShouldBe);
};

let test2 = () => {
    const A = [1, 2, 3, 4];
    const K = 4;

    const resultShouldBe = [1, 2, 3, 4];

    const result = solution(A, K);

    console.log(result);
    console.log(resultShouldBe);
};

let test3 = () => {
    const A = [1, 2, 3, 4];
    const K = 5;

    const resultShouldBe = [4, 1, 2, 3];

    const result = solution(A, K);

    console.log(result);
    console.log(resultShouldBe);
};

let test4 = () => {
    const A = [1];
    const K = 5;

    const resultShouldBe = [1];

    const result = solution(A, K);

    console.log(result);
    console.log(resultShouldBe);
};

let test5 = () => {
    const A = [];
    const K = 5;

    const resultShouldBe = [];

    const result = solution(A, K);

    console.log(result);
    console.log(resultShouldBe);
};

let test6 = () => {
    const A = [1, 2];
    const K = 1;

    const resultShouldBe = [2, 1];

    const result = solution(A, K);

    console.log(result);
    console.log(resultShouldBe);
};

let test7 = () => {
    const A = [1, 2, 3, 4];
    const K = 5;

    const resultShouldBe = [4, 1, 2, 3];

    const result = solution(A, K);

    console.log(result);
    console.log(resultShouldBe);
};

let test8 = () => {
    const A = [1, 1, 2, 3, 5];
    const K = 42;

    const resultShouldBe = [3, 5, 1, 1, 2];

    const result = solution(A, K);

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