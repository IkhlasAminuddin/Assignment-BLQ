import axios from 'axios'
import {config} from '../config/config'

export const ProductService = {
    getAllProduct: () => {
        const result = axios
        .get(config.apiUrl+"api/product")
        .then((response) => {
            return {
                success: response.data.success,
                data: response.data.data
            }
        })
        .catch((error) => {
            return {
                success: false,
                data: error
            }
        })
        return result
    },

    addProduct: (data) => {
        const result = axios
        .post(config.apiUrl+`api/addproduct`, data)
        .then((response) => {
            return {
                success: response.data.success,
                data: response.data.data
            }
        })
        .catch((error) => {
            return {
                success: false,
                data: error,
            }
        })
    return result
    },

    getProductById: (id) => {
        const result = axios
        .get(config.apiUrl+`api/product/${id}`)
        .then((response) => {
            return {
                success: response.data.success,
                data: response.data.data
            }
        })
        .catch((error) => {
            return {
                success: false,
                data: error,
            }
        })
        return result
    },

    editProduct: (data) => {
        console.log("cek data edit:",data)
        const result = axios
        .put(config.apiUrl+`api/editproduct/${data.id}`, data)
        .then((response) => {
            return {
                success: response.data.success,
                data: response.data.data,
            }
        })
        .catch((error) => {
            return {
                success: false,
                data: error,
            }
        })
        return result
    },

    deleteProduct: (id) => {
        const result = axios
        .put(config.apiUrl+`api/deleteproduct/${id}`)
        .then((response) => {
            return {
                success: response.data.success,
                data: response.data.data
            }
        })
        .catch((error) => {
            return {
                success: false,
                data: error
            }
        })
        return result
    },

    activeProduct : (id) => {
        const result = axios
        .put(config.apiUrl+ `api/activeproduct/${id}`)
        .then((response) => {
            return {
                success: response.data.success,
                data: response.data.data
            }
        })
        .catch((error) => {
            return {
                success: false,
                data: error
            }
        })
        return result
    },
}