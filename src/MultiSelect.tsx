import { ChangeEvent, useState } from "react";
import { CircleX } from "lucide-react";

import { Tag } from "./components/Tag";
import { OPTIONS } from "./constants";

export const MultiSelect = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelectOption = (e: ChangeEvent<HTMLInputElement>) => {
    if (OPTIONS.includes(e.target.value)) {
      if (selected.includes(e.target.value)) {
        deleteOption(e.target.value);
      } else {
        addOption(e.target.value);
      }
      e.target.value = "";
    }
  };

  const addOption = (option: string) => {
    setSelected((selected) => [...selected, option]);
  };

  const deleteOption = (option: string) => {
    setSelected((selected) => selected.filter((opt) => opt !== option));
  };

  const deleteLast = () => {
    setSelected((selected) => selected.slice(-1));
  };

  const removeAll = () => {
    setSelected([]);
  };

  const checkBackspace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      deleteLast();
    }
  };

  return (
    <article>
      <div className="flex w-[500px] p-[4px] h-full gap-x-2 bg-slate-3 border-2 border-transparent rounded-md focus:border-2 focus:border-black">
        <div className="relative flex flex-wrap w-full gap-2">
          {selected.map((option) => (
            <Tag key={option} name={option} onDelete={deleteOption}></Tag>
          ))}

          <div className="flex-1 flex items-center gap-x-2 w-full min-w-[175px]">
            <input
              multiple
              name="fruits"
              id="fruits"
              list="fruits-options"
              className="p-2 flex-1 rounded-md bg-slate-3 min-w-[150px] outline-none w-full"
              onChange={handleSelectOption}
              onKeyDown={checkBackspace}
            ></input>
            <datalist className="bg-red-500" id="fruits-options">
              {OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </datalist>
            <button onClick={removeAll} className="bg-transparent">
              <CircleX
                className="hover:color-slate-7 color-slate-500"
                size={16}
              />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
