import { useEffect, useState } from 'react';
import BillForm from './BillForm.jsx';
import ProductsTable from './ProductsTable.jsx';
import Values from './Values.jsx';



function App() {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [iva, setIva] = useState(0);
  const [total, setTotal] = useState(0);

  //agregar productos
  const handleFormSubmit = (product) => {
    setProducts([...products, product]);
  };

  //eliminación de productos
  const handleDelete = (id) =>{
    const newProducts = products.filter(product => product.productId !== id );
    setProducts(newProducts);
  };

  useEffect(() => {
    //sumar la totalidad de precios, el iva y el total de ambos
    const newSubtotal = products.reduce((acc, product) => acc + product.unitValue * product.quantity, 0);
    const newIva = newSubtotal * 0.16;
    const newTotal = newSubtotal + newIva;

    setSubtotal(newSubtotal);
    setIva(newIva);
    setTotal(newTotal);
  }, [products]);

  return (
    <>
      <BillForm onSubmit={handleFormSubmit} />
      <ProductsTable products={products} handleDelete={handleDelete} />
      <Values subtotal={subtotal} iva={iva} total={total} />
    </>
  )
}

export default App
