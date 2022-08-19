import React from 'react'
import { useForm } from 'react-hook-form'

export function EditForm2(props){

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

   // setValue('name', props.currentUser.name)
   // setValue('username', props.currentUser.username)

    const onSubmit = (data, e) => {
        //data.id = props.currentUser.id
        console.log(data,"ID:",props.currentUser.id)
        props.updateUser(props.currentUser.id, data)//regresamos los datos ya actualizados
        e.target.reset()
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-input'>
                    <label>CUI</label>
                    <input type="number" {...register('cui',{required: {value: true, message: 'Valor requerido'}})}/>
                    <div>{errors?.cui?.message}</div>
                </div>
                <div className='form-input'>
                    <label>Names</label>
                    <input type="text" {...register('names',{required: {value: true, message: 'Valor requerido'}})}/>
                    <div>{errors?.names?.message}</div>
                </div>
                <div className='form-input'>
                    <label>Last Names</label>
                    <input type="text" {...register('last_names',{required: {value: true, message: 'Valor requerido'}})}/>
                    <div>{errors?.last_names?.message}</div>
                </div>
                <div className='form-input'>
                    <label>Phone_Number</label>
                    <input type="number" {...register('phone_number',{required: {value: true, message: 'Valor requerido'}})}/>
                    <div>{errors?.phone_number?.message}</div>
                </div>
                <div className='form-input'>
                    <label>Address</label>
                    <input type="text" {...register('address',{required: {value: true, message: 'Valor requerido'}})}/>
                    <div>{errors?.address?.message}</div>
                </div>
                <div className='form-input'>
                    <label>Age</label>
                    <input type="number" {...register('age',{required: {value: true, message: 'Valor requerido'}})}/>
                    <div>{errors?.age?.message}</div>
                </div>
                <div className='form-input'>
                    <label>Birthday</label>
                    <input type="date" {...register('birthday',{required: {value: true, message: 'Valor requerido'}})}/>
                    <div>{errors?.birthday?.message}</div>
                </div>
                <div className='form-input'>
                    <label>Carrera</label>
                    <input type="text" {...register('carrera',{required: {value: true, message: 'Valor requerido'}})}/>
                    <div>{errors?.carrera?.message}</div>
                </div>
                <div className='form-input'>
                    <label>Fono</label>
                    <input type="text" {...register('fono',{required: {value: true, message: 'Valor requerido'}})}/>
                    <div>{errors?.fono?.message}</div>
                </div>
                <div className='form-input'>
                    <label>Prevision</label>
                    <input type="text" {...register('prevision',{required: {value: true, message: 'Valor requerido'}})}/>
                    <div>{errors?.prevision?.message}</div>
                </div>
                <div className='form-input'>
                    <label>Input Date</label>
                    <input type="date" {...register('input_date',{required: {value: true, message: 'Valor requerido'}})}/>
                    <div>{errors?.input_date?.message}</div>
                </div>

            <button type="submit">Edit user</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</button>
        </form>
    )
}