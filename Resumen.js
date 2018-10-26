/*
*
* Comenzar a trabajar con React.
*
* ********************************************************************************************************
*
* Instalar con npm react, react-dom, babelify (traductor), babel-preset-react
*
* instalar browserify para cargar modulos.
*
* en el js, requerir  React y ReactDOM
*
* usando ReactDOM.render(que mostrar, donde mostrar)
*
* una vez que escribi el js, debo hacer la traduccion con browserify:
*   browserify -t [ babelify --presets [ react ] ] main.js (es el archivo que cree) -o (salida) bundle.js
*
* luego para probarlo, creo un html y llamo al bundle.
*
* *********************************************************************************************************
*
* Otra forma seria usando el cdn de react, de react-dom y de babel.
*
* dentro del script que debe ser traducido, agreto el atributo type="text/babel"
*
* *********************************************************************************************************
*
* Meter los js dentro de un directorio src.
* Instalar librerias de babel para la traduccion:
*   npm install -g babel-cli
*   npm install babel-preset-react
*   babel --presets react src/ --watch --out-dir build/ (transpila todo lo que haya en src y lo manda a build)
*
*  Instalar herramientas de chrome: react dev tools, react detector, show me the react.
*
*  *********************************************************************************************************
*
*  VIRTUAL DOM
*  -----------
*  El dom es el document object model. da la estructura del documento html. El virtual dom de react es un objeto de JS.
*  React toma los cambios del virtual dom y los compara con el dom. luego aplica los cambios.
*  ReactDOM dispone del metodo render para mostrar lo que sea necesario.
*  ReactDOM.render(una etiqueta, un lugar donde mostrarla) no le puedo pasar varias etiquetas.
*  Puedo utilizar el metodo React.createElement(etiqueta, propiedades, contenido) y pasarselo a ReactDOM.render()
*
*  JSX javascript ex.:
*  -------------------
*   var Saludo = React.createClass({
*       render: function(){
*           return (
*               <div>
*                   Buen dia {this.props.nombre} <br />
*                   <i>this.props.children</i>
*               </div>
*           )
*       }
*   }) recibe un objeto con configuraciones y funciones del componente.
*   Luego al componente, lo puedo usar como si fuese una etiqueta. su nombre debe comenzar con mayuscula.
*   <Saludo />
*
*   las PROPIEDADES son como los atributos de los tags normales.
*   <Saludo nombre="UnNombre" />
*   para usarlo dentro del render del objeto  -> {this.props.nombre}
*   tambien puedo cerrar el componente como un tag html, y poner el el medio propiedades
*
*   ReactDOM.render(
*   <Saludo nombre="UnNombre" >
*       Argentino
*   </Saludo>,
*   document.getElementById('mensaje'));
*   luego en el render del componente lo llamo usando {this.props.children}
*
* ----------------------------------------------------------------------------------------------------------------------
* - Eventos -
* -----------
*
* para agregar clases a los componentes, le tengo que poner className.
* los handlers de los eventos se deben crear dentro del mismo componente.
* ----------------------------------------------------------------------------------------------------------------------
* - Estados -
* -----------
* para establecer el estado inicial del componente
* getInitialState: function(){
        return { like: true }
        //return { like: Boolean(this.props.like) }
    }
    para cambiar el estado debo usar this.setState y le paso un objeto con el estado y su nuevo valor.

    si pongo una prop dentro del tag del componente, lo toma como true
    <Compo propiedad /> propiedad = true
*
* ----------------------------------------------------------------------------------------------------------------------
* - Ciclon de vida de componentes -
* ---------------------------------
*
*   componentWillMount:{} Estado previo a que el componente se cargue.
*   componentDidMount: {} Estado posterior a la carga del componente.
*   getDefaultProps: function(){
*       return {
*       }
*   } Declara propiedades por defecto.
* */