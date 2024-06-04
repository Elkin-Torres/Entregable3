
function ProductsInTable({ productId, description, unitValue, quantity,  ondelete}) {

    return (
        <tr>
            <td>{productId}</td>
            <td>{description}</td>
            <td>{unitValue}</td>
            <td>{quantity}</td>
            <td>{unitValue * quantity}</td>
            <td><button onClick={() => ondelete(productId)}>Eliminar</button></td>
        </tr>
    );
}

export default ProductsInTable;
