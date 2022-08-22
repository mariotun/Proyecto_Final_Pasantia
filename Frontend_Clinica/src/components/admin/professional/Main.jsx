import React, {useState,useEffect} from 'react';
import {AddProfessional} from './AddProfessional'
import {EditProfessional} from './EditProfessional'
import {TableProfessional} from './TableProfessional'
import {methodPost,methodGet,methodPut} from '../../../service/api.js'


export function MainProfessional(){

    const [listClient,serListClient] = useState([])
    const [reloadUsers, setReloadUsers] = useState(false)
    /*const [users,setUsers] = useState({
        id:'',
        name:'',
        description:'',
        status: true
    })*/


    const handleListClient = async ()=>{
        const listado = await methodGet('validprofess')
        serListClient(listado)
    }
    useEffect( ()=>{
        handleListClient()
        setReloadUsers(false)
     },[reloadUsers]);


    const addUser = async (user) => {
        user.status = true
        const result = await methodPost('professional',user)
        setReloadUsers(true)
    }

    // Eliminar usuario
    const deleteUser = async user_delete => {
        user_delete.status=false
        const result = await methodPut(`professional/${user_delete.id}`,user_delete)
        setReloadUsers(true)//renderizamos el componente de la tabla de usuarios
    }

    // Editar usuario
    const [editing, setEditing] = useState(false)
    const [currentUser, setCurrentUser] = useState({})

    const editRow = professional_edit => {//muestra los datos en el formulario
        setEditing(true) 
        setCurrentUser({ 
            id: professional_edit.id,
            name: professional_edit.name,
            description: professional_edit.description,
            status: professional_edit.status
        })
    }

    const updateUser = async (id, updatedUser) => {
        setEditing(false)//volvemos al formulario para crear un usuario
        const result = await methodPut(`professional/${id}`,updatedUser)
        setReloadUsers(true)//renderizamos el componente de la tabla de usuarios
    }


    return(
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">
                {editing ? (
                <div>
                    <h2 className='text-center'>Edit Professional</h2>
                    <EditProfessional 
                    setEditing={setEditing} //estado=false al presionar el boton cancelar
                    currentUser={currentUser} // contiene los datos del usuario seleccionado en la tabla
                    updateUser={updateUser} //contiene los datos ya actualizados 
                    />
                </div>
                ) : (
                <div>
                    <h2 className='text-center'>Add Professional</h2>
                    <AddProfessional addUser={addUser}  />
                </div>
                )}
            </div>
                <div className="flex-large m-5">
                <TableProfessional 
                    users_prop={listClient} 
                    deleteUser={deleteUser} //obtine el id del usuario seleccionado
                    editRow_prop={editRow} //obtiene el usuario seleccionado y lo muestra en el formulario 
                />
                </div>
            </div>
        </div>
    )
}