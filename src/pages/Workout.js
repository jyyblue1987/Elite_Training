import {
    useParams
} from "react-router-dom";

export default function Workout() {
    let { category } = useParams();
    console.log(category);

    return (
        <div>
            <div class="text-center">
                <h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">{category}</h1>
            </div>
            <div className="p-8 flex justify-center font-sans">
                <div className="rounded bg-gray-200 w-64 p-2">
                    <div className="text-sm">
                        <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                            <a href="/lifting/alarm" className="text-base font-medium underline text-blue-600 hover:text-blue-800 visited:text-purple-600">1. Workout 1</a>
                        </div>                    
                        <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                            <a href="/lifting/alarm" className="text-base font-medium underline text-blue-600 hover:text-blue-800 visited:text-purple-600">2. Workout 2</a>
                        </div>  

                        <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                            <a href="/lifting/alarm" className="text-base font-medium underline text-blue-600 hover:text-blue-800 visited:text-purple-600">3. Workout 3</a>
                        </div>  

                        <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                            <a href="/lifting/alarm" className="text-base font-medium underline text-blue-600 hover:text-blue-800 visited:text-purple-600">4. Workout 4</a>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}