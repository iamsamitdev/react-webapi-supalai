import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import BackendLayout from "../components/layouts/BackendLayout";
import api from "../../services/productAPI"
import { useState, useEffect } from "react";

function Dashboard() {

    // Create state for products
    const [products, setProducts] = useState([])

    // Read all products
    const readAllProducts = () => {
        api.getAllProducts().then((res) => {
            setProducts(res.data)
        })
    }

    // Initial load with useEffect
    useEffect(() => {
        readAllProducts()
    }, [])

    // console.log(products)

    return (
        <BackendLayout>
            <Box>
                <Typography sx={styles.pageTitle} variant="h5">Products</Typography>
                <Box sx={styles.columnsContainer}>
                   <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Category</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Image</TableCell>
                                    <TableCell>Qty</TableCell>
                                    <TableCell>Create</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { 
                                    products.map((product: any, index: any) => (
                                        <TableRow key={index}>
                                            <TableCell>{product.productID}</TableCell>
                                            <TableCell>{product.categoryID}</TableCell>
                                            <TableCell>{product.productName}</TableCell>
                                            <TableCell>{product.unitPrice}</TableCell>
                                            <TableCell>
                                                <img
                                                    className=""
                                                    src={product.productPicture}
                                                    width={50}
                                                />
                                            </TableCell>
                                            <TableCell>{product.unitInStock}</TableCell>
                                            <TableCell>{product.createdDate}</TableCell>
                                            <TableCell>
                                                <Button variant="contained" color="warning">Edit</Button>&nbsp;&nbsp;
                                                <Button variant="contained" color="error">Delete</Button>
                                            </TableCell>
                                        </TableRow>
                                    )) 
                                }
                            </TableBody>
                        </Table>
                   </TableContainer>
                </Box>
            </Box>
        </BackendLayout>
    )
}

export default Dashboard;

const styles = {
    pageTitle: {
        mb: 2
    },
    columnsContainer: {
        columns: '280px 1',
        maxWidth: 1400
    },
    item: {
        mb: 2,
    },
    divider: {
        my: 2
    },
    videoStatsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        mt: 2,
        '&:hover': {
            color: 'primary.main',
            cursor: 'pointer'
        }
    },
    cardAction: {
        mt: 2
    },
    ideaContent: {
        display: 'flex',
    },
    ideaImage: {
        width: 80,
        alignSelf: 'center',
        ml: 5
    },
    ideaQuestion: {
        fontSize: '0.9rem',
        fontWeight: 500,
        my: 2
    },
    avatar: {
        width: '30px',
        height: 'auto',
        marginRight: 1
    },
    postStats: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridAutoRows: '25px'
    },
    postAuthorSection: {
        display: 'flex',
        alignItems: 'center',
        my: 3
    },
    postMeta: {
        mr: 1,
        fontSize: '0.8rem',
        color: 'neutral.normal'
    },
    videoThumbnail: {
        width: 80,
        ml: 'auto'
    },
    commentRow: {
        display: 'flex',
        alignItems: 'flex-start',
        mt: 2
    },
    commentDetailsSection: {
        display: 'flex',
        alignItems: 'center',
    },
    commentText: {
        fontSize: '0.8rem',
        mt: 0.5,
        mr: 2
    },
    insiderImage: {
        width: '100%',
        mt: 1
    }
}

