type SortObject = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

type PageableObject = {
  offset: number;
  sort: SortObject;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
};

export interface PaginatedResponse<T> {
  totalPages: number;
  totalElements: number;
  size: number;
  content: T[];
  sort: SortObject;
  pageable: PageableObject;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}
