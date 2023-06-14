import { useForm } from "react-hook-form";

export default function Register() {
    const { register, handleSubmit,watch,formState:{errors} } = useForm();
    const onSubmit = data => console.log(data)
    console.log(watch('name'))
    const password = watch("password");
//   const confirm = watch("confirm");

  const passwordMatch = (value) => {
    return value === password || "Passwords do not match";
  }
    
    return (
        <>
        <div className="bg-dark">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-6 m-5">
                    <div className="card">
                    <div className="card-header">
                        <h4 className="text-center">Registration</h4>
                    </div>
                    <div className="card-body">
                        <form id='form' onSubmit={handleSubmit(onSubmit)}>
                        <div className="m-3">
                            <label  className="form-label">Name</label>
                            <input type="text" className="form-control" 
                            placeholder="Enter your name"
                            {...register('name',{required:true,pattern:/^[A-Za-z]+$/})}
                            />
                            <div id="emailHelp" className="form-text text-danger" >
                            <small className="form-text text-danger" >
                              {errors.name?.type === 'required' && "We'll never share your Name with anyone else"}  
                              {errors.name?.type === 'pattern' && "Name must not start number or #$@ and no spaces"}
                            </small>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Username</label>
                            <input type="text" 
                            className="form-control" 
                            {...register('username',{required:true , pattern:/^@[^ ]*/})}
                            placeholder="Enter username"/>
                        </div>
                        <div id="emailHelp" className="form-text text-danger">
                            <small className="form-text text-danger">
                            {errors.username?.type === 'required' && "We'll never share your Username with anyone else"}
                            {errors.username?.type === 'pattern' && "Username must  start @ and no spaces."}
                            </small>
                            </div>
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
                        <div className="mb-3">
                            <label  className="form-label">Confirm Password</label>
                            <input type="password" 
                            className="form-control"
                            {...register('confirm',{ required: true, minLength: 8, validate: passwordMatch })}
                            placeholder="Confirm password"
                            />
                            <div id="emailHelp" className="form-text text-danger">
                            <small className="form-text text-danger">
                              {errors.confirm?.type ==='validate' && " Passwords do not match"}
                            </small>
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        </form>
                    </div>
                    <div className="card-footer text-center">
                        <h6 className="mb-0">Already have account! <a href="/login">Login</a></h6>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
  </>
                
    )
}


// const [ regForm , setForm ] = useState({
    //     name: "",
    //     email: '',
    //     username: '',
    //     password: '',
    //     confirmPassword: '',

    // });


    // const [ regFormErrors , setFormErrors ] = useState({
    //     nameError: null,
    //     emailError: null,
    //     usernameError: null,
    //     passwordError: null,
    //     confirmPasswordError: null,

    // });

    // const handleChange = (e) => {
    //     // const { name, value } = e.target;
    //     // setForm({ ...regForm, [name]: value });
    //     // console.log(e.target.name ,e.target.value)
    //    switch (e.target.name){
    //     case 'name' :
    //         setForm({
    //             ...regForm,
    //             name: e.target.value
    //         })

    //         setFormErrors({
    //             ...regFormErrors,
    //             nameError :e.target.value
    //         })
    //         break;
    //     case 'username' :
    //         setForm({
    //             ...regForm,
    //             username: e.target.value
    //         })
    //         break;
    //     case 'email' :
    //         setForm({
    //             ...regForm,
    //             email: e.target.value
    //         })
    //         break;
    //     case 'password' :
    //         setForm({
    //             ...regForm,
    //             password: e.target.value
    //         })
    //         break; 
    //     case 'confirmPassword' :
    //         setForm({
    //             ...regForm,
    //             confirmPassword: e.target.value
    //         })
    //         default:
    //             break;

    //    }
    //   };

    //   const handleSubmit = (e) => { // used to stop refresh button
    //     e.preventDefault();
    //     console.log(regForm)
    //   }