import { forwardRef } from "react";
import { cn } from "../lib/utils";

type SelectItemsProps = {
  items: string[];
  direction: "top" | "bottom";
};

const SelectItems = forwardRef<HTMLDivElement, SelectItemsProps>(
  ({ items, direction }: SelectItemsProps, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "select-items",
          direction === "top"
            ? "top fade-in-closeUp"
            : "bottom fade-in-dropdown"
        )}
      >
        <div className="select-items__wrap">
          <ol>
            {items.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
);

export default SelectItems;
