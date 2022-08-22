import React from 'react';
import { useForm } from 'react-hook-form'

export function AddProfessional(props){

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        props.addUser(data)
        e.target.reset();
    }

    return(
        <div className='container p-3'>
            <div className='row justify-content-center align-items-center'>
            <div className="col-sm-6 bg-light">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className='form-group row m-3'>
                            <label className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-8">
                                <input className="form-control" type="text" {...register('name',{required: {value: true, message: 'Valor requerido'}})}/>
                            </div>
                            <div>{errors?.name?.message}</div>
                        </div>
                        <div className='form-group row m-3'>
                            <label className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-8">
                                <input className="form-control" type="text" {...register('description',{required: {value: true, message: 'Valor requerido'}})}/>
                            </div>
                            <div>{errors?.description?.message}</div>
                        </div>
                        <div className='text-center'>
                            <button className="btn btn-primary w-50" type="submit">Add new professional</button>
                        </div>
                    </form>
            </div>
            </div>
        </div>
    )
}