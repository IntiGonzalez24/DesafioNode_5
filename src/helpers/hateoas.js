const HATEOAS = async(entity,data)=>{
    const results = data.map((item)=>{
        return {
            

            
                
                    name:item.nombre,
                    href:`/${entity}/joya/${item.id}`
                
            
        }
    }).slice(0,4)
    console.log(results);
    const total = data.length
    const dataWithHateoas ={
        total,
        results
    }
    console.log(dataWithHateoas);
    return dataWithHateoas
    
    
}

export default HATEOAS;