import { type Dispatch, type FC, type SetStateAction, createContext, useContext, useState } from "react";

const searchModalIsOpenContext = createContext<boolean>(false);
const setSearchModalIsOpenContext = createContext<Dispatch<SetStateAction<boolean>>>(() => undefined);

type Props = {
  children: React.ReactNode;
};
export const SearchModalIsOpenProvider: FC<Props> = ({ children }) => {
  const [searchModalIsOpen, setSearchModalIsOpen] = useState<boolean>(false);

  return (
    <searchModalIsOpenContext.Provider value={searchModalIsOpen}>
      <setSearchModalIsOpenContext.Provider value={setSearchModalIsOpen}>
        {children}
      </setSearchModalIsOpenContext.Provider>
    </searchModalIsOpenContext.Provider>
  );
};

export const useSearchModalIsOpen = () => useContext(searchModalIsOpenContext);
export const useSetSearchModalIsOpen = () => useContext(setSearchModalIsOpenContext);
