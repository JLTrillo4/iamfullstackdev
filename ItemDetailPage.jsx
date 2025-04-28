import { useParams } from 'react-router-dom';

const ItemDetailPage = () => {
  const { id } = useParams();

  return (
    <section className="item-detail">
      <h2>Detalle del Item</h2>
      <p>Estás viendo el item con ID: <strong>{id}</strong></p>
    </section>
  );
};

export default ItemDetailPage;