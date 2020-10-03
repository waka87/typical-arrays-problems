
exports.min = function min (array) {
  var min;
  if (array.length === 0) {
    return 0;
  } else {
    for ( var i = 0; i < (array.length - 1); i++) {
      if (array[i] < array[i+1]) {
        min = array[i];
      } else {
        min = array[i+1];
      }
    }
    return min;
  }
  
}

exports.max = function max (array) {
  var max;
  if (array.length === 0) {
    return 0;
  } else {
    for ( var i = 0; i < (array.length - 1); i++) {
      if (array[i] > array[i+1]) {
        max = array[i];
      } else {
        max = array[i+1];
      }
    }
    return max;
  }
}

exports.avg = function avg (array) {
  var avg;
  var sum = 0;
  if (array.length === 0) {
    return 0;
  } else {
    for ( var i = 0; i <= (array.length - 1); i++) {
      sum = sum + array[i];
    }
    avg = sum / (array.length);
    return avg;
  }
}
