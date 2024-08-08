function generarSubsets(array) {
  let pasos = 0;

  function generateHelper(subset, index) {
    // Contar solo cuando se genera completamente un subconjunto
    if (index === array.length) {
      console.log(subset);
      pasos++;
      return;
    }
    generateHelper([...subset, array[index]], index + 1);
    generateHelper(subset, index + 1);
  }
  generateHelper([], 0);
  console.log({ datos: array.length, pasos });
}

// generarSubsets([1, 2]);
// generarSubsets([1, 2, 3]);
// generarSubsets([1, 2, 3, 4]);
// generarSubsets([1, 2, 3, 4, 5]);
// generarSubsets([1, 2, 3, 4, 5, 6]);
generarSubsets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
