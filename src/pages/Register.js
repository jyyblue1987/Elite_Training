import {useEffect, useState} from 'react';
import axios from 'axios';

const GLOBAL = require('../Globals');

export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    useEffect(() => {
        console.log("Register");
    }, []);

    const onClickSignUp = async(event) => {
        event.preventDefault();

        console.log("onClickSignUp");

        const user = {
            username: username,
            email: email,
            password: password,
            crossdomain: true
          };
      
        axios.post(GLOBAL.BASE_URL + `register`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

	return (
        <div>
            <section className="flex flex-col">
                <div className="flex flex-1 items-center justify-center">
                    <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                        <form className="text-center">
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                                Sign-up
                            </h1>
                            <div className="py-2 text-left">
                                <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " 
                                    placeholder="Username" 
                                    onChange={(event) => setUsername(event.target.value)}
                                    value={username}
                                    />
                            </div>
                            <div className="py-2 text-left">
                                <input type="email" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " 
                                    onChange={(event) => setEmail(event.target.value)}
                                    value={email}
                                    placeholder="Email" 
                                />
                            </div>
                            <div className="py-2 text-left">
                                <input type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " 
                                    onChange={(event) => setPassword(event.target.value)}
                                    value={password}
                                    placeholder="Password" />
                            </div>
                            <div className="py-2">
                                <button type="button" className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                                    onClick={(event) => {onClickSignUp(event);}}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                       
                        <div className="text-center mt-12">
                            <span>
                                Don't have an account?
                            </span>
                            <a href="/register" className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800"> Create One</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

