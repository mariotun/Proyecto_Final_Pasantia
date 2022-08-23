import React from 'react'
import { useForm } from 'react-hook-form'

export function EditAppointment(props){

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

    const onSubmit = (data, e) => {
        console.log("Update: ",data)
        props.updateUser(props.currentUser.id, data)//regresamos los datos ya actualizados
        e.target.reset()
    }

    return(
        <div className='container p-3'>
        <div className='row justify-content-center align-items-center'>
        <div className="col-auto bg-light ">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='form-group row m-3'>
                        <label className="col-sm-2 col-form-label">Date</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="date" {...register('date',{required: {value: true, message: 'Valor requerido'}})}/>
                        </div>
                        <div>{errors?.date?.message}</div>
                    </div>
                    <div className='form-group row m-3'>
                        <label className="col-sm-2 col-form-label">Hour</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="time" {...register('hour',{required: {value: true, message: 'Valor requerido'}})}/>
                        </div>
                        <div>{errors?.hour?.message}</div>
                    </div>
                    <div className='form-group row m-3'>
                        <label className="col-sm-2 col-form-label">Client</label>
                        <div className="col-sm-10">
                            <select className="form-select" onChange={props.selected}>
                                <option value={0} >----------</option>
                                {props.professionalList.map(data =>
                                    
                                    <option key={data.id} value={data.id}>{data.names}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className='form-group row m-3'>
                        <label className="col-sm-2 col-form-label">User</label>
                        <div className="col-sm-10">
                            <select className="form-select" onChange={props.selectedEmploye}>
                                <option value={0} >----------</option>
                                {props.employeeList.map(data =>
                                    
                                    <option key={data.id} value={data.id}>{data.professional} - {data.names}</option>
                                )}
                            </select>
                        </div>
                    </div>
                        <div className='text-center'>
                            <button className="btn btn-success w-50 m-1" type="submit">Edit User</button>
                            <button className="btn btn-warning w-50 m-1" onClick={() => props.setEditing(false)} >Cancel</button>
                        </div>
                    </form>
            </div>
            </div>
        </div>
        
    )
}
