function Login() {
    return(
        <div>
            <form id="login"> 
                <div>
                    <h3>Username:</h3>
                    <textarea name="Username" id="username">

                    </textarea>
                </div>
                <div>
                    <h3>Password:</h3>
                    <textarea name="Password" id="password" ></textarea>
                </div>
                <button id="loginSubmit">Submit</button>
            </form>
        </div>
    )
}

export default Login