import { useCallback, useState } from "react";

import { useMovie } from "@/api/callers/movie";
import type { IMovie } from "@/types/IMovie";
import type { IQuery } from "@/types/IPagination";
import { debounce } from "@/utils/func";

export const usePage = () => {
  const [data, setData] = useState<IMovie[]>([]);
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

  const handleSearch = useCallback(
    debounce((param: string) => {
      const query = param;
      setFilters({ ...filters, query });
    }, 500),
    [],
  );

  return {
    data,
    setFilters,
    filters,
    handleSearch,
  };
};
