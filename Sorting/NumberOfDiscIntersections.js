/*
We draw N discs on a plane. The discs are numbered from 0 to N − 1. An array A of N non-negative integers, specifying the radiuses of the discs, is given. The J-th disc is drawn with its center at (J, 0) and radius A[J].

We say that the J-th disc and K-th disc intersect if J ≠ K and the J-th and K-th discs have at least one common point (assuming that the discs contain their borders).

The figure below shows discs drawn for N = 6 and A as follows:

  A[0] = 1
  A[1] = 5
  A[2] = 2
  A[3] = 1
  A[4] = 4
  A[5] = 0


There are eleven (unordered) pairs of discs that intersect, namely:

discs 1 and 4 intersect, and both intersect with all the other discs;
disc 2 also intersects with discs 0 and 3.
Write a function:

function solution(A);

that, given an array A describing N discs as explained above, returns the number of (unordered) pairs of intersecting discs. The function should return −1 if the number of intersecting pairs exceeds 10,000,000.

Given array A shown above, the function should return 11, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [0..2,147,483,647].
Copyright 2009–2018 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

*/
function solution(data) {
  let result = 0
  const minMaxPoints = data
    .map((length, center) => [center - length, center + length])
    .sort(([a,], [b,]) => (a - b))

  for (let key = 0; key < data.length; key++) {
    const [currentRoundMin, currentRoundMax] = minMaxPoints[key]

    for (let innerKey = key + 1; innerKey < data.length; innerKey++) {
      const [checkIntersectsRoundMin, checkIntersectsRoundMax] = minMaxPoints[innerKey]

      if (currentRoundMin > checkIntersectsRoundMax || currentRoundMax < checkIntersectsRoundMin) {
        break
      } else {
        result++
      }

      if (result > 10000000) {
        return -1
      }
    }
  }

  return result
}

const test1 = () => {
  const data = [1, 5, 2, 1, 4, 0]

  const resultShouldBe = 11;
  
  console.time("solution");
  const result = solution(data);
  console.timeEnd("solution");

  console.log(result)
  console.log(resultShouldBe)
};
test1();
console.log("\n");

const test2 = () => {
  const data = Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 100));

  console.time("solution");
  const result = solution(data);
  console.timeEnd("solution");

  console.log(result)
};

test2();
console.log("\n");