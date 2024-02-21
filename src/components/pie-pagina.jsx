export default function PiePagina() {
    return (
        <footer className="grid grid-cols-1 gap-5 p-3 sm:grid-cols-3 sm:justify-evenly text-gray-500">
          <ul className="text-center flex flex-col gap-2">
            <li>
              <a href="#">
                Facebook
              </a>
            </li>
            <li>
              <a href="#">
                Instagram
              </a>
            </li>
            <li>
              <a href="#">
                Twitter
              </a>
            </li>
          </ul>
          <ul className="text-center flex flex-col gap-2">
            <li>
              <a href="#">
                Atención al Cliente
              </a>
            </li>
            <li>
              <a href="#">
                Cookies y uso de datos
              </a>
            </li>
          </ul>
          <ul className="text-center flex flex-col gap-2">
            <li>
              <a href="#">
                Documentos Legales
              </a>
            </li>
            <li>
              <a href="#">
                Documentos asociados
              </a>
            </li>
            <li>
              <a href="#">
                Privacidad y Seguridad
              </a>
            </li>
          </ul>
        </footer>
    )
}