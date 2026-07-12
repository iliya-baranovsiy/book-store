import type { TPagination } from "../../types/pagination.types";

export default function getPagination(
  currentPage: number,
  totalPages: number,
  mobile: boolean,
): TPagination {
  if (totalPages <= 0) {
    return {
      prevent: false,
      next: false,
      pagination: [],
    };
  }

  const page = Math.min(Math.max(currentPage, 1), totalPages);

  const pagination: (number | string)[] = [];

  function add(page: number) {
    if (!pagination.includes(page)) {
      pagination.push(page);
    }
  }

  const addDots = () => {
    if (pagination[pagination.length - 1] !== "...") {
      pagination.push("...");
    }
  };

  add(1);

  const delta = mobile ? 1 : 2;

  const start = Math.max(2, page - delta);
  const end = Math.min(totalPages - 1, page + delta);

  if (start > 2) {
    addDots();
  }

  for (let i = start; i <= end; i++) {
    add(i);
  }

  if (end < totalPages - 1) {
    addDots();
  }

  if (totalPages > 1) {
    add(totalPages);
  }

  return {
    prevent: page > 1,
    next: page < totalPages,
    pagination,
  };
}
