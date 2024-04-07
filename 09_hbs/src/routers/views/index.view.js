import {Router} from "express"
import viewProducts from "./products.view.js"

const viewsRouter=Router()
viewsRouter.use("/products",viewProducts)
viewsRouter.get("/", (req, res, next) => {
    try {
       
      return res.render("index",{
        title:'HOME'});
      
    } catch (error) {
        
      return next(error);
    }
  });

export default viewsRouter