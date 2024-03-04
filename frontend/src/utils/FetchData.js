export const fetchData=async (url,options)=>{

    const opt=options==null?{
        method:'GET',
        mode:'cors'
    }:options

        try {
            const res=await fetch(url,opt)
            if(!res.ok){
                throw new Error ('Error during fetching data: '+res.statusText)
            }
            const jres= await res.json()
                return jres;
        } catch (error) {
            throw new Error (`Error in fetching data: ${error}`)
        }
    
  
}