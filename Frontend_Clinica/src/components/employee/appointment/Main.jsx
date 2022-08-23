import React, {useState,useEffect} from 'react';
import {AddAppointment} from './AddAppointment'
import {EditAppointment} from './EditAppointment'
import {TableAppointment} from './TableAppointment'
import {methodPost,methodGet,methodPut} from '../../../service/api.js'


export function MainAppoitment(){

    const [listClient,serListClient] = useState([])
    const [reloadUsers, setReloadUsers] = useState(false)
  
    const handleListClient = async ()=>{
        const listado = await methodGet('validappointment')
        serListClient(listado)
    }
    //-----------------------------------
    const [listProfessional,setListProfessional] = useState([])
    const handleListProfessional = async ()=>{
        const listado = await methodGet('validclient')
        setListProfessional(listado)
        //console.log('--->', listado[0].names)
    }
    const [selectedProfess, setSelectedProfess] = useState('');
    const handleStatusChange = e => {
        setSelectedProfess(e.target.value);
        console.log("seleccionaste: ",e.target.value)
    }
    //-----------------------------------
    //-----------------------------------
    const [listUserEmployee,setListUserEmployee] = useState([])
    const handleListUserEmployee = async ()=>{
        const listado = await methodGet('validuser')
        setListUserEmployee(listado)
        //console.log('--->', listado[0].names)
    }
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const handleStatusChangeEmployee = e => {
        setSelectedEmployee(e.target.value);
        console.log("seleccionaste: ",e.target.value)
    }
    //-----------------------------------
    useEffect( ()=>{
        handleListClient()
        handleListProfessional()
        handleListUserEmployee()
        setReloadUsers(false)
     },[reloadUsers]);


    const addUser = async (user) => {
        user.status = true
        user.client = selectedProfess
        user.employee = selectedEmployee
        const result = await methodPost('appointment',user)
        setReloadUsers(true)
    }

    // Eliminar usuario
    const deleteUser = async user_delete => {
        console.log('delete: ',user_delete)
        user_delete.status=false
        user_delete.client= user_delete.client.id//idClient(listProfessional,user_delete.client)
        user_delete.employee = user_delete.employee.id//idClient(listUserEmployee,user_delete.employee)
        const result = await methodPut(`appointment/${user_delete.id}`,user_delete)
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
            date: user_edit.date,
            hour: user_edit.hour,
            status: user_edit.status,
            client: selectedProfess,
            employee: selectedEmployee
        })
    }

    const updateUser = async (id, updatedUser) => {
        //console.log('UPDATE:',updatedUser)
        setEditing(false)//volvemos al formulario para crear un usuario
        const result = await methodPut(`appointment/${id}`,updatedUser)
        setReloadUsers(true)//renderizamos el componente de la tabla de usuarios
    }

    function idClient(lista,names){
        console.log('lista: ',lista, 'names:',names)
        for(var i=0; i<lista.length; i++){
          //  console.log('for:',lista[0].name)
            if(lista[i].names == names){
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
                    <h2 className='text-center'>Edit Appointment</h2>
                    <EditAppointment 
                    setEditing={setEditing} //estado=false al presionar el boton cancelar
                    currentUser={currentUser} // contiene los datos del usuario seleccionado en la tabla
                    updateUser={updateUser} //contiene los datos ya actualizados
                    professionalList={listProfessional}
                    selected={handleStatusChange} 
                    employeeList={listUserEmployee}
                    selectedEmploye={handleStatusChangeEmployee} 
                    />
                </div>
                ) : (
                <div>
                    <h2 className='text-center'>Add Appointment</h2>
                    <AddAppointment 
                    addUser={addUser} 
                    professionalList={listProfessional} 
                    selected={handleStatusChange}
                    employeeList={listUserEmployee}
                    selectedEmploye={handleStatusChangeEmployee} />
                </div>
                )}
            </div>
                <div className="flex-large m-5">
                <TableAppointment 
                    users_prop={listClient} 
                    deleteUser={deleteUser} //obtine el id del usuario seleccionado
                    editRow_prop={editRow} //obtiene el usuario seleccionado y lo muestra en el formulario 
                />
                </div>
            </div>
        </div>
    )
}