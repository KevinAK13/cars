// Importa las bibliotecas y componentes necesarios
import { useSearchStore } from "../store/search";
import ProductCard from "../components/ProductCard";
import { Product } from "../Interfaces";
import { search_prod } from "../api/products";
import { useQuery } from "@tanstack/react-query";

const SearchResults = () => {
  // Obtiene el término de búsqueda del estado global
  const searchTerm = useSearchStore((state) => state.searchTerm);

  // Realiza la consulta con el término de búsqueda
  const { data } = useQuery({
    queryKey: ["products", searchTerm],
    queryFn: () => {
        if (searchTerm) {
            return search_prod(searchTerm);
        }
        return { products: [] };
    },
});


  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Mapea y muestra los resultados de la búsqueda */}
        {data && data.products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

