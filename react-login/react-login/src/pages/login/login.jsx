import { Link, useNavigate } from "react-router-dom"
import api from "../../services/api";
import { useRef } from "react";



function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {

        const response = await api.post("/login", {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });

            await api.post("/login", {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });
            localStorage.setItem('token', response.data.token);
            // Redirecionar para a dashboard
            navigate("/dashboard");
        } catch {
            alert("Senha ou email incorretos");
        }
    }

return (
        <div className="flex flex-col items-center justify-center h-screen font-primary">
            <h1 className=" cursor-default text-4xl p-5">Wellcome back!</h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label className="ml-4 text-gray-400">
                    <span className="text-red-400">*</span> Email
                </label>
                <input
                    required ref={emailRef}
                    className="border-gray-300 outline-none border p-2 rounded-2xl placeholder-gray-400 placeholder:p-2 placeholder:text-sm, font-light w-2xl mb-4"
                    type="email"
                    placeholder="email@example.com"
                    id="email"
                />
                <label className="ml-4 text-gray-400">
                    <span className="text-red-400">*</span> Password
                </label>
                <input
                    required ref={passwordRef}
                    className="border-gray-300 outline-none border p-2 rounded-2xl placeholder-gray-400 placeholder:p-2 placeholder:text-sm, font-light w-2xl"
                    type="password"
                    placeholder="Password"
                    id="password"
                />
                <div className="flex justify-center">
                    <button
                        className="cursor-pointer bg-black hover:bg-gray-800 text-white p-2 rounded-2xl w-3xs mt-4 mt-10"
                        type="submit"
                    >
                        Singup
                    </button>
                </div>
            </form>
            <div className="mt-10 flex gap-2">
                <p className="cursor-default opacity-20">Don't have an account?</p>
                <Link className="opacity-100 hover:underline" to="./dashboard">
                    Register now
                </Link>
            </div>
        </div>
    )
}

export default Login