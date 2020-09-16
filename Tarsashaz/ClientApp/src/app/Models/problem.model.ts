import { ProblemType } from "../Enums/ProblemType";
import { Picture } from "./picture.model";

export interface Problem {
  type: ProblemType;
  text: string;
  pictures: Picture[];
 
}
