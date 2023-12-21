// SoloProduct.js
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import { get_solo } from "../api/products";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Reviews from "../components/Reviews";


const SoloProduct = () => {
    const { slug } = useParams();

    const { data, isError, isLoading } = useQuery({
        queryKey: ['products', slug],
        queryFn: () => get_solo(slug || ''),
    });

    if (isError) {
        toast.error("Error!");
        return null; // or handle error rendering
    }

    if (isLoading || !data) {
        return <Loader />;
    }

    const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(data.price);

    return (
        <div className="container mx-auto p-4 sm:p-8">
            <div className="flex flex-col md:flex-row items-center justify-center mb-4">
                <img
                    className="max-w-full h-auto md:max-w-xl rounded-lg"
                    src={`${import.meta.env.VITE_BACKEND_URL}${data.image}`}
                    alt={data.name}
                />

                <div className="max-w-md md:max-w-2xl w-full bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg md:ml-4">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                        {data.name}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                        {data.description}
                    </p>
                    <p className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-4">
                        {formattedPrice}
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 bg-primary-700 dark:bg-primary-600 border border-transparent rounded-md font-semibold text-white hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                        Add to Cart
                        <svg
                            aria-hidden="true"
                            className="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        </a>

</div>

</div>
<Reviews productId={data.id} reviews={data.reviews}/>
</div>
);
};

export default SoloProduct;
