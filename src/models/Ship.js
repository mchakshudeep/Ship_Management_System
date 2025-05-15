class Ship {
  constructor(name, imoNumber, flag, status, components = []) {
    this.shipId=`S-${Math.random().toString(36).substr(2, 8)}`;
    this.name = name;
    this.imoNumber = imoNumber;
    this.flag = flag;
    this.status = status || "Active"; 
    this.components = components; // Array to hold ship components
  }

 
  validate() {
    if (!this.name || !this.imoNumber || !this.flag) {
      throw new Error("All fields are required.");
    }
  }

  
  addComponent(component) {
    this.components.push(component);
  }

  
  removeComponent(componentId) {
    this.components = this.components.filter(
      (component) => component.componentId !== componentId
    );
  }
}

export default Ship;
