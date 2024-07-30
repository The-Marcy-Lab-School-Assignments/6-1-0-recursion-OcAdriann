// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr) => {
    if (arr.length === 0) return 0;
    return arr[0] + sum(arr.slice(1));
}

// Reverse string using recursive approach
const reverse = (str) => {
    if(str.length === 1) return str


    return reverse(str.substring(1)) + str[0]
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
    if(n === 0) return 0

    let first = 0
    let second = 1
    let fib = first + second

    for (let i = 2; i <= n; i++) {
        fib = first + second

        first = second

        second = fib

    }
    return fib
};

// Recursive fibonacci
const fibRec = (n) => {
    if(n === 0) return  0
    if(n === 1) return 1

    return fibRec(n - 1) + fibRec(n - 2)
};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
