"use client";

interface Props {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void; // ✔️ AHORA ACEPTA EL VALOR
}

export default function Radio({ label, value, checked, onChange }: Props) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}  // ✔️ LE PASAMOS EL VALOR
        className="cursor-pointer"
      />
      {label}
    </label>
  );
}
