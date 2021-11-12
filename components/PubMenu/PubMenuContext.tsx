import { createContext, FC } from "react";
import { useQuery } from "react-query";
import { Menu } from "../../api/types";

export interface PubMenuContext {
  isLoading: boolean;
  error: unknown;
  data: Menu;
}

export const pubMenuContext = createContext<PubMenuContext>(undefined);

export const PubMenuProvider: FC = ({ children }) => {
  const fetchMenu = async () => {
    const res = await fetch("/api/menu", {
      method: "GET",
    });

    return res.json();
  };

  const { isLoading, error, data } = useQuery<Menu>("menu", fetchMenu);

  return (
    <pubMenuContext.Provider value={{ isLoading, error, data }}>
      {children}
    </pubMenuContext.Provider>
  );
};
