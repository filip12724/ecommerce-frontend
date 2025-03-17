import axios from "axios";

export default{
    async getProducts(context){
        try{
            const response=await axios.get("http://127.0.0.1:8000/api/products")
            const responseData=response.data
            context.commit('setProducts',responseData)
        }
        catch(error){
            console.error("Error fetching data:", error);
        }
    }
}