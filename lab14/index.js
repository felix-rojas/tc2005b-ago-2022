const path = require('path');
const BP = require('bodyParser');
// Las cookies viajan en el header de la respuesta, por lo que para definir una cookie, lo podemos hacer en la capa del controlador por medio del método setHeader('Set-Cookie') de la respuesta HTTP:

exports.accion = (request, response, next) => {
    response.setHeader('Set-Cookie', 'nombre_cookie', 'valor_cookie');
}

// A partir de que definimos una cookie, el navegador mandará en el header de la petición, todas las cookies que corresponden al sitio. Para acceder a las cookies en el controlador, lo podemos hacer por medio del header 'Cookie' de la petición:

exports.accion = (request, response, next) => {
    request.get('Cookie');
}

// Para acceder a un valor de una cookie en particular, puedes hacer manipulando el string, por ejemplo con request.get('Cookie').split(';')[1].trim().split('=')[1]; o bien, con instalando algún módulo como cookie-parser.

// Además del valor, puedes agregarle más propiedades a la cookie como fecha de expiración, segundos de vida, el dominio al que quieres que se envíe, o la propiedad Secure, que sólo enviará la cookie si viaja por HTTPS.
// Es importante tener cuidado con el uso de las cookies, ya que los usuarios pueden editarlas desde el navegador. Para que la cookie no pueda ser leída por el código js del navegador, se le puede agregar la propiedad HttpOnly. Esto protege de ataques XSS.

exports.accion = (request, response, next) => {
    response.setHeader('Set-Cookie', 'nombre_cookie=valor_cookie; HttpOnly');
}

const bodyParser = require('body-parser');
// Para manejar sesiones de manera muy práctica, instalaremos el paquete express-session.
// Para preparar el entorno para trabajar con sesiones, agregamos como middleware el manejo de sesiones:

const session = require('express-session');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

// Para utilizar las variables de sesión en un controlador:

exports.action = (request, response, next) {
    request.session.nombre_variable = valor;
};

// Si revisas la consola desde el navegador, podrás observar una cookie con tu variable de sesión y con el valor encriptado.
// Para eliminar una sesión, lo cual es principalmente útil cuando un usuario sale de la aplicación, puedes hacerlo de la siguiente forma:

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

// Mejora alguno de tus laboratorios anteriores o avanza en tu proyecto haciendo un uso pertinente de sesiones y cookies. Otra opción es que crees una nueva aplicación para que explores la aplicación de estos conceptos.

// En ocasiones, como por ejemplo para mandar mensajes de error al usuario, deseamos utilizar variables de sesión que tengan un tiempo de vida de sólo 1 petición. Estas variables se llaman flash. Si deseas utilizarlas, el paquete connect-flash lo hace sencillo.