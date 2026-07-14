import { useEffect, useState } from "react"
import { assets } from "../assets/assets"
import axios from "axios"
function Add(){
    const[image, setImage] = useState(false)
    const[data, setData] = useState({
        title:"",
        price:"",
        description:"",
        yearlyPlan:"",
        facilities:""
    })
    const url="https://gym-flow-mern.vercel.app"
    function handleChange(e){
        const{name, value} = e.target
        setData({...data,[name]:value})
    }
    // useEffect(()=>{
    //     console.log(data);
        
    // },[data])
    async function handleSubmit(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", data.title)
        formData.append("price", data.price)
        formData.append("description", data.description)
        formData.append("yearlyPlan", data.yearlyPlan)
        formData.append("facilities", data.facilities)
        formData.append("image", image)
        const response = await axios.post(`${url}/api/product/add`, formData)
        if(response.data.success){
            setData({
                title:"",
                price:"",
                description:"",
                yearlyPlan:"",
                facilities:""
            })
            setImage(false)
            alert(response.data.message)
        }
        else{
            alert("Error! something went wrong")
        }
    }
    return (
        <div>
            <p className="text-center text-2xl font-bold mt-5 underline">Add Membership Details</p>
            <div className="mx-10">
                <form>
                    <div className="my-5">
                        <p>Upload Image</p>
                        <label htmlFor="image">
                            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="Upload Preview" className="h-20 w-20"/>
                        </label>
                        <input type="file" id="image" hidden required onChange={(e)=>{setImage(e.target.files[0])}}/>
                    </div>

                    <div className="my-5">
                        <p>Membership Title</p>
                        <input type="text" placeholder="Type here" value= {data.title} name="title" className="w-full px-4 py-2 outline focus:outline-none focus:ring-2 focus:ring-gray-700 rounded" onChange={handleChange} />
                    </div>

                    <div className="my-5">
                        <p>Membership Price</p>
                        <input type="number" placeholder="Type here" value= {data.price} name="price" className="w-full px-4 py-2 outline focus:outline-none focus:ring-2 focus:ring-gray-700 rounded" onChange={handleChange} />
                    </div>

                    <div className="my-5">
                        <p>Yearly Plan</p>
                        <input type="text" placeholder="Type here" value= {data.yearlyPlan} name="yearlyPlan" className="w-full px-4 py-2 outline focus:outline-none focus:ring-2 focus:ring-gray-700 rounded" onChange={handleChange} />
                    </div>

                    <div className="my-5">
                        <p>Membership Description</p>
                        <textarea name="description" id="" placeholder="Type Here"  value= {data.description} className="w-full px-4 py-2 outline focus:outline-none focus:ring-2 focus:ring-gray-700 rounded"  onChange={handleChange}></textarea>
                    </div>

                    <div className="my-5">
                        <p>Facilities Included</p>
                        <input type="text" placeholder="Type here" value= {data.facilities} name="facilities" className="w-full px-4 py-2 outline focus:outline-none focus:ring-2 focus:ring-gray-700 rounded" onChange={handleChange} />
                    </div>

                    <div className="my-5">
                        <button type="submit" className="bg-blue-600 px-8 py-2 text-white font-bold rounded cursor-pointer" onClick={handleSubmit}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add