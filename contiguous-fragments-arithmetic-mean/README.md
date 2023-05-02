# Count contiguous fragments with given arithmetic mean S in an array A.

You are given an array `A` of `N` integers and an integer `S`. Your task is to compute how many ways one can choose a contiguous fragment of `A` that has an arithmetic mean equal to `S`. The arithmetic mean (average) of a fragment is the sum of the elements of the fragment divided by its length. For example, the arithmetic mean of `[1, 4, 4, 5]` is `14/4 = 3.5`.

Write a function:
```
function solution(A, S);
```

which returns the number of contiguous fragments of `A` whose arithmetic means are equal to `S`.

If the result is greater than `1,000,000,000`, your function should return `1,000,000,000`.

1. Given A = [2, 1, 3] and S = 2, your function should return 3, since the arithmetic means of fragments [2], [1, 3] and [2, 1, 3] are equal to 2.

2. Given A = [0, 4, 3, -1] and S = 2, your function should return 2, since fragments [0, 4] and [4, 3, -1] have an arithmetic mean equal to 2.

3. Given A = [2, 1, 4] and S = 3, your function should return 0, since there exist no contiguous fragments whose arithmetic mean is equal to 3.

### Constraints

* N is an integer within the range `[1…100,000]`
* S is an integer within the range `[-1,000,000,000…1,000,000,000]`
* each element of array A is an integer within the range `[-1,000,000,000…1,000,000,000]`

The provided solution `solution.js` contains an implementation for the given task. It uses an object called `seen` to store the number of contiguous fragments with a given arithmetic mean encountered so far. The function iterates through the array `A`, updating the `seen` object and calculating the number of contiguous fragments with arithmetic mean equal to `S`.

## Solution Explanation
The function `solution` maintains two variables - `seen` and `curr`.

* `seen` is an object that keeps track of the number of contiguous fragments encountered so far, having a particular arithmetic mean. We initialize it with `{0: 1}` because we can always choose an empty array with arithmetic mean 0.

* `curr` is a variable that stores the sum of the elements in the current contiguous fragment, subtracted by S. For example, if the current contiguous fragment is `[2, 1, 3]` and `S = 2`, then curr will be equal to `(2 + 1 + 3) - (3 * 2) = 1`.

The function then iterates through the array `A` and performs the following steps for each element:

Update the curr variable with the new element's value: curr `+= A[i] - S`. This is done to maintain the sum of the current contiguous fragment with respect to the target average `S`.

Check if there exists a contiguous fragment with arithmetic mean equal to `S` that ends at the current index. We do this by checking if the value of `curr` has been seen before




