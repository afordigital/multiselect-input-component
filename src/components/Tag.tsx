import { CircleX } from "lucide-react";

type TagProps = {
  name: string;
  onDelete: (option: string) => void;
};

export const Tag = ({ name, onDelete }: TagProps) => {
  return (
    <div className="px-4 text-gray-2 cursor-pointer flex items-center gap-x-2 py-2 rounded-md bg-slate-500">
      <span>{name}</span>
      <button className="bg-transparent" onClick={() => onDelete(name)}>
        <CircleX className="hover:color-white" size={16} />
      </button>
    </div>
  );
};
