function bucketSort(array, bucketSize) {
  if (array.length <= 1) {
    return array;
  }

  let minValue = array[0];
  let maxValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  bucketSize = bucketSize || 5;
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount).fill(null).map(() => []);

  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(array[i]);
  }

  array.length = 0;
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i].length > 0) {
      insertionSort(buckets[i]);
      array.push(...buckets[i]);
    }
  }

  return array;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const currentValue = array[i];
    let j = i - 1;
    
    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentValue;
  }
  return array;
}

module.exports = bucketSort;