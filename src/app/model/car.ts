import {Image} from "./image";

export interface Car {

  id: number;
  carNumber: string;
  carModel: string;
  carColor: string;
  carOwner: string;
  carKind : string;
  side: string;
  licenseImg: string;
  qrcode: string;
  image: Image;


}
