/*
Description:
The makeLooper() function (or make_looper in your language) takes a string (of non-zero length) as an argument. It returns a function. The function it returns will return successive characters of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.

For example:

var abc = makeLooper('abc');
abc(); // should return 'a' on this first call
abc(); // should return 'b' on this second call
abc(); // should return 'c' on this third call
abc(); // should return 'a' again on this fourth call
Different loopers should not affect each other, so be wary of unmanaged global state.
*/
function makeLooper(str) {
  const arr = [...str];

  return function () {
    const result = arr.shift();
    arr.push(result);

    return result;
  };
}

var abc = makeLooper('abc');
console.log(abc()); //'a'
console.log(abc()); //'b'
console.log(abc()); //'c'
console.log(abc()); //'a'
