function checkDuplicate(arr: number[]){
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) return true;
      }
    }
    return false;
  }
  
  console.log(checkDuplicate([1, 2, 3, 1])); // Output: true (karena ada angka 1 yang duplikat)