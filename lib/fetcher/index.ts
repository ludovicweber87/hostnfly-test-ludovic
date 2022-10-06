type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";

export const fetcher = async <T>(
  url: string,
  config: { method: Method }
): Promise<T> => {
  const response: Promise<T> = fetch(url, config)
    .then((response) => response.json())
    .catch((error) => error);

  return response;
};
