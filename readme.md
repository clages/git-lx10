# Git (Sistema de Control de versiones)

Esto es una guia teorico/practica para los alumnos de __"Git Desarrollo Colaborativo"__ que cursan los dias _Lunes y Miercoles de 10hs a 13hs_ con el objetivo de reforzar conceptos y registrar los contenidos vistos en clase.

## Configuracion Inicial

Cuando descargamos la herramienta __GIT__ debemos inicializar un proyecto en una carpeta a eleccion, pero para poder confirmar los cambios realizados es necesario que tengamos establecidos un _nombre de usuario_ y un _correo electronico_.

Dicha informacion es necesaria para realizar los commits y ademas sirve para que los colaboradores del proyecto se contacten con nosotros, para definir esta configuracion debemos utilizar los siguientes comandos:

* __git init:__ inicializa el repositorio en la carpeta actual
* __git config user.name `name`:__ define el nombre del usuario colaborador
* __git config user.email `email`:__ define el correo de contacto

## AREAS DE GIT

Cuando trabajamos con GIT, debemos tener en cuenta que el proceso para registrar los cambios se divide en etapas, las cuales corresponden a las diferentes areas que se detallan a continuacion:

1. ***WORKING DIRECTORY:*** El area de trabajo corresponde a la carpeta donde creamos el respositorio y vamos a crear, editar y/o eliminar los archivos que forman parte del proyecto.
1. ***STAGING AREA:*** El area de control de cambios, tambien llamada INDEX, se utiliza para realizar las capturas de codigo(SNAPSHOT) que luego deberan ser confirmadas si corresponde.
1. ***REPOSITORY:*** El almacen de cambios corresponde a una carpeta oculta que registra todo en archivos BLOB(Binary Large Object), y que podemos consultar utilizan el historial de confirmaciones.

---

## Contacto

Para mas informacion consultar la plataforma [Alumni](https://alumni.education), donde tambien pueden realizar los exámenes.

Tambien pueden obtener mas detalles sobre los diferentes cursos en [EducacionIT](https://educacionit.com.ar)