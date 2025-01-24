The solution is to add checks to ensure the object and its properties exist before accessing them.  This usually involves optional chaining or nullish coalescing.

```javascript
// Solution
this.state.user?.name ?? 'Unknown'
//or
if (this.state.user && this.state.user.name) {
  // Access name property
} else {
  // Handle the case where user or name is undefined
}
```
Optional chaining (`?.`) will short-circuit if `this.state.user` is null or undefined, preventing the error. The nullish coalescing operator (`??`) provides a default value if the expression to the left is null or undefined.