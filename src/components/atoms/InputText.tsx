"use client";

interface Props {
  label: string;
  value: string;
  onChange?: (value: string) => void; // ✔️ AHORA OPCIONAL
  disabled?: boolean;
}

export default function InputText({ label, value, onChange, disabled }: Props) {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <label className="font-medium text-gray-700">{label}</label>
      <input
        type="text"
        value={value}
        disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.value)} // ✔️ Evita error
        className="border p-2 rounded-md bg-white disabled:bg-gray-200 disabled:text-gray-500"
      />
    </div>
  );
}
