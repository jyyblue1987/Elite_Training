export default function Lifting() {
    return (
        <div className="p-8 flex justify-center font-sans">
            <div className="rounded bg-gray-200 w-64 p-2">
                <div className="text-sm">
                    <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                        <a href="/workout/Alarm" className="text-base font-medium underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Alarm</a>
                    </div>                    
                    <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                        <a href="/workout/Legs" className="text-base font-medium underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Legs</a>
                    </div>  

                    <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                        <a href="/workout/Black" className="text-base font-medium underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Black</a>
                    </div>  

                    <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                        <a href="/workout/Abs" className="text-base font-medium underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Abs</a>
                    </div>  
                </div>
            </div>
        </div>
    )
}