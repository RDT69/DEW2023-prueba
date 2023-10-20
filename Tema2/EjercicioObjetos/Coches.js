  
    function carMaker(registration, make, model, year){
        return {
            registration,
            make,
            model,
            year,
            getMokeModel: function(){return `${this.make} ${this.model}`},
                thisYearHasITV(){
                years = (new Date()).getFullYear() - this.year;
                return years>= 10 || (years >= 4 && years%2==0);
            },

            toString: function(){
                return `${this.registration} - ${this.make} - ${this.model} - ${this.year}`
            },
        }
}
    
    let car1 = carMaker("8482LST","Ford","Fiesta",2020 );

    console.log(car1.getMakeModel);
    console.log("coche 1 tiene que pasar la ITV" + car1.thisYearHasITV);
    console.log("coche 1 es : " + car1);

    let car2 = carMaker("8482MDT","Honda","Civic",2000 );

    console.log(car2.getMakeModel);
    console.log("coche 2 tiene que pasar la ITV" + car2.thisYearHasITV);
    console.log("coche 2 es : " + car2);

    let car3 = carMaker("TF8482AZ","Ferrari","Carrera", 1999 );

    console.log(car3.getMakeModel);
    console.log("coche 3 tiene que pasar la ITV" + car3.thisYearHasITV);
    console.log("coche 3 es : " + car3);

    let garage = [car1, car2, car3];
    console.log(garage);
    console.log('----------------------------');
    console.log(car1);

    //COPIAR/CLONAR UN OBJETO LET "nombre del nuevo objerto" = {...nombre del objeto copiado.}]
    let car1b = {...car1};
    //MODIFICAR LOS DATOS DEL OBJETO COPIADO/CLONADO.
    car1b.registration = "1111AAA";
    car1b.year = 2019;


    console.log('----------------------------');
    console.log(car1b);
    console.log(car1b.getMokeModel());

    console.log("car1b es: " + car1b);
    console.log("car1b tiene que pasar la ITV: " + car1b.thisYearHasITV());
    console.log(car1);
    garage.push(car1b);
    let car2b = {...car2}
    car2b.registration = '2222BBB';
    car2b.age = 2000;
    garage.push(car2b);

    //Muesta el listado de marcas concreto.
    let fords = garage.filter(car => car.make == "Ford");
    console.log("Listado de coches ford.");
    fords.forEach(car => console.log(" - " + car));

    //Muesta el listado de coches posteriores a una fecha.
    let news = garage.filter(car => car.year > 1000);
    console.log("Coches posteriores a esa dicha decha");
    news.forEach(car => console.log(" - " + car));
