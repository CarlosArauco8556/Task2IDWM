# Task 2 IDWM

El objetivo de este documento es proporcionar una guía clara y precisa para desarrolladores que deseen configurar rápidamente un entorno de trabajo para levantar este proyecto desde GitHub. A lo largo de este tutorial, se cubrirán los pasos esenciales, desde la clonación del repositorio hasta la configuración del entorno y la ejecución del proyecto en Visual Studio.

## 1. Clonar el repositorio desde GitHub

Para clonar un repositorio debes acceder a la direccion de github donde esta alojado el repositorio.

https://github.com/CarlosArauco8556/Task2IDWM


Apretar en el boton verde que dice codigo, y copiar el enlace https.

<img src="https://drive.google.com/uc?export=view&id=1FSJeRAGrD8goeLLIzMbxLQgEIOlmbmBR" alt="Repositorio/Codigo GitHub" width="450"/>

Ahora, es necesario crear una carpeta en cualquier direccion que deseas almacenar el proyecto.

Despues, haz click derecho sobre la carpeta  y selecciona abrir en terminal.

<img src="https://drive.google.com/uc?export=view&id=1svstl1CkoRq30wl20-3LR4lxb5cB9NXh" alt="Abrir con terminal" width="450"/>

Para clonar el repositorio en la carpeta que creaste, en la terminal ingresa el comando "git clone" seguido de un espacio y la direccion del repositorio (La cual copiaste anteriormente). 

````
git clone https://github.com/CarlosArauco8556/Task2IDWM.git
````

> [!NOTE]
> Presiona enter, y espera a que termine de clonar el repositorio.

Luego, ingresa el comando "code ." para abrir Visual Studio Code.

````
code .
````

> [!NOTE]
> Presiona enter, y espera a que abra la aplicacion de vscode.

## 2. Instalar dependencias

Una vez que ya abrio vscode, abre una terminal, presionando las teclas "Ctrl + Shift + ` ", o tambien puedes ir a la parte superior de vscode, seleccionar los 3 puntitos "...", luego "Terminal", y "New Terminal".

<img src="https://drive.google.com/uc?export=view&id=1vlOWIl9QsAydtAeePWJHbUGt18aAzoES" alt="Abrir terminal en vscode" width="550"/>

Ahora en la terminal ingresa al directorio del proyecto clonado:

````
cd Task2IDWM
````

Verifica si esta en la rama main del proyecto, a travez del siguiente codigo en la terminal.

````
git checkout main
````

Si no estuvieras en la rama main del proyecto, el codigo anterior te llevara a la rama.


Asegúrate de tener Node.js y npm instalados en tu máquina. Puedes verificar ejecutando:

````
node -v
npm -v
````

Instala las dependencias del proyecto:

````
npm install
````

## 3. Levantar el servidor de desarrollo

Una vez instaladas las dependencias, ejecuta el servidor de desarrollo:

````
ng serve
````

## 4. Trabajo continuo

Ahora puedes modificar componentes y estilos según lo necesario. Si haces cambios en TailwindCSS o Flowbite, recuerda que pueden requerir recompilar los estilos. Usa:

````
ng build
````

