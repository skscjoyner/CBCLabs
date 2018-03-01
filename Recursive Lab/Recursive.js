let array = [[1,2,[3]],4];
let result = [];

sortArray = (a) =>
  {
    for(var i = 0; i < a.length; i++)
    {
      if(Array.isArray(a[i]))
      {
        sortArray(a[i]);
      }
      else
      {
        result.push(a[i]);
      }
    }
  }

sortArray(array);
console.log(result);
