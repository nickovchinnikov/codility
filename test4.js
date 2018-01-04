/**
 A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

 Your goal is to find that missing element.

 Write a function:

 function solution(A);

 that, given a zero-indexed array A, returns the value of the missing element.

 For example, given array A such that:

 A[0] = 2
 A[1] = 3
 A[2] = 1
 A[3] = 5
 the function should return 4, as it is the missing element.

 Assume that:

 N is an integer within the range [0..100,000];
 the elements of A are all distinct;
 each element of array A is an integer within the range [1..(N + 1)].
 Complexity:

 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
 */
function solution(A) {
    if(A.length === 0) {
        return 1;
    }

    let checker = {};
    let min = 1;
    let max = 0;

    for (let i = 0; i < A.length; i++) {
        let val = A[i];
        if (val >= max) {
            max = val + 1;
        }
        checker[val] = true;
    }

    for (let i = min; i <= max; i++) {
        if(!checker[i]) {
            return i;
        }
    }

    return 1;
}

let test1 = () => {
    const A = [2, 3, 1, 5];

    const resultShouldBe = 4;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

let test2 = () => {
    const A = [2, 3, 1, 5, 4];

    const resultShouldBe = 6;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

let test3 = () => {
    const A = [];

    const resultShouldBe = 1;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

let test4 = () => {
    const A = [1];

    const resultShouldBe = 2;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

let test5 = () => {
    const A = [1, 2];

    const resultShouldBe = 3;

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