const deleteProperty = (arr) => {
  const obj = arr[0];
  const prop = arr[1];

  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return 'YES';
  } else {
    return 'NO';
  }
}
console.log(deleteProperty([
  {
    fname: 'John',
  }, 'fname'
]));
console.log(deleteProperty([
  {
    lastName: 'Mithila',
  }, 'fname'
]));