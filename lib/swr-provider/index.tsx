import { ReactNode } from "react";
import { SWRConfig } from "swr";
import { fetcher } from "../fetcher";

type Props = {
  children: ReactNode;
};

const SWRProvider = ({ children }: Props) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        suspense: false,
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRProvider;
