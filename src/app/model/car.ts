import {Image} from "./image";

export interface Car {

  id: number;
  carNumber: string;
  carModel: string;
  carColor: string;
  carOwner: string;
  carKind : string;
  side: string;
  category: number;
  licenseImg: string;
  qrcode: string;
  licenseImage: Image;
  personalImage: Image;




}
