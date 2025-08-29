import { useEffect } from "react";

import * as api from "@/api/req/movie";
import type { IUseCallerProps } from "@/api/types";
import type { IMovie } from "@/types/IMovie";
import type { IPagination } from "@/types/IPagination";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useMovie = (item?: IUseCallerProps<IMovie>) => {
  const module = "movie";
  const key = [module, item?.filters];

  const list = useQuery<IPagination<IMovie>>({
    queryKey: key,
    queryFn: () => api.list(item?.filters),
    refetchOnWindowFocus: false,
    enabled: item?.enabled,
  });

  const destroy = useMutation({
    mutationFn: (id: string) => api.destroy(id),
    onSuccess: (data) => {
      if (item?.callbacks?.destroy?.onSuccess) {
        item.callbacks.destroy.onSuccess(data);
      }
    },
  });

  const create = useMutation({
    mutationFn: (body: api.ICreate) => api.create(body),
    onSuccess: (data) => {
      if (item?.callbacks?.create?.onSuccess) {
        item.callbacks.create.onSuccess(data);
      }
    },
    onError: () => {
      if (item?.callbacks?.create?.onError) {
        item.callbacks.create.onError();
      }
    },
  });

  const update = useMutation({
    mutationFn: (body: api.IUpdate) => api.update(body, item!.id!),
    onSuccess: (data) => {
      if (item?.callbacks?.update?.onSuccess) {
        item.callbacks.update.onSuccess(data);
      }
    },
    onError: () => {
      if (item?.callbacks?.update?.onError) {
        item.callbacks.update.onError();
      }
    },
  });

  const show = useQuery<IMovie>({
    queryKey: [...key, item?.id],
    queryFn: () => api.show(item!.id!),
    refetchOnWindowFocus: false,
    enabled: !!item?.show,
  });

  useEffect(() => {
    if (show.isSuccess && item?.callbacks?.show?.onSuccess) {
      item.callbacks.show.onSuccess(show.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show.dataUpdatedAt]);

  useEffect(() => {
    if (list.isSuccess && item?.callbacks?.list?.onSuccess) {
      item.callbacks.list.onSuccess(list.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list.dataUpdatedAt]);

  return { list, destroy, create, update, show, status };
};
