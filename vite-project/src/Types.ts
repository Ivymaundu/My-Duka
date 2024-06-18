// Define action types
export const PURCHASE_SUCCESS = 'PURCHASE_SUCCESS';
export const PURCHASE_FAILURE = 'PURCHASE_FAILURE';

// Define data types/interfaces
export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface TransactionState {
  loading: boolean;
  error: string | null;
}

// Define action interfaces
export interface PurchaseSuccessAction {
  type: typeof PURCHASE_SUCCESS;
}

export interface PurchaseFailureAction {
  type: typeof PURCHASE_FAILURE;
  payload: string;
}

export type TransactionActionTypes = PurchaseSuccessAction | PurchaseFailureAction;
