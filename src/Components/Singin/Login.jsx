import { useForm } from "react-hook-form";

export default function Login (){
    const { register, handleSubmit,formState:{errors} } = useForm();
    const onSubmit = data => console.log(data)

    return(
        <>
        <div className="bg-dark">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-6 m-5">
                    <div className="card">
                    <div className="card-header">
                        <h4 className="text-center">Log In</h4>
                    </div>
                    <div className="card-body">
                        <form id='form' onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label  className="form-label">Email address</label>
                            <input type="text" 
                            className="form-control" 
                            {...register('email',{required:true , pattern:/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/})}
                            placeholder="Enter email"/>
                            <div id="emailHelp" className="form-text text-danger">
                            <small className="form-text text-danger" >
                                {errors.email?.type === 'required' && "We'll never share your Email with anyone else"}
                                {errors.email?.type === 'pattern' && "Email must   letters ( uppercase and lowercase), Numbers, @ , $ , . , - . EX: abc.12@gmail.com"}
                            </small>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" 
                            className="form-control" 
                            {...register('password',{required: true,minLength : 8 , pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/})}
                            placeholder="Enter password" />
                            <div id="emailHelp" className="form-text text-danger">
                            <small className="form-text text-danger">
                              {errors.password?.type ==='minLength' && " Your password must be at least 8 characters long"} 
                              {errors.password?.type ==='required' && " We'll never share your Password with anyone else"} 
                              {errors.password?.type ==='pattern' && " must include at least one lowercase letter, one uppercase letter, one number, and one special symbol."}
                            </small>
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Log in</button>
                        </div>
                        </form>
                    </div>
                    <div className="card-footer text-center">
                        <h6 className="mb-0">Already have account! <a href="/register">Register</a></h6>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
    }