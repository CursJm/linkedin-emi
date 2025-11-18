"use client";

import Chip from "../atoms/Chip";

interface ChipListProps {
  label: string;
  items: string[];
  onAdd: () => void;
  onRemove: (item: string) => void;
}

export default function ChipList({ label, items, onAdd, onRemove }: ChipListProps) {
  return (
    <div className="mb-4">
      <p className="font-medium text-gray-700 mb-2">{label}</p>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Chip key={item} text={item} onRemove={() => onRemove(item)} />
        ))}

        <button
          onClick={onAdd}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full text-sm"
        >
          + agregar
        </button>
      </div>
    </div>
  );
}
