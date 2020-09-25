import { Action } from "@ngrx/store";
import { Condominium } from "../../Models/condominium.model";
import { Announcement } from "../../Models/announcement.model";

export const GET_CONDOMINIUM = '[CONDOMINIUM] Get condominium';
export const GET_CONDOMINIUM_SUCCESS = '[CONDOMINIUM] Get condominium success';

export const ACTUAL_CON_CHANGED = '[CONDOMINIUM] Actual condominium changed';

export class GetCondominium implements Action {
  public readonly type = GET_CONDOMINIUM;
  constructor(public payload:number) {}
}

export class GetCondominiumSuccess implements Action {
  public readonly type = GET_CONDOMINIUM_SUCCESS;
  constructor(public payload: Condominium) { }
}

export class ActualConChanged implements Action {
  public readonly type = ACTUAL_CON_CHANGED;
  constructor(public payload: Condominium) { }
}

export type CondominiumActions = GetCondominium | GetCondominiumSuccess | ActualConChanged;
