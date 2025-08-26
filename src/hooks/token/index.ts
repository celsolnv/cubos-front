export const getToken = () => {
  const local_token = localStorage.getItem(
    import.meta.env.VITE_PUBLIC_TOKEN_LOCAL,
  );
  return local_token;
};

export const setToken = async (token: string) => {
  localStorage.setItem(import.meta.env.VITE_PUBLIC_TOKEN_LOCAL, token);
};
