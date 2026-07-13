import {NavLink} from "react-router-dom"

function Sidebar(){
    return (
        <div className="w-64 min-h-screen bg-gray-700 text-white shadow-md">
            <ul className="py-5 ms-5">
                <li className="my-5"><NavLink to="/add">Add Memberships</NavLink></li>
                <li className="my-5"><NavLink to="/list">List Memberships</NavLink></li>
                <li className="my-5"><NavLink to="/memberList">List Members</NavLink></li>
            </ul>
        </div>
    )
}

export default Sidebar