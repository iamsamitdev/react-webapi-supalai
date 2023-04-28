import { TextField, Button } from "@mui/material"
import AuthLayout from "../components/layouts/AuthLayout"
import { useForm } from "react-hook-form"
import api from "../../services/authUserAPI"

const Login = () => {

  // Create useForm hook
  const { register, handleSubmit, formState: { errors } } = useForm()

  // Handle submit
  const onSubmit = (data: any) => {
    
    // Call API
    const authData = {
      "username": data.username,
      "password": data.password
    }

    api.authLogin(authData).then((res: any) => {
       // Save token to local storage
       localStorage.setItem("token", res.data.token)
       // Redirect to dashboard
       window.location.href = "/dashboard"
    }).catch((err: any) => {
      console.log(err)
    })

  }

  return (
    <AuthLayout>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField label="Username" 
          type="text" 
          variant="outlined"
          {...register("username", { required: true, minLength: 5 })}
          error={errors.username ? true : false}
          helperText={errors.username ? "Username is required" : ""}
          />
        </div>

        <div>
          <TextField label="Password" 
          type="password" 
          variant="outlined" 
          {...register("password", { required: true })}
          error={errors.password ? true : false}
          helperText={errors.password ? "Password is required" : ""}
          />
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Login
