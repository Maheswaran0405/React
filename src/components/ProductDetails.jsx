import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      <Outlet />
    </div>
  );
}

export default ProductDetails;