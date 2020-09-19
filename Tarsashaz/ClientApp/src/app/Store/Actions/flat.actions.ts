import { Action } from '@ngrx/store';
import { Flat } from '../../Models/flat.model';

export const FLAT_ADDED = '[FLAT] Flat added';
export const FLAT_ADDED_SUCCESS = '[FLAT] Flat added success';

export const ACTUAL_FLAT_CHANGED = '[FLAT] Actual flat changed';
export const ACTUAL_FLAT_CHANGED_SUCCESS = '[FLAT] Actual flat changed success';

export const ACTUAL_FLAT_UPDATED = '[FLAT] Actual flat updated';
export const ACTUAL_FLAT_UPDATED_SUCCESS = '[FLAT] Actual flat updated success';

export class FlatAdded implements Action {
  public readonly type = FLAT_ADDED;
  constructor(public payload: Flat) { }
}

export class FlatAddedSuccess implements Action {
  public readonly type = FLAT_ADDED_SUCCESS;
  constructor(public payload: Flat) { }
}

export class ActualFlatChanged implements Action {
  public readonly type = ACTUAL_FLAT_CHANGED;
  constructor(public payload: number) { }
}

export class ActualFlatChangedSuccess implements Action {
  public readonly type = ACTUAL_FLAT_CHANGED_SUCCESS;
  constructor(public payload: Flat) { }
}

export class ActualFlatUpdated implements Action {
  public readonly type = ACTUAL_FLAT_UPDATED;
  constructor(public payload: Flat) { }
}

export class ActualFlatUpdatedSuccess implements Action {
  public readonly type = ACTUAL_FLAT_UPDATED_SUCCESS;
  constructor(public payload: Flat) { }
}

export type FlatActions = FlatAdded | FlatAddedSuccess | ActualFlatChanged | ActualFlatChangedSuccess | ActualFlatUpdated | ActualFlatUpdatedSuccess;
