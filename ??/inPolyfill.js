function nullish(value, fb) {
  return (value !== null && value !== undefined) ? value : fb;
}

console.log(nullish(undefined, "x")); 
console.log(nullish(null, "y"));     
console.log(nullish(0, "z"));      

function chain(...values) {
  for (let val of values) {
    if (val !== null && val !== undefined) {
      return val;
    }
  }
  return undefined;
}

console.log(chain(null, undefined, 0, "Hey")); 
console.log(chain(undefined, null, undefined, "Hello")); 
