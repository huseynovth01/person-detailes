class Person{
  constructor(name, age, country){
    this.name = name;
    this.age = age;
    this.country=country;
  }
  displayDetailes(){
    console.log(`Name:${this.name}`);
    console.log(`Age:${this.age}`);
    console.log(`Country:${this.country}`);
  }
}
const person = new Person('Mike Tyson',58,'USA');
person.displayDetailes();