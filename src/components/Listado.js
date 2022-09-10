/* import React, { useEffect, useState } from 'react' */
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import swAlert from 'sweetalert'
import { app } from '../database/FirebaseConexion'



export const Listado = () => {

const navigator = useNavigate()

  const [archivoUrl, setArchivoUrl] = useState("");
  const [docus,setDocus] = useState([]);

  const archivoHandler = async (e)=> {

    const archivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(archivo.name);
    await archivoPath.put(archivo);
    console.log("archivo cargado:",archivo.name);
    const enlaceUrl = await archivoPath.getDownloadURL();
    setArchivoUrl(enlaceUrl);

  }

  const submitHandler = async (e)=> {
    e.preventDefault()
const nombreArchivo = e.target.nombre.value;
if (!nombreArchivo) {
  swAlert("coloca un nombre")
  return
}
const coleccionRef =  app.firestore().collection("archivos");
const docu = await coleccionRef.doc(nombreArchivo).set({nombre: nombreArchivo, url: archivoUrl});
console.log(docu)
console.log("archivo cargado:", nombreArchivo, "ulr:", archivoUrl);
navigator("/");
  }

  const funDocus = async () => {
    const docusList = await app.firestore().collection("archivos").get()
    setDocus(docusList.docs.map((doc) => doc.data()))
    console.log(docusList)
  }
  useEffect (() =>{
  funDocus()
  },[])


  return (
    <div className='divclass' >
      <NavLink className="linksclass" to="/contacto" >Contacto</NavLink>

    <form onSubmit={submitHandler} >
    <input type="file" onChange={archivoHandler} placeholder="Descripcion" />
    <input type="text" name='nombre' />
    <button>Enviar</button>

    </form>


      {


        docus.map((doc, idx) => {
          return (
            <div key={idx} className='cardclass'>
              <img className='imgclass' src={doc.url} alt="imagenes casa " />
              <h3 className='tituloclass' >{doc.nombre}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

