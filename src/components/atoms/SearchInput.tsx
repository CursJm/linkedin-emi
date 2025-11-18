interface SearchInputProps {
  placeholder?: string;
}

export default function SearchInput({ placeholder = "Buscar..." }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
  );
}
