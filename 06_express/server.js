import express from "express";

//server
//se crea el servidor
const server=express();
const port=8080;
const ready=()=>console.log("server ready on port"+port)
//se inicia/levanta el servidor

server.listen(port,ready);
//middlewares
server.use(express.urlencoded({extended:true}));//obligo al servidor a usar la función encargada de leer parámetros/consultas
//permite leer req.params y req.query

//router
server.get("/",async(request,response)=>{
try {
    return response.status(200).json({
        respuesta:"Api ok",
        succes:true
    })
} catch (error) {
    console.log(error)
    return response.status(500).json({
        respuesta:"coder Api error",
        succes:false
    })
}
})

server.get("/api/products/:title",async(req,resp)=>{
   
    try {
        
        const{title}=req.params
        return resp.status(201).json({
            respuesta:title,
            succes:true,
            
        })
        
    } catch (error) {
        console.log(error)
        return resp.status(500).json({
            respuesta:"coder Api error",
            succes:false
        })
    }
})