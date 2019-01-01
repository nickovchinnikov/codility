function solution(A) {
  const [result] = A.reduce(([minIdx, minSlice], val, idx) => {
    const secondItem = A[idx + 1]

    if (secondItem === undefined) {
      return [minIdx, minSlice]
    }

    const firstSum = (val + secondItem) / 2

    const thirdItem = A[idx + 2]
    const secondSum = (val + secondItem + thirdItem) / 3

    const avgSum = thirdItem === undefined ? firstSum : Math.min(firstSum, secondSum)
    
    return avgSum < minSlice ? [idx, avgSum] : [minIdx, minSlice]
  }, [0, Number.MAX_SAFE_INTEGER])

  return result
}
