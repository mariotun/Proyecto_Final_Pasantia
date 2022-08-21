import React, {useState,useEffect} from 'react';
import {AddUser} from './AddUser'
import {EditUser} from './EditUser'
import {TableUser} from './TableUser'
import {methodPost,methodGet,methodPut} from '../../service/api.js'


export function MainUser(){

    const [listClient,serListClient] = useState([])
    const [reloadUsers, setReloadUsers] = useState(false)
  
    const handleListClient = async ()=>{
        const listado = await methodGet('validuser')
        serListClient(listado)
    }
    //-----------------------------------
    const [listProfessional,setListProfessional] = useState([])
    const handleListProfessional = async ()=>{
        const listado = await methodGet('validprofess')
        setListProfessional(listado)
        //console.log('--->', listado[0].name)
    }
    const [selectedProfess, setSelectedProfess] = useState('');
    const handleStatusChange = e => {
        setSelectedProfess(e.target.value);
        console.log("seleccionaste: ",e.target.value)
    }
    //-----------------------------------
    useEffect( ()=>{
        handleListClient()
        handleListProfessional()
        setReloadUsers(false)
     },[reloadUsers]);


    const addUser = async (user) => {
        user.status = true
        user.professional = selectedProfess
        const result = await methodPost('employee',user)
        setReloadUsers(true)
    }

    // Eliminar usuario
    const deleteUser = async user_delete => {
        //console.log('delete: ',user_delete)
        user_delete.status=false
        user_delete.professional= idProfessional(listProfessional,user_delete.professional)
        const result = await methodPut(`employee/${user_delete.id}`,user_delete)
        setReloadUsers(true)//renderizamos el componente de la tabla de usuarios
    }

    // Editar usuario
    const [editing, setEditing] = useState(false)

    const initialFormState = { id: null, name: '', username: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const editRow = user_edit => {//muestra los datos en el formulario
        setEditing(true) 
        //console.log(selectedProfess)
        setCurrentUser({ 
            id: user_edit.id,
            cui: user_edit.cui,
            names: user_edit.names,
            last_names: user_edit.last_names,
            phone_number: user_edit.phone_number,
            address: user_edit.address,
            age: user_edit.age,
            birthday: user_edit.birthday,
            email: user_edit.email,
            password: user_edit.password,
            professional: selectedProfess,
            input_date: user_edit.input_date,
            status: user_edit.status
        })
    }

    const updateUser = async (id, updatedUser) => {
        setEditing(false)//volvemos al formulario para crear un usuario
        const result = await methodPut(`employee/${id}`,updatedUser)
        setReloadUsers(true)//renderizamos el componente de la tabla de usuarios
    }

    function idProfessional(lista,name){
        //console.log('lista: ',lista, 'name:',name.trim())
        for(var i=0; i<lista.length; i++){
          //  console.log('for:',lista[0].name)
            if(lista[i].name == name){
                return lista[i].id
            }
        }
    }

    return(
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">
                {editing ? (
                <div>
                    <h2 className='text-center'>Edit User</h2>
                    <EditUser 
                    setEditing={setEditing} //estado=false al presionar el boton cancelar
                    currentUser={currentUser} // contiene los datos del usuario seleccionado en la tabla
                    updateUser={updateUser} //contiene los datos ya actualizados
                    professionalList={listProfessional}
                    selected={handleStatusChange} 
                    />
                </div>
                ) : (
                <div>
                    <h2 className='text-center'>Add User</h2>
                    <AddUser addUser={addUser} professionalList={listProfessional} selected={handleStatusChange}/>
                </div>
                )}
            </div>
                <div className="flex-large m-5">
                <TableUser 
                    users_prop={listClient} 
                    deleteUser={deleteUser} //obtine el id del usuario seleccionado
                    editRow_prop={editRow} //obtiene el usuario seleccionado y lo muestra en el formulario 
                />
                </div>
            </div>
        </div>
    )
}