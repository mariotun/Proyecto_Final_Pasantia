import React, {useState,useEffect} from 'react';
import {AddClient} from './AddForm'
import {EditForm2} from './EditForms2'
import {TableClient} from './Table'
import {methodPost,methodGet,methodPut} from '../../service/api.js'


export function MainClient(){

        // Agregar usuarios
    const usersData = [
        { id: 1, name: 'Tania', username: 'floppydiskette' },
        { id: 2, name: 'Craig', username: 'siliconeidolon' },
        { id: 3, name: 'Ben', username: 'benisphere' },
    ]

    //const [users, setUsers] = useState(usersData)
    const [listClient,serListClient] = useState([])
    const [reloadUsers, setReloadUsers] = useState(false)
    const [users,setUsers] = useState({
        id:'',
        cui: '',
        names: '',
        last_names: '',
        phone_number: '',
        address: '',
        age: '',
        birthday: '',
        carrera: '',
        fono: '',
        prevision: '',
        input_date: '',
        status: true
    })


    const handleListClient = async ()=>{
        const listado = await methodGet('validclient')
        serListClient(listado)
    }
    useEffect( ()=>{
        handleListClient()
        setReloadUsers(false)
     },[reloadUsers]);


    const addUser = async (user) => {
        user.status = true
        const result = await methodPost('client',user)
        setReloadUsers(true)
    }

    // Eliminar usuario
    const deleteUser = async user_delete => {
        user_delete.status=false
        const result = await methodPut(`client/${user_delete.id}`,user_delete)
        setReloadUsers(true)//renderizamos el componente de la tabla de usuarios
    }

    // Editar usuario
    const [editing, setEditing] = useState(false)

    const initialFormState = { id: null, name: '', username: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const editRow = user_edit => {//muestra los datos en el formulario
        //console.log('--->',user_edit.id)
        setEditing(true) 
        setCurrentUser({ 
            id: user_edit.id,
            cui: user_edit.cui,
            names: user_edit.names,
            last_names: user_edit.last_names,
            phone_number: user_edit.phone_number,
            address: user_edit.address,
            age: user_edit.age,
            birthday: user_edit.birthday,
            carrera: user_edit.carrera,
            fono: user_edit.fono,
            prevision: user_edit.prevision,
            input_date: user_edit.input_date,
            status: user_edit.status
        })
    }

    const updateUser = async (id, updatedUser) => {
        setEditing(false)//volvemos al formulario para crear un usuario
        const result = await methodPut(`client/${id}`,updatedUser)
        setReloadUsers(true)//renderizamos el componente de la tabla de usuarios
        //setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }


    return(
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">
                {editing ? (
                <div>
                    <h2 className='text-center'>Edit Client</h2>
                    <EditForm2 
                    setEditing={setEditing} //estado=false al presionar el boton cancelar
                    currentUser={currentUser} // contiene los datos del usuario seleccionado en la tabla
                    updateUser={updateUser} //contiene los datos ya actualizados 
                    />
                </div>
                ) : (
                <div>
                    <h2 className='text-center'>Add Client</h2>
                    <AddClient addUser={addUser}  />
                </div>
                )}
            </div>
                <div className="flex-large m-5">
                <TableClient 
                    users_prop={listClient} 
                    deleteUser={deleteUser} //obtine el id del usuario seleccionado
                    editRow_prop={editRow} //obtiene el usuario seleccionado y lo muestra en el formulario 
                />
                </div>
            </div>
        </div>
    )
}