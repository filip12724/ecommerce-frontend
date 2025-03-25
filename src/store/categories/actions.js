import axios from "axios";

export default{
    async getCategories(context){

        try{

            const response= await axios.get('http://127.0.0.1:8000/api/categories')

            if(response.status >= 200 && response.status < 300){
                
                context.commit('setCategories',response.data.data)
                return { success: true, data: response.data };
            }else {
                throw new Error(`Unexpected status code: ${response.status}`);
            }

        }catch(error){

            let errorMessage = 'An error occurred while fetching categories';
            let statusCode = null;
    
            if (error.response) {
    
              statusCode = error.response.status;
              errorMessage = error.response.data?.message || errorMessage;
              
    
              switch(statusCode) {
                case 429:
                  errorMessage = 'Too many requests. Please try again later.';
                  break;
                case 404:
                  errorMessage = 'No products found';
                  break;
              }
            } else if (error.request) {
                errorMessage = 'Network error - please check your connection';
              }
            context.commit('setError', {
                message: errorMessage,
                code: statusCode,
                timestamp: Date.now()
            });
              
            return { 
                success: false, 
                error: errorMessage,
                code: statusCode
            };
        }




    }
}