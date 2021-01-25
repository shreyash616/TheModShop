export const getKeyValue = (keyList, data) => {
    if(data){        
        if(keyList instanceof Array){
            if(keyList.length > 0){
                let output = data
                keyList.forEach((key)=>{
                    if(output[key]){
                        output = output[key]
                    } else {
                        return output
                    }                    
                })
                return output
            } else {
                return data
            }
        } else {
            return data
        }
    } else {
        return null
    }
}