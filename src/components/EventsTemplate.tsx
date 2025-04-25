import { TemplateProps } from "@/interfaces";
import { CircleCheckIcon } from "lucide-react";
import Link from "next/link";

const Template: React.FC<TemplateProps> = ({
  title,
  description,
  linkLabel,
  linkUrl,
}) => {
  return (
    <div className="mb-10">
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-800 bg-[#0357a1]">
        <CircleCheckIcon />
      </span>
      <h3 className="flex items-center mb-3 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="my-5 text-base md:text-xl font-normal text-right text-gray-300 p-3 rounded-md md:w-[700px] border-2 border-[#589dd1]">
        {description}
      </p>
      {linkLabel && linkUrl && (
        <Link
          href={linkUrl}
          className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-[#589dd1] hover:bg-[#589dd1df]"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
};

export default Template;
