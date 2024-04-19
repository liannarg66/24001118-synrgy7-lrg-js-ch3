function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  function bubbleSortbyAscendingly(cars, val){
    let temp;
    const n = cars.length

    for(let i=0; i < n-1; i++) {
        for(j=0; j < n-i-1; j++){
            if(cars[j][val] > cars[j+1][val]) {
                temp = cars[j];  
                cars[j] = cars[j+1]; 
                cars[j+1] = temp;
           }
       }
    }

  return cars
}

const finalresult = bubbleSortbyAscendingly(result, 'year');
  
  // Rubah code ini dengan array hasil sorting secara ascending
  return finalresult;
}