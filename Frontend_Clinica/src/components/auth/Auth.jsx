import { useForm } from 'react-hook-form'
import {methodGet} from '../../service/api.js'
import {useNavigate } from 'react-router-dom'

export function Auth(){

    const navigate = useNavigate();

    const {register, errors, handleSubmit} = useForm();
    
    
    const onSubmit = async (data, e) => {
       // console.log(data.email,data.password)
        const user = await handleLogin(data.email,data.password)
        //console.log(user[0].names)
        Greetig(user[0])
        e.target.reset();
    }

    const handleLogin = async (email,password)=>{
        //console.log("HANDLE: ",email,password)
        const user = await methodGet(`login/?email=${email}&password=${password}`)
        return user
    }

    function Greetig(dato) {
        //console.log('---->',dato)
        if (dato != undefined) {
            //console.log("en ADMIN");
            navigate('/admin');
        }else{
            //console.log("en LOGIN");
            navigate('/');
        }
      }

    return(

        <div className='container text-center position-absolute top-50 start-50 translate-middle'>
            <div className='row justify-content-center align-items-center'>
                <div className="col-auto bg-light ">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <h1 className="h3 mb-3 fw-normal">Log In</h1>
                        <div className="form-floating m-4" >
                            <input type="email" className="form-control" placeholder="Password" {...register('email',{required: {value: true, message: 'Valor requerido'}})}/>
                            <div>{errors?.email?.message}</div>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating m-4">
                            <input type="password" className="form-control"  placeholder="Password" {...register('password',{required: {value: true, message: 'Valor requerido'}})}/>
                            <div>{errors?.password?.message}</div>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="submit">Log In</button>
                        <p className="mt-5 mb-3 text-muted">© Dental Clinic Smilie</p>
                    </form>
                </div>
            </div>
        </div>

        
    )
}
