This error occurs when you try to access a property of a null or undefined object in React Native.  It's common when dealing with asynchronous operations where data might not have loaded yet.

```javascript
// buggy code
this.state.user.name // error if this.state.user is null or undefined
```