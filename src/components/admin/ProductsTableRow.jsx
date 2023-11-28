import Button from 'react-bootstrap/Button';

function ProductsTableRow({name, sku, price, id}) {
  return (
        <tr>
            <td>{name}</td>
            <td>{sku}</td>
            <td>{price}</td>
            <td align="right">
                <Button href={"/admin/product/edit/" + id} variant="primary" size="sm">Edit</Button>
            </td>
        </tr>
  );
}

export default ProductsTableRow;