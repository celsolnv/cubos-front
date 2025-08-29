import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMovie } from "@/api/callers/movie";
import type { IMovie } from "@/types/IMovie";
import type { IQuery } from "@/types/IPagination";
import { debounce } from "@/utils/func";

export const usePage = () => {
  const [data, setData] = useState<IMovie[]>([]);
  const navigate = useNavigate();
  const [filters, setFilters] = useState<IQuery>({
    page: 1,
    limit: 10,
    query: "",
  });
  useMovie({
    enabled: true,
    filters,
    callbacks: {
      list: {
        onSuccess: (data) => {
          console.log("data", data);
          const formatter = data.items?.map((item: IMovie) => ({
            ...item,
            rating: item.rating * 10,
          }));
          setData(formatter);
        },
      },
    },
  });

  const debouncedSearch = useMemo(
    () =>
      debounce((param: string) => {
        setFilters((prevFilters) => ({ ...prevFilters, query: param }));
      }, 500),
    [setFilters],
  );

  const handleSearch = useCallback(
    (param: string) => {
      debouncedSearch(param);
    },
    [debouncedSearch],
  );

  const handleView = (id: string) => {
    navigate(`/details/${id}`);
  };

  return {
    data,
    setFilters,
    filters,
    handleSearch,
    handleView,
  };
};
