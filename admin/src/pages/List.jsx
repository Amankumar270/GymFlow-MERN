import { useEffect, useState } from "react"
import axios from "axios"
function List(){
    const[list, setList]=useState([])
    const url="https://gym-flow-mern.vercel.app/";
    async function fetchData(){
        const response = await axios.get(`${url}/api/product/list`)
        // console.log(response.data.data);
        if(response.data.success){
            setList(response.data.data)
        }
    }
    useEffect(()=>{
        fetchData()
    })
    return(
        <div>
            <p className="text-center text-2xl font-bold mt-5 underline">All Memberships</p>
            <div className="mx-10">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-500">Image</th>
                            <th className="border border-gray-500">Membership title</th>
                            <th className="border border-gray-500">Membership price</th>
                            <th className="border border-gray-500">Yearly Plan</th>
                            <th className="border border-gray-500">Facilities Included</th>
                            <th className="border border-gray-500">Delete</th>
                         </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((product)=><tr key={product._id}>
                                <td className="border border-greay-500"><img src={`${url}/images/`+product.image} alt="product image" className="h-10 w-10 rounded-full border-2 border-red-500" /></td>
                                <td className="border border-gray-500">{product.title}</td>
                                <td className="border border-gray-500">{product.price}</td>
                                <td className="border border-gray-500">{product.yearlyPlan}</td>
                                <td className="border border-gray-500">{product.facilities}</td>
                                </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List