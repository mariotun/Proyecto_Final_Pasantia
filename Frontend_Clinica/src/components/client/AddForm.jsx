import React from 'react';
import { useForm } from 'react-hook-form'

export function AddClient(props){

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        //data.id = null
        //console.log(data)
        props.addUser(data)
        e.target.reset();
    }

    return(
        <div className='container p-3'>
            <div className='row justify-content-center align-items-center'>
            <div className="col-auto bg-light ">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className='form-group row m-3'>
                            <label className="col-sm-2 col-form-label">CUI</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="number" {...register('cui',{required: {value: true, message: 'Valor requerido'}})}/>
                            </div>
                            <div>{errors?.cui?.message}</div>
                        </div>
                        <div className='form-group row m-3'>
                            <label className="col-sm-2 col-form-label">Names</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" {...register('names',{required: {value: true, message: 'Valor requerido'}})}/>
                            </div>
                            <div>{errors?.names?.message}</div>
                        </div>
                        <div className='form-group row m-3'>
                            <label className="col-sm-2 col-form-label">Last Names</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" {...register('last_names',{required: {value: true, message: 'Valor requerido'}})}/>
                            </div>
                            <div>{errors?.last_names?.message}</div>
                        </div>
                        <div className='form-group row m-3'>
                            <label className="col-sm-2 col-form-label">Phone Number</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="number" {...register('phone_number',{required: {value: true, message: 'Valor requerido'}})}/>
                            </div>
                            <div>{errors?.phone_number?.message}</div>
                        </div>
                        <div className='form-group row m-3'>
                            <label className="col-sm-2 col-form-label">Address</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" {...register('address',{required: {value: true, message: 'Valor requerido'}})}/>
                            </div>
                            <div>{errors?.address?.message}</div>
                        </div>
                        <div className='form-group row m-3'>
                            <label className="col-sm-2 col-form-label">Age</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="number" {...register('age',{required: {value: true, message: 'Valor requerido'}})}/>
                            </div>
                            <div>{errors?.age?.message}</div>
                        </div>
                        <div className='form-group row m-3'>
                            <label className="col-sm-2 col-form-label">Birthday</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="date" {...register('birthday',{required: {value: true, message: 'Valor requerido'}})}/>
                            </div>
                            <div>{errors?.birthday?.message}</div>
                        </div>
                        <div className='form-group row m-3'>
                            <label className="col-sm-2 col-form-label">Carrera</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" {...register('carrera',{required: {value: true, message: 'Valor requerido'}})}/>
                            </div> 
                            <div>{errors?.carrera?.message}</div>
                        </div>
                        <div className='form-group row m-3'>
                            <label className="col-sm-2 col-form-label">Fono</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" {...register('fono',{required: {value: true, message: 'Valor requerido'}})}/>
                            </div>
                            <div>{errors?.fono?.message}</div>
                        </div>
                        <div className='form-group row m-3'>
                            <label className="col-sm-2 col-form-label">Prevision</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" {...register('prevision',{required: {value: true, message: 'Valor requerido'}})}/>
                            </div>
                            <div>{errors?.prevision?.message}</div>
                        </div>
                        <div className='form-group row m-3'>
                            <label className="col-sm-2 col-form-label">Input Date</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="date" {...register('input_date',{required: {value: true, message: 'Valor requerido'}})}/>
                            </div>
                            <div>{errors?.input_date?.message}</div>
                        </div>
                        <div className='text-center'>
                            <button className="btn btn-primary w-50" type="submit">Add new client</button>
                        </div>
                    </form>
            </div>
            </div>
        </div>
    )
}