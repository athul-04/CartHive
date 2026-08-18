import { Headphones } from "lucide-react";

const Support = () => {
  return (
    <div className="px-10 ml-2 mt-6">
      <div
        className="
            w-[18rem]
            rounded-xl
            bg-white
            border
            p-4
            shadow-sm
            transition-all
            duration-300
            hover:shadow-md
            hover:-translate-y-1
        "
        >
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-xl
              bg-violet-50
            "
          >
            <Headphones size={28} className="text-brand-primary" />
          </div>

          <div>
            <h3 className="font-semibold text-sm">
              Need Help?
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              24/7 Support
            </p>

            <p className="text-xs text-gray-400">
              We're here to help you
            </p>

            <button
              className="
                mt-2
                text-sm
                font-medium
                text-brand-primary
                hover:text-violet-700
                transition-colors
              "
            >
              Contact Support →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;