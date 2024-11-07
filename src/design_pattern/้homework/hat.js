// Hat.js
class Hat {
    constructor(color, material, size) {
      this.color = color;
      this.material = material;
      this.size = size;
    }
  
    wear() {
      console.log(`Wearing a ${this.color} hat made of ${this.material} with size ${this.size}.`);
    }
  }
  
  class StrawHat extends Hat {
    constructor(color, size) {
      super(color, 'straw', size);
    }
  
    wear() {
      console.log(`Wearing a straw hat in ${this.color} color with size ${this.size}.`);
    }
  }
  
  export { Hat, StrawHat };
  