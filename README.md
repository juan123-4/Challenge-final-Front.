# Challenge-final-Front.
El frontend está construido completamente en React, con una estructura modular y organizada, lo que facilita tanto la escalabilidad como el mantenimiento del proyecto. Toda la aplicación tiene un diseño responsivo y una interfaz amigable enfocada en la experiencia del usuario.

⚽ Proyecto:
Esta aplicación web permite buscar, visualizar, guardar y gestionar jugadores de fútbol de manera dinámica. Está compuesta por un frontend en React y un backend con Express y Firebase Admin SDK, conectados para brindar una experiencia completa tanto para usuarios públicos como administradores autenticados.

Los usuarios pueden:

Buscar jugadores por nombre en tiempo real.

Marcar jugadores como favoritos (almacenados localmente).

Ver detalles de cada jugador como equipo, país, edad, altura y peso.

Registrarse e iniciar sesión con Firebase.

Acceder a una página protegida con su información.

Los administradores autenticados pueden:

Crear nuevos jugadores.

Editar información de jugadores existentes.

Acceder a rutas protegidas que requieren sesión.



🔎 Búsqueda de jugadores
Una de las funcionalidades principales es la búsqueda dinámica de jugadores. Desde el componente Search, el usuario puede escribir el nombre de un jugador y, tras un pequeño retardo (debounce de 500ms), se realiza una petición al backend para buscar coincidencias. Si el input está vacío, la búsqueda se resetea automáticamente. El campo de búsqueda usa useRef para enfocarse automáticamente al cargar la página, mejorando la usabilidad.

Los resultados se muestran como tarjetas (cards) visuales con tres secciones bien diferenciadas:

Información del equipo (nombre, imagen y posición del jugador).

Imagen del jugador, nombre y edad.

País, imagen de país, altura, peso, y un botón de favoritos.

Además, si solo hay un jugador en los resultados, se alinea automáticamente al centro usando una clase CSS condicional, lo que mejora la estética del layout.

⭐ Funcionalidad de favoritos
La aplicación permite marcar jugadores como favoritos mediante un contexto global (useFavoritos) utilizando React Context y localStorage, lo que garantiza que la información persiste incluso después de cerrar o recargar la página. Cada tarjeta tiene un botón con una estrella: llena si está en favoritos, vacía si no lo está. Los jugadores favoritos se pueden visualizar en una página específica, accediendo directamente desde cualquier parte de la app.

🔐 Autenticación
El frontend se integra con Firebase Authentication. Los usuarios pueden registrarse e iniciar sesión mediante email y contraseña. Una vez autenticados, se genera un ID token que se envía al backend mediante una petición fetch. El token es almacenado por el backend en una cookie HTTP-only, lo que mantiene segura la sesión del usuario.

En el frontend, se gestiona el estado del usuario usando onAuthStateChanged de Firebase para mostrar u ocultar elementos de la interfaz según si hay sesión activa.

👤 Página de home protegida
La ruta /home_login está protegida tanto en frontend como en backend. Cuando el usuario inicia sesión, se redirige automáticamente al home protegida, y el backend valida la cookie para asegurarse de que el token sea válido. Si no lo es, el acceso está restringido. Además, se evita mostrar información sensible como el correo electrónico en la interfaz.

✏️ Crear y editar jugadores
La creación y edición de jugadores se hace desde formularios personalizados. Para editar, se hace uso de useContext para pasar el jugador seleccionado entre componentes y redirigir al formulario con la información precargada. Luego, al enviar el formulario, se hace una petición PUT al backend para actualizar el jugador. El formulario de edición también está protegido por autenticación.

En la parte visual, la edición tiene su propia página con elementos decorativos (pelotas animadas, títulos llamativos, etc.), manteniendo coherencia visual con el resto del sitio.

🎨 Estilos y animaciones
Todos los componentes usan CSS Modules, lo que permite un estilo encapsulado sin colisiones de clase. Además, hay elementos decorativos como pelotas de fútbol animadas que dan dinamismo a la experiencia. Se cuida el diseño tanto en la parte funcional como en lo visual, pensando siempre en la experiencia del usuario.

🔄 Manejo de rutas
Se usa react-router-dom para la navegación entre componentes: home, búsqueda, favoritos, login, registro, perfil, crear jugador y editar jugador. La experiencia es fluida gracias al manejo del estado y redirecciones según las acciones del usuario (como iniciar sesión o guardar cambios).
