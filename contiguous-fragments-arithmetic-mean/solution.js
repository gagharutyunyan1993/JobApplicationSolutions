function solution(A, S) {
    // initialize an object to store the occurrences of prefix sums
    const seen = {};
    // initialize the prefix sum, starting from 0
    let curr = 0;
    // set the initial occurrence of prefix sum 0 to 1
    seen[0] = 1;
    // initialize the result counter
    let ret = 0;

    // iterate through the array A
    for (let i = 0; i < A.length; i++) {
        // calculate the new prefix sum by adding the current element and subtracting S
        curr += A[i] - S;
        // add the occurrence of the current prefix sum to the result
        // if it exists in the seen object, otherwise add 0
        ret += seen[curr] || 0;
        // increment the occurrence of the current prefix sum in the seen object
        seen[curr] = (seen[curr] || 0) + 1;
    }

    // return the final result
    return ret;
}