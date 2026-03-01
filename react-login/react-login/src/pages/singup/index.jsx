import { Link } from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api";

function Singup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await api.post("/register", {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });
        } catch {
            alert("Erro ao criar conta");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen font-primary">
            <h1 className=" cursor-default text-4xl p-5">Wellcome to our app!</h1>
            <form onSubmit={handleSubmit} className="flex flex-col ">
                <label className="ml-4 text-gray-400">
                    <span className="text-red-400">*</span> Name
                </label>
                <input
                    required
                    ref={nameRef}
                    className="border-gray-300 outline-none border p-2 rounded-2xl placeholder-gray-400 placeholder:p-2 placeholder:text-sm, font-light w-2xl mb-4"
                    type="text"
                    placeholder="Ex: John Doe"
                    id="name"
                />

                <label className="ml-4 text-gray-400">
                    <span className="text-red-400">*</span> Email
                </label>
                <input
                    required
                    ref={emailRef}
                    className="border-gray-300 outline-none border p-2 rounded-2xl placeholder-gray-400 placeholder:p-2 placeholder:text-sm, font-light w-2xl mb-4"
                    type="email"
                    placeholder="email@example.com"
                    id="email"
                />

                <label className="ml-4 text-gray-400">
                    <span className="text-red-400">*</span> Password
                </label>
                <input
                    required
                    ref={passwordRef}
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
                <p className="cursor-default opacity-20">Already have an account?</p>
                <Link className="opacity-100 hover:underline" to="/login">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Singup;
