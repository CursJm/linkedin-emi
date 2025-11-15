import Button from "../src/components/atoms/Button";
import "../src/components/atoms/Button.css";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Solo mostramos el botón */}
      <Button texto="Botón bonito" />
    </div>
  );
}
