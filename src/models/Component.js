class Component {
  constructor(name, serialNumber, installationDate, lastMaintenanceDate, shipId) {
    this.componentId = `C-${Math.random().toString(36).substr(2, 8)}`
    this.name = name;
    this.serialNumber = serialNumber;
    this.installationDate = installationDate;
    this.lastMaintenanceDate = lastMaintenanceDate;
    this.shipId = shipId; 
  }

  
  validate() {
        if ( !this.name || !this.serialNumber ||!this.installationDate) {
        throw new Error("All fields are required.");
        }
    };
    
 
    updateMaintenanceDate(date) {
        this.lastMaintenanceDate = date;
    }

    linkToShip(shipId) {
        this.shipId = shipId;
    }
}

    


export default Component;
