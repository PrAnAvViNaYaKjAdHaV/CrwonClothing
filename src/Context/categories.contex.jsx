import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../util/firebase/firebase.util.js";

export const CategoriesContext = createContext({
  categoreisMap:{},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setgetCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();

      setgetCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = {categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
