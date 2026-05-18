import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { List, Boxes } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  fetchProducts,
  setProductParams,
} from "../store/actions/productActions";
import SortDropdown from "./sortDropdown";

const ProductFilter = () => {
  const dispatch = useAppDispatch();
  const { categoryId, id } = useParams<{ categoryId?: string; id?: string }>();
  const activeCategoryId = categoryId || id;
  const totalProducts = useAppSelector((state) => state.product.total);
  const [localFilter, setLocalFilter] = useState("");
  const [localSort, setLocalSort] = useState("");

  useEffect(() => {
    if (activeCategoryId) {
      dispatch(
        setProductParams({
          category: activeCategoryId,
          sort: localSort,
          filter: localFilter,
          offset: 0,
        }),
      );

      dispatch(fetchProducts(activeCategoryId));
    }
  }, [activeCategoryId, dispatch]);

  const handleFilterClick = () => {
    dispatch(
      setProductParams({
        filter: localFilter,
        sort: localSort,
        offset: 0,
      }),
    );

    dispatch(fetchProducts(activeCategoryId));
  };

  return (
    <div className="max-w-262.5 w-full flex justify-between items-center max-lg:flex-col max-lg:gap-3 p-4">
      <div className="text-[#737373] font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px]">
        Showing all {totalProducts || 0} results
      </div>

      <div className="flex flex-row items-center gap-4">
        <span className="font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#737373]">
          Views:
        </span>
        <button className="p-4 border border-[#ECECEC] rounded-sm">
          <Boxes size={14} color="#252B42" />
        </button>
        <button className="p-4 border border-[#ECECEC] rounded-sm">
          <List size={14} color="#252B42" />
        </button>
      </div>

      <div className="flex gap-4 items-center max-sm:flex-col max-sm:w-full">
        <input
          type="text"
          placeholder="Search products..."
          value={localFilter}
          onChange={(e) => setLocalFilter(e.target.value)}
          className="border border-[#ECECEC] rounded-md px-3 py-2 text-sm text-[#737373] bg-white focus:outline-none focus:border-[#23A6F0] h-12.5"
        />

        <div>
          <SortDropdown
            value={localSort}
            onChange={(selectedSort) => {
              setLocalSort(selectedSort);

              dispatch(setProductParams({ sort: selectedSort, offset: 0 }));

              dispatch(fetchProducts(activeCategoryId));
            }}
          />
        </div>

        <button
          onClick={handleFilterClick}
          className="flex items-center justify-center w-23.5 h-12.5 font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-center bg-[#23A6F0] text-white rounded-md hover:bg-[#1a8cd2] transition-colors"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
