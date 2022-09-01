import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

import "../css/components/productList.css";

function ProductList () {

    //Data products
    const [data, setData] = useState(productRows);
    // Delete product
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        {field:"product",headerName:"Product",width:90,},
        {
            field:"product", 
            headerName:"Product", 
            width:200, 
            renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img className='productListImg' src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {field: "status",headerName: "Status",width: 120,},
        {field: "price",headerName: "Price",width: 160,},
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
              return (
                <>
                  <Link to={"/product/" + params.row.id}>
                    <button className="productListEdit">Edit</button>
                  </Link>
                  <DeleteOutline
                    className="productListDelete"
                    onClick={() => handleDelete(params.row.id)}
                  />
                </>
              );
            },
        }
    ];


    return (
        <div className='productList'>
            <DataGrid 
                rows={data}
                disableSelectionOnclik
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    )
}

export default ProductList;