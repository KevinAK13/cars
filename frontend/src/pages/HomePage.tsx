import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Product } from "../Interfaces";
import { get_products } from "../api/products";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import toast from "react-hot-toast";
import SearchResults from "./SearchResults";
import { useSearchStore } from "../store/search";
import Loader from "../components/Loader";

const HomePage = () => {
  const { ref, inView } = useInView();
  const searchTerm = useSearchStore((state) => state.searchTerm);

  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["product"],
    get_products,
    {
      getNextPageParam: (page: any) => page.meta.next,
    }
  );

  

  useEffect(() => {
    if (inView && !searchTerm) {
      fetchNextPage();
    }
  }, [inView, searchTerm, fetchNextPage]);

  if (isLoading) return <Loader />;
  if (error instanceof Error) return <>{toast.error(error.message)}</>;
  
  return (
    <div className="container mx-auto p-8">
      {searchTerm ? (
        <SearchResults />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.pages.map((page: any) => (
              <React.Fragment key={page.meta.next}>
                {page.data.map((product: Product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </React.Fragment>
            ))}
          </div>

          {!isLoading && data?.pages.length === 0 && (
            <p className="text-xl text-slate-800 dark:text-slate-200 mt-4">
              No more results
            </p>
          )}
          {!isLoading && hasNextPage && (
            <div ref={ref} className="flex justify-center my-8">
              {isFetchingNextPage && (
                <p className="text-gray-600 dark:text-gray-400">Loading...</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
