import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // This is the eslint-disable-next-line class-methods-use-this
  cloneCar() {
    const Clone = super.constructor[Symbol.species];
    return new Clone();
  }
}  
