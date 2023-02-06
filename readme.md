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

## Gestion de Remotos

Normalmente todos los cambios realizados se van a gestionar de manera local, pero una vez recopilado un conjunto de estos, necesitaremos publicar dichas modificaciones en un servidor de git. Esto sucede principalmente para que podamos acceder a dicho repositorio desde cualquier ubicacion y tengamos una copia, a modo de respaldo, de nuestro proyecto.

Algunos de los comandos que se relacionan con la gestion de respositorios remotos, ya sea para clonar el mismo o modificar sus valores, son los siguientes:

* __git clone `url`:__ clona un repositorio remoto en el directorio actual
* __git remote add `alias` `url`:__ agrega una direccion de repositorio remoto
* __git remote rename `old` `new`:__ cambia el nombre del remoto especificado
* __git remote set-url `remote` `url`:__ modifica la direccion url del remoto seleccionado

## APUNTADORES GIT

* __HEAD:__ apuntador movil que indica donde nos encontramos dentro del historial de confirmaciones, tambien se utiliza como referencia para los comandos de git, como por ejemplo: _git checkout HEAD~2_.
* __BRANCH:__ apuntador dinamico que se asocia al ultimo commit de la historia en la que nos encontramos, sirve para probar caracteristicas y realizar correcciones sin comprometer la rama principal.
* __TAG:__ apuntador estatico que se asigna a un commit en particular para poder acceder al mismo sin necesidad de utilizar otra referencia, normalmente se utiliza para el versionado del proyecto.
* __STASH:__ apuntador de la zona temporal de cambios (pila stash) que se utiliza de manera local, cuando necesitamos desplazarnos entre ramas y tenemos cambios pendientes, que no ameritan un commit.

---

## Contacto

La distribucion de trabajos dentro del proyecto fue la siguiente:

|Usuario|Area|
|-|-|
|**camilamgatto**| ** |
|**clages**| ** |
|**gabrielnovillorangone**| ** |
|**m3tha**| ** |
|**kuentas**| ** |
|**c215714n**|*navegacion principal y repositorios*|

Para mas informacion consultar la plataforma [Alumni](https://alumni.education), donde tambien pueden realizar los exámenes.

Tambien pueden obtener mas detalles sobre los diferentes cursos en [EducacionIT](https://educacionit.com.ar)