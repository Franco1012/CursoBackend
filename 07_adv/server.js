import express from "express";
import gestorDeProductos from "./app/fs/ProductManager.js";    
//configuración server
const server=express();
const port=8080
const ready=()=>console.log("server ready on port"+port)

server.listen(port,ready)

//middlewares
server.use(express.urlencoded({extended:true}))
server.use(express.json())

//router
server.get("/",(req,res)=>{
    try {
        return res.json({
            statusCode:200,
            message:"Api is running"
        })
        
    } catch (error) {
        return res.json({
         statusCode:500,
         message:"coder Api Error"
        })
    }
})
const create=async(req,res)=>{
    try {
        const data=req.body
        const product=await gestorDeProductos.create(data)
        return res.json({
            statusCode:201,
            message:"Product created"+product.id,
            
        })
        
    } catch (error) {
        return res.json({
            statusCode:error.statusCode||500,
            message:error.message||"coder Api Error"
           })
    }
}

const update=async(req,res)=>{
    try {
        const {pid}=req.params
        const data=req.body
        const product=await gestorDeProductos.update(pid,data)

        return res.json({
            statusCode:200,
            message:"UPDATE ID"+product.id,
            
        })
    } catch (error) {
        return res.json({
            statusCode:error.statusCode||500,
            message:error.message||"coder Api Error"
           })
    }
}
const destroy=async(req,res)=>{
    try {
        const {pid}=req.params
        const product=await gestorDeProductos.destroy(pid)
        return res.json({
            statusCode:200,
            message:"DELETE ID"+product.id,
            
        })
    } catch (error) {
        return res.json({
            statusCode:error.statusCode||500,
            message:error.message||"coder Api Error"
           })
    }
  
}


server.post("/api/products",create)
server.put("/api/products/:pid",update)
server.delete("/api/products/:pid",destroy)