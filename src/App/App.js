import axios from "axios";


export const productApi = axios.create({
    baseURL: "http://localhost:5000"
});

export const getProducts=()=>{
     return productApi.get("/products");
}

export const deleteProduct=(product)=>{
     return productApi.delete(`/products/${product.id}`);
}

export const getProduct=(id)=>{
    return productApi.get(`/products/${id}`);
}

export const saveProduct=(product)=>{
    return productApi.post(`/products`,product);
}

export const checkProduct=(product)=>{
    return productApi.patch(`/products`,{checked:!product.checked})
}

export const updateProduct=(product)=>{
    return productApi.put(`/products`,product)
}