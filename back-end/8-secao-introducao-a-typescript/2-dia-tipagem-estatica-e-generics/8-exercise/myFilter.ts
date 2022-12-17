type filterFunction<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, func: filterFunction<T>): Array<T> {
  const newArray: Array<T> = [];

  array.forEach((element, index, array) => {
    if(func(element, index, array)) {
      newArray.push(element);
    }
  });
  return newArray;
}

console.log(myFilter([1, 2, 3], (item, index, array) => item < 3));
