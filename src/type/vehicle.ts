export interface IVehicleAll {
  vehicles: IVehicle[];
}

export interface IVehicle {
  description: string;
  icons: IIcons;
  level: number;
  nation: {
    color: string;
    name: string;
    title: string;
    icons: IIcons;
  };
  title: string;
  type: {
    icons: {
      default: string;
    };
    name: string;
    title: string;
  };
}

interface IIcons {
  large: string | null;
  medium: string | null;
  small: string | null;
}
