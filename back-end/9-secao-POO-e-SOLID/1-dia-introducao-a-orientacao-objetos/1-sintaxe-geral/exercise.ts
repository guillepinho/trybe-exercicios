class TV {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
      
    } else {
      console.log("Sorry, connection unavailable")
    }
  }

  turnOn(): void {
    console.log(this._brand, this._size, this._resolution, this._connections);
  }

}

const minhaTV = new TV('Acer', 27, '1920x1080', ['HDMI', 'DVI']);

minhaTV.turnOn();
minhaTV.connectedTo = 'HDMI';