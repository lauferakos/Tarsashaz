import { Action } from "@ngrx/store";
import { Condominium } from "../../Models/condominium.model";

export const GET_CONDOMINIUM = '[CONDOMINIUM] Get condominium';
export const GET_CONDOMINIUM_SUCCESS = '[CONDOMINIUM] Get condominium success';

export class GetCondominium implements Action {
  public readonly type = GET_CONDOMINIUM;
  constructor(public payload:number) {}
}

export class GetCondominiumSuccess implements Action {
  public readonly type = GET_CONDOMINIUM_SUCCESS;
  constructor(public payload: Condominium) { }
}

export type CondominiumActions = GetCondominium | GetCondominiumSuccess;
