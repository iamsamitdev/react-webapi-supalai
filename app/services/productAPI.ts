import http from './configAxios'

// Read All Products
const getAllProducts = () => {
    return http.get('/Products')
}

export default { getAllProducts }