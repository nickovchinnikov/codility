/**
 A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

 You are given a zero-indexed array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

 The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

 For example, you are given integer X = 5 and array A such that:

 A[0] = 1
 A[1] = 3
 A[2] = 1
 A[3] = 4
 A[4] = 2
 A[5] = 3
 A[6] = 5
 A[7] = 4
 In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

 Write a function:

 function solution(X, A);

 that, given a non-empty zero-indexed array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

 If the frog is never able to jump to the other side of the river, the function should return −1.

 For example, given X = 5 and array A such that:

 A[0] = 1
 A[1] = 3
 A[2] = 1
 A[3] = 4
 A[4] = 2
 A[5] = 3
 A[6] = 5
 A[7] = 4
 the function should return 6, as explained above.

 Assume that:

 N and X are integers within the range [1..100,000];
 each element of array A is an integer within the range [1..X].
 Complexity:

 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(X), beyond input storage (not counting the storage required for input arguments).
 */
function solution(X, A) {
    let coords = {};

    for (let time = 0; time < A.length; time++) {
        const coord = A[time];

        if(coords[coord] === undefined) {
            coords[coord] = time;
        }
    }

    const cordArray = Object.keys(coords);

    if(cordArray.length < X) {
        return -1;
    }

    let prevCoord = 0;
    let moveTime = 0;

    for (let key = 0; key < cordArray.length; key++) {
        const coord = Number(cordArray[key]);
        const time = Number(coords[coord]);

        if(coord - prevCoord !== 1) {
            return -1;
        }
        if(moveTime < time) {
            moveTime = time;
        }
        if(X === coord) {
            return moveTime;
        }
        prevCoord++;
    }
    return -1;
}

const test1 = () => {
    const A = [1, 3, 1, 4, 2, 3, 5, 4];
    const X = 5;

    const resultShouldBe = 6;

    const result = solution(X, A);

    console.log(result);
    console.log(resultShouldBe);
};

const test2 = () => {
    const A = [2, 2, 2, 2, 2];
    const X = 2;

    const resultShouldBe = -1;

    const result = solution(X, A);

    console.log(result);
    console.log(resultShouldBe);
};

const test3 = () => {
    const A = [1, 3, 1, 3, 2, 1, 3];
    const X = 3;

    const resultShouldBe = 4;

    const result = solution(X, A);

    console.log(result);
    console.log(resultShouldBe);
};

test1();
console.log('\n');

test2();
console.log('\n');

test3();
console.log('\n');