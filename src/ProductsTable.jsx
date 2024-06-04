import ProductsInTable from './ProductsInTable.jsx';

function ProductsTable({ products,handleDelete }) {
    return (
        <>
            <table className='table' >
                <thead>
                    <tr>
                        <th>ID producto</th>
                        <th>Descripción</th>
                        <th>Valor Unitario</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <ProductsInTable 
                            key={index} 
                            productId={product.productId} 
                            description={product.description} 
                            unitValue={product.unitValue} 
                            quantity={product.quantity} 
                            ondelete = { handleDelete}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ProductsTable;
