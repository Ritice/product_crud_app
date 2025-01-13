import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

export function Products(){

    const [products,setProducts]=useState([]);

    useEffect=(()=>{
           handleGetProducts()
    },[])

    //fonction qui permet de recuperer la liste des produit sur le serveur
    const handleGetProducts=()=>{
        axios.get("http://localhost:5000/products")
          .then(resp=>{
              const products=resp.data;
              setProducts(products);
          })
          .catch(err=>{
             console.log(err);
          }

          )
    }

    //fonction quit permet de supprimer un produit
    const handleDeleteProduct=(product)=>{
        const newProduct=products.filter(p=>p.id!=product.id);
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
                                                <button className="btn btn-outline-success">
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