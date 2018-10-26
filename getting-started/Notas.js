/*
* No es necesario que el sitio este hecho _todo en react. Puede usarse de a partes.
* En el html tengo que agregar una etiqueta contenedora <div id='container'></div>
* tambien agregar react.js y react-dom.js.
* Luego agreo un archivo.js con la funcionalidad de react.
*
* -----------
* -Conceptos-
* -----------
* React es una libreria de javascript. No es un framework. Es de codigo abierto, creado por Facebook.
* Para usarlo, es necesario babel. Por defecto, busca el elemento "root" para dibujar el componente.
* Los componentes pueden ser clases que extienden de React.Component. Deben implementar un metodo llamado "render",
* que retorna el codigo html que representa el componente.
* Para mostar el componente se usa ReactDOM.render(componente, donde lo quiero)
*
* Existe una herramienta para crear un entorno de react, con npm: npx create-react-app nombreProyecto
* luego me muevo a la carpeta del proyecto y hago npm start y magicamente tengo el proyecto creado.
* */