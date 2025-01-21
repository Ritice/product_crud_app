import axios from "axios";


export const productApi = axios.create({
    baseURL: "http://localhost:5000"
});

export const getProducts=(keyword="",page=1,size=3)=>{
     return productApi.get(`/produits?name_like=${keyword}&_page=${page}&_limit=${size}`);
}

export const deleteProduct=(product)=>{
     return productApi.delete(`/produits/${product.id}`);
}

export const getProduct=(id)=>{
    return productApi.get(`/produits/${id}`);
}

export const saveProduct=(product)=>{
    return productApi.post(`/produits`,product);
}

export const checkProduct=(product)=>{
    return productApi.patch(`/produits/${product.id}`,{checked:!product.checked})
}

export const updateProduct=(product)=>{
    return productApi.put(`/produits/${product.id}`,product)
}