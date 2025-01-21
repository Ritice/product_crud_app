import React, { useState } from "react";
import { saveProduct } from "../App/App";

export function New_product(){
    const [name, setName]=useState("");
    const [price, setPrice]=useState();
    const [checked, setChecked]=useState(false);

    const handleSavePorduct=(event)=>{
        event.preventDefault();
        let product={name,price,checked};
         saveProduct(product)
           .then((rep)=>{
              alert(JSON.stringify(rep.data));
           })
           .catch((err)=>{
            console.log(err)
           })
         }

    return(
        <div className="row p-2">
         <div className="col-md-6">
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSavePorduct}>
                        <div className="mb-3">
                            <label className="form-label"> Name :</label>
                            <input className="form-control" 
                             onChange={(e)=>setName(e.target.value)}
                             value={name} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Price :</label>
                            <input className="form-control" type="number"
                             onChange={(e)=>setPrice(e.target.value)} 
                             value={price}/>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" 
                             onChange={(e)=>setChecked(e.target.value)} 
                             value={setChecked}/>
                            <label className=" form-check-label" >Checked</label>
                        </div>
                        <button className="btn btn-success"> Save</button>
                    </form>
                </div>
            </div>
         </div>
    </div>
    )
}