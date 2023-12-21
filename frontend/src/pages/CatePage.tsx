import { Link } from "react-router-dom";
import lux from '../assets/lux.png';
import sedan from '../assets/sedan.png';
import suv from '../assets/suv.png';


const CatePage = () => {

    return (
        <div className="flex justify-center">
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16">

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to={`/cate/SUV`}>
                        <img
                            className="rounded-t-lg"
                    src={suv}
                            alt=""
                        />
                    </Link>
                    <div className="p-5 ">
                        <Link to={`/cate/SUV`}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                SUV'S
                            </h5>
                        </Link>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/cate/Sedan`}>
                        <img
                            className="rounded-t-lg"
                            src={sedan}
                            alt=""
                        />
                    </Link>
                    <div className="p-5 ">
                        <Link to={`/cate/Sedan`}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Sedan
                            </h5>
                        </Link>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/cate/Luxury`}>
                        <img
                            className="rounded-t-lg"
                            src={lux}
                            alt=""
                        />
                    </Link>
                    <div className="p-5 ">
                        <Link to={`/cate/Luxury`}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Luxury
                            </h5>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default CatePage;