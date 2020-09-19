import { FlatDataType } from "../Enums/FlatDataType";
import { Picture } from "./picture.model";
export interface FlatData {
  id: number;
  flatId: number;
  type: FlatDataType;
  pics: Picture[];
  text: string;

}
