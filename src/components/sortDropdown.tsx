import React from "react";

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-[#ECECEC] rounded-md px-3 py-2 text-sm text-[#737373] bg-white focus:outline-none focus:border-[#23A6F0] h-12.5 font-montserrat"
    >
      <option value="">Popularity</option>
      <option value="price:asc">Price: Low to High</option>
      <option value="price:desc">Price: High to Low</option>
      <option value="rating:asc">Rating: Low to High</option>
      <option value="rating:desc">Rating: High to Low</option>
    </select>
  );
};

export default SortDropdown;