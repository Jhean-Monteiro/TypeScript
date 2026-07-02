type MapStringCallback = (item: string) => string;

function mapString(array: string[], callbackFn: MapStringCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackFn(array[i]));
  }

  return newArray;
}

const abc = ["a", "b", "c"];
const abcMapped = mapString(abc, (item: string) => {
  return item.toUpperCase();
});

const abcDuplicated = mapString(abc, (item) => item + item);

console.log(abcMapped);
console.log(abcDuplicated);

export {};
