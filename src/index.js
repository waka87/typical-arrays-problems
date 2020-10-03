
exports.min = function min (array) {
  var min = 0;
  if (array) {
    for ( var i = 0; i < array.length; i++) {
      if ( min > array[i]) {
        min = array[i];
      } 
    }
    return min;
  } else {
  return 0;
  }
  
}

exports.max = function max (array) {
  var max = 0;
  if (array) {
    for ( var i = 0; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
      } 
    }
    return max;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  var avg;
  var sum = 0;
  if (array) {
    if (array.length === 0) {
      return 0;
    } 
      else {
        for ( var i = 0; i <= (array.length - 1); i++) {
          sum = sum + array[i];
        }
        avg = sum / (array.length);
        return avg;
      }
  } else {
    return 0;
  }
}
