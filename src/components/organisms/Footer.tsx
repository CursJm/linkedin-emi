export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10 pt-8 pb-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

        {/* Información Institucional */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Información Institucional</h3>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Sobre el Sistema</a></li>
            <li><a href="#" className="hover:text-blue-600">Escuela Militar de Ingeniería</a></li>
            <li><a href="#" className="hover:text-blue-600">Contacto Institucional</a></li>
          </ul>
        </div>

        {/* Soporte */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Soporte</h3>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Preguntas Frecuentes</a></li>
            <li><a href="#" className="hover:text-blue-600">Manual de Usuario</a></li>
            <li><a href="#" className="hover:text-blue-600">Ayuda en Línea</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Legal</h3>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Términos y Condiciones</a></li>
            <li><a href="#" className="hover:text-blue-600">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-blue-600">Uso de Datos</a></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        © 2025 EL pepe – Todos los derechos reservados
      </div>

    </footer>
  );
}
