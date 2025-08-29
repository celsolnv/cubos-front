export interface IPaginationManager {
  totalItems?: number;
  currentPage?: number;
  nextPage?: number | null;
  prevPage?: number | null;
  lastPage?: number;
}
export interface IPagination<T> {
  items: T[];
  pagination: IPaginationManager;
}

export interface IPaginationParams {
  search?: string;
  limit?: number;
  page?: number;
  orderValue?: "asc" | "desc";
  orderKey?: string;
}

export interface IQuery {
  page?: number;
  limit?: number;
  query?: string;
  initial_date?: string;
  final_date?: string;
}

export interface IManyAction {
  params: {
    id?: string | string[];
  };
  query?: {
    status?: boolean;
  };
}
