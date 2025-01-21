import {Image} from "./image";

export interface CarRequest {

  id: number;
  carNumber: string;
  carModel: string;
  carColor: string;
  carOwner: string;
  carKind : string;
  side: string;
  licenseImg: string;
  qrcode: string;
  licenseImage?: File;
  personalImage?: File;
}
