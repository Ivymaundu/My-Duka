// API.ts
export interface OrderResponse {
    total: number;
    discountedTotal: number;
    products: {
      title: string;
      quantity: number;
      discountedPrice: number;
    }[];
  }
  
  export interface RevenueResponse {
    carts: {
      userId: number;
      discountedTotal: number;
    }[];
  }
  
  export interface InventoryResponse {
    total: number;
  }
  
  export interface CustomerResponse {
    total: number;
  }
  
  export interface CommentResponse {
    comments: {
      id: number;
      body: string;
      postId: number;
    }[];
  }
  
  export const getOrders = (): Promise<OrderResponse> => {
    return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
  };
  
  export const getRevenue = (): Promise<RevenueResponse> => {
    return fetch("https://dummyjson.com/carts").then((res) => res.json());
  };
  
  export const getInventory = (): Promise<InventoryResponse> => {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
  };
  
  export const getCustomers = (): Promise<CustomerResponse> => {
    return fetch("https://dummyjson.com/users").then((res) => res.json());
  };
  
  export const getComments = (): Promise<CommentResponse> => {
    return fetch("https://dummyjson.com/comments").then((res) => res.json());
  };
  