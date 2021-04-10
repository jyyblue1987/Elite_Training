import {useState} from 'react';
import axios from 'axios';

import {
    useParams
} from "react-router-dom";

export default function Login() {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [content, setContent] = useState("");

    let { category } = useParams();
    
    const onClickAdd = async(event) => {
        event.preventDefault();

        console.log("onClickAdd");

        const data = {
            category: category,
            title: title,
            time: time,            
            difficulty: difficulty,            
            content: content,                        
        };

        var result = await axios.post(`workout/add`, data );

        console.log(result);
    }

	return (
        <div>
            <section className="flex flex-col">
                <div className="flex flex-1 items-center justify-center">
                    <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                        <form className="text-center">
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                                Add Workout
                            </h1>
                            <div className="py-2 text-left">
                                <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Title" 
                                    onChange={(event) => setTitle(event.target.value)}
                                    value={title}
                                    />
                            </div>
                            <div className="py-2 text-left">
                                <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Time" 
                                    onChange={(event) => setTime(event.target.value)}
                                    value={time}
                                    />
                            </div>
                            <div className="py-2 text-left">
                                <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Difficulty" 
                                    onChange={(event) => setDifficulty(event.target.value)}
                                    value={difficulty}
                                    />
                            </div>
                            <div className="py-2 text-left">
                                <textarea type="text" rows="5" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Workout Content"
                                onChange={(event) => setContent(event.target.value)}                                
                                value={content}
                                >   
                                </textarea>
                            </div>

                            <div className="py-2">
                                <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                                onClick={(event) => {onClickAdd(event);}}
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                       
                    </div>
                </div>
            </section>
        </div>
    );
}

