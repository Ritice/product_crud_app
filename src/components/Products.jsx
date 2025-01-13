import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { getProducts } from "../App/App";

export function Products(){

    const [products,setProducts]=useState([]);

    useEffect(()=>{
           handleGetProducts()
    },[])

    //fonction qui permet de recuperer la liste des produit sur le serveur
    const handleGetProducts=()=>{
        getProducts()
           .then(resp=>{
            setProducts(resp.data);
           })
           .catch(err=>{
            console.log(err)
           })
    }

    //fonction quit permet de supprimer un produit
    const handleDeleteProduct=(product)=>{
        const newProduct=products.filter((p)=>p.id!=product.id);
        setProducts(newProduct);   
    }
    
    //fonction qui permet de mettre ajour le checked
    const handleCheckProduct=(product)=>{
        const newProduct=products.map(p=>{
            if(p.id==product.id){
                p.checked=!p.checked;
            }
            return p;
        })
        setProducts(newProduct); 

    }
    return(
        <div className="p-1 m-1">
          <div className="row"> 
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>PRICE</th>
                                    <th>CHECKED</th>
                                </tr>
                            </thead>

                            <tbody>
                                  {
                                    products.map(product=>(
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                <button onClick={()=>handleCheckProduct(product)} className="btn btn-outline-success">
                                                    <FontAwesomeIcon icon={product.checked?faCheckCircle:faCircle}></FontAwesomeIcon>

                                                </button> 
                                            </td>
                                            <td>
                                                <button onClick={()=>handleDeleteProduct(product)} className="btn btn-outline-danger">
                                                 <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                  }
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
               
          </div>
    </div>
    )
}