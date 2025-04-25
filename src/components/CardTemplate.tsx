import { TemplateProps } from "@/interfaces";
import Link from "next/link";

const Card: React.FC<TemplateProps> = ({
  title,
  description,
  content,
  linkLabel,
  linkUrl,
}) => {
  return (
    <div
      className={`bg-[#d1d5db] shadow-md rounded-lg p-6 flex flex-col justify-between`}
    >
      <h3 className="text-2xl font-semibold text-[#0357a1]">{title}</h3>
      <p className="mt-2 text-[#0357a1]/70">{description}</p>
      <p className="mt-2 text-gray-500">
        <span className="text-xl text-[#0357a1]">Content:</span> {content}
      </p>
      {linkLabel && linkUrl && (
        <Link
          href={linkUrl}
          className="mt-4 inline-block w-full text-center bg-[#0357a1] text-gray-300 text-sm font-semibold py-2 px-4 rounded-lg hover:bg-[#0357a1da] transition duration-300 ease-in-out"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
};

export default Card;
