interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function carInfo(manufacturer: string, model: string, ...args: Array<any>): Car {
    const car: Car = { manufacturer, model };
    for (let i = 0; i < args.length; i += 2) {
      car[args[i]] = args[i + 1];
    }
    return car;
  }
  
  const myCar = carInfo('Toyota', 'Corolla', 'color', 'silver', 'year', 2022);
  console.log(myCar);
  