# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly updating the state variable within the effect's callback.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides the corrected implementation.

## Bug Description
The `useEffect` hook is designed to perform side effects based on changes in state or props.  However, if the effect's callback modifies the state variable that it depends on, it can trigger an infinite loop.

## Solution
The solution involves restructuring the logic to avoid directly updating the `count` variable within the effect callback. We use `setTimeout` to update the count.  This approach prevents the infinite loop.