/**
 A non-empty zero-indexed array A consisting of N integers is given. Array A represents numbers on a tape.

 Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

 The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

 In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

 For example, consider array A such that:

 A[0] = 3
 A[1] = 1
 A[2] = 2
 A[3] = 4
 A[4] = 3
 We can split this tape in four places:

 P = 1, difference = |3 − 10| = 7
 P = 2, difference = |4 − 9| = 5
 P = 3, difference = |6 − 7| = 1
 P = 4, difference = |10 − 3| = 7
 Write a function:

 int solution(int A[], int N);

 that, given a non-empty zero-indexed array A of N integers, returns the minimal difference that can be achieved.

 For example, given:

 A[0] = 3
 A[1] = 1
 A[2] = 2
 A[3] = 4
 A[4] = 3
 the function should return 1, as explained above.

 Assume that:

 N is an integer within the range [2..100,000];
 each element of array A is an integer within the range [−1,000..1,000].
 Complexity:

 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 */
function solution(A) {
    const lastIndex = A.length - 1;
    const init = 0;

    if(lastIndex === 1) {
        return Math.abs(A[init] - A[1]);
    }

    if(lastIndex < init) {
        return init;
    }

    if(lastIndex === init) {
        return A[init];
    }

    let sumRight = init;

    for (let i = init; i <= lastIndex; i++) {
        sumRight = sumRight + A[i];
    }

    let sumLeft = init;
    let result = -1;

    for(let i = 0; i < lastIndex; i++) {
        const val = A[i];
        sumRight = sumRight - val;
        sumLeft = sumLeft + val;
        const diff = Math.abs(sumLeft - sumRight);
        if(result === -1 || result > diff) {
            result = diff;
        }
    }

    return result;
}

const test1 = () => {
    const A = [3, 1, 2, 4, 3];

    const resultShouldBe = 1;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test1_1 = () => {
    const A = [-10, -20, -30, -40, 100];

    const resultShouldBe = 20;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test2 = () => {
    const A = [1, 2];

    const resultShouldBe = 1;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test3 = () => {
    const A = [1];

    const resultShouldBe = 1;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test3_1 = () => {
    const A = [2];

    const resultShouldBe = 2;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test4 = () => {
    const A = [];

    const resultShouldBe = 0;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

const test5 = () => {
    const A = [1, -2, -3, 4, 5];

    const resultShouldBe = 3;

    const result = solution(A);

    console.log(result);
    console.log(resultShouldBe);
};

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let isNegative = true;
function zeroOne() {
    if(isNegative) {
        isNegative = false;
        return -1;
    }
    return 1;
}

const test6 = () => {
    let A = [];

    for (let i = 0; i < 100000; i++) {
        // A.push(getRandomArbitrary(-1, 1))
        // A.push(getRandomArbitrary(-1000, 1000))
        A.push(zeroOne())
    }

    const resultShouldBe = 0;

    console.time('test6');
    const result = solution(A);
    console.timeEnd('test6');

    console.log(result);
    console.log(resultShouldBe);
};

test1();
console.log('\n');
test1_1();
console.log('\n');
test2();
console.log('\n');
test3();
console.log('\n');
test3_1();
console.log('\n');
test4();
console.log('\n');
test5();
console.log('\n');
test6();