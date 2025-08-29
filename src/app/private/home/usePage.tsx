import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMovie } from "@/api/callers/movie";
import type { TFormData } from "@/components/movie-sidebar/constants";
import { useManagerForm } from "@/logic/form";
import type { IMovie } from "@/types/IMovie";
import type { IQuery } from "@/types/IPagination";
import { debounce } from "@/utils/func";

export const usePage = () => {
  const [data, setData] = useState<IMovie[]>([]);
  const [pagination, setPagination] = useState();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [filters, setFilters] = useState<IQuery>({
    page: 1,
    limit: 10,
    query: "",
  });
  const setIsLoading = useManagerForm().setIsLoading;
  const { create, list } = useMovie({
    enabled: true,
    filters,
    callbacks: {
      list: {
        onSuccess: (data) => {
          const formatter = data.items?.map((item: IMovie) => ({
            ...item,
            rating: item.rating * 10,
          }));
          setData(formatter);
          setPagination(data.pagination);
        },
      },
      create: {
        onSuccess: () => {
          list.refetch();
          setIsSidebarOpen(false);
          setIsLoading(false);
        },
        onError: () => {
          setIsLoading(false);
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

  const handleCreate = (data: TFormData) => {
    setIsLoading(true);
    create.mutate(data);
  };

  return {
    data,
    setFilters,
    filters,
    handleSearch,
    handleView,
    handleCreate,
    isSidebarOpen,
    setIsSidebarOpen,
    pagination,
  };
};
