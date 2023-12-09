import { useParams } from 'react-router-dom';

export default function Apartament() {
  const { apartId } = useParams();
  // Здесь вы можете использовать apartId для запроса к БД

  return (
    <div>
      Apartament ID: {apartId}
    </div>
  );
}
