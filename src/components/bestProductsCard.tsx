import { useHistory } from "react-router-dom";

function BestProductsCard({ product }: { product: any }) {
  const history = useHistory();

  if (!product) return null;

  const slugify = (text: string) => {
    if (!text) return "";
    return text
      .toLowerCase()
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ç/g, "cc")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  const handleCardClick = () => {
    const gender = product.category_id % 2 === 0 ? "erkek" : "kadin";
    const categoryName = "giyim";
    const productSlug = slugify(product.name);

    history.push(
      `/shop/${gender}/${categoryName}/${product.category_id}/${productSlug}/${product.id}`,
    );
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-60 flex flex-col items-center text-center bg-white rounded-md p-4 border border-gray-100 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
    >
      <div className="overflow-hidden rounded-sm w-full h-75 mb-4">
        <img
          src={product.images?.[0]?.url || "https://via.placeholder.com/300"}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h5 className="font-montserrat font-bold text-[16px] text-[#252B42] mb-2 line-clamp-1">
        {product.name}
      </h5>
      <p className="font-montserrat font-bold text-[14px] text-[#737373] mb-2 line-clamp-2 px-2">
        {product.description}
      </p>
      <div className="font-montserrat font-bold text-[16px] text-[#23856D]">
        ${product.price}
      </div>
    </div>
  );
}

export default BestProductsCard;
