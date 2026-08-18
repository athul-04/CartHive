import { Heart, ShoppingCart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface NavIconProps {
  property: "wishlist" | "cart";
}

const NavIcon = ({ property }: NavIconProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-1
          cursor-pointer
          hover:text-brand-primary
          transition-colors
          select-none
          basis-1/4
        "
      >
        {property === "wishlist" ? (
          <Heart size={20} />
        ) : (
          <ShoppingCart size={20} />
        )}

        <span className="capitalize">{property}</span>
      </div>

      {isOpen && (
        <div
          className="
            absolute top-8 right-0
            z-50
            w-72
            rounded-lg
            border
            bg-white
            shadow-lg
            p-4
            animate-in
            fade-in
            zoom-in-95
          "
        >
          <h3 className="font-semibold text-base mb-3">
            {property === "wishlist"
              ? "Wishlist Items"
              : "Shopping Cart"}
          </h3>

          <div className="space-y-3">
            <div className="rounded-md border p-2">
              <p className="font-medium text-sm">
                Sample Product
              </p>
              <p className="text-xs text-gray-500">
                ₹49,999
              </p>
            </div>

            <div className="rounded-md border p-2">
              <p className="font-medium text-sm">
                Sample Product 2
              </p>
              <p className="text-xs text-gray-500">
                ₹29,999
              </p>
            </div>
          </div>

          <button
            className="
              mt-4
              w-full
              rounded-md
              bg-black
              py-2
              text-white
              hover:bg-neutral-800
              transition-colors
            "
          >
            {property === "wishlist"
              ? "View Wishlist"
              : "View Cart"}
          </button>
        </div>
      )}
    </div>
  );
};

export default NavIcon;


