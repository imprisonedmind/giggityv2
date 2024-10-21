"use client";
import React, { createContext, ReactNode, useContext, useState } from "react"; // Define the shape of the context value

// Define the shape of the context value
interface SearchContextType {
  searchQuery: string | undefined;
  setSearchQuery: (query: string) => void;
}

// Create the context with a default value
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Create a provider component
export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the search context
export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
