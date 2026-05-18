import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchProducts,
  setProductParams,
} from "../../store/actions/productActions";

const PaginationArea = () => {
  const dispatch = useAppDispatch();

  const { categoryId, id } = useParams<{ categoryId?: string; id?: string }>();
  const activeCategoryId = categoryId || id;

  const totalProducts = useAppSelector((state) => state.product.total);
  const offset = useAppSelector((state) => state.product.offset);

  const LIMIT = 25;
  const currentPage = Math.floor(offset / LIMIT) + 1;
  const totalPages = Math.ceil(totalProducts / LIMIT);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;

    const newOffset = (pageNumber - 1) * LIMIT;

    dispatch(setProductParams({ offset: newOffset }));

    dispatch(fetchProducts(activeCategoryId, newOffset));
  };

  if (totalPages <= 1) return null;

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="flex justify-center my-12">
      <div className="flex text-[#23A6F0]">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-6 border border-[#E9E9E9] rounded-tl-lg rounded-bl-lg font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] ${
            currentPage === 1
              ? "bg-[#F3F3F3] text-[#BDBDBD] cursor-not-allowed"
              : "bg-white text-[#23A6F0] hover:bg-gray-50"
          }`}
        >
          First
        </button>

        <ul className="flex">
          {pageNumbers.map((number) => (
            <li
              key={number}
              onClick={() => handlePageChange(number)}
              className={`font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-center p-6 border border-[#E9E9E9] cursor-pointer transition-colors ${
                currentPage === number
                  ? "bg-[#23A6F0] text-white"
                  : "bg-white text-[#23A6F0] hover:bg-gray-50"
              }`}
            >
              {number}
            </li>
          ))}
        </ul>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-6 border border-[#E9E9E9] rounded-tr-lg rounded-br-lg font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] ${
            currentPage === totalPages
              ? "bg-[#F3F3F3] text-[#BDBDBD] cursor-not-allowed"
              : "bg-white text-[#23A6F0] hover:bg-gray-50"
          }`}
        >
          Last
        </button>
      </div>
    </section>
  );
};

export default PaginationArea;
