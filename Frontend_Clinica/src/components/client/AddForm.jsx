import React from 'react';
import { useForm } from 'react-hook-form'

export function AddClient(props){

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        //data.id = null
        console.log(data)
        props.addUser(data)
        e.target.reset();
    }

    return(
        <div className='form-client'>
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
                
                <button type="submit">Add new client</button>
            </form>
        </div>
    )
}