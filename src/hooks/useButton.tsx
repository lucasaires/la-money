import { createContext, ReactNode, useContext, useState } from "react";

interface ButtonContextData {
  list: Button;
  modifyList: (listParam: Button) => void;
}

interface Button {
  key: number;
}

interface ButtonProviderProps {
  children: ReactNode;
}

const ButtonContext = createContext<ButtonContextData>({} as ButtonContextData);

export function ButtonProvider({ children }: ButtonProviderProps) {
  const [list, setList] = useState<Button>({} as Button);

  const modifyList = (listParam: Button) => {
    setList(listParam);
  };

  return (
    <ButtonContext.Provider value={{ list, modifyList }}>
      {children}
    </ButtonContext.Provider>
  );
}

export function useButton() {
  const context = useContext(ButtonContext);

  return context;
}
