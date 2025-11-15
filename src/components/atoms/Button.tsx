interface Props {
  texto: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ texto, onClick, className = "" }: Props) {
  return (
    <button onClick={onClick} className={`boton ${className}`}>
      {texto}
    </button>
  );
}
