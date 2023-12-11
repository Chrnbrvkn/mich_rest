import { useState, useEffect } from "react";
import { getRooms, deleteRoom } from "../../../api/roomsApi";
import AddRoomForm from "./AddRoomForm";
import RoomItem from "./RoomItem";
import { getHouse } from "../../../api/housesApi";

export default function RoomList({
  selectedHouseId,
  handleSelectHouse,
  roomFormData,
  onChange,
  houses,
  showRoomForm,
  onToggleRoomForm,
}) {
  const [rooms, setRooms] = useState([]);
  const [editingRoom, setEditingRoom] = useState(null);
  const [currentHouse, setCurrentHouse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHouseAndRooms = async () => {
      if (!selectedHouseId) return;
      setIsLoading(true);
      try {
        const houseData = await getHouse(selectedHouseId);
        setCurrentHouse(houseData);
        const roomsData = await getRooms(selectedHouseId);
        setRooms(roomsData);
      } catch (e) {
        console.error("Ошибка при получении данных:", e);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHouseAndRooms();
  }, [selectedHouseId]);

  const handleEditRoom = (room) => {
    setEditingRoom(room);
    onToggleRoomForm();
  };

  const handleDeleteRoom = async (id, name) => {
    await deleteRoom(id, name);
    setRooms(prevRooms => prevRooms.filter(room => room.id !== id));
  };

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <>
      {!selectedHouseId && (
        <div>
          <div>Выберите дом</div>
          {houses.map(house => (
            <div key={house.id}>
              <button onClick={() => handleSelectHouse(house.id)}>
                {house.name}
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedHouseId && (
        <>
          {showRoomForm ? (
            <AddRoomForm
              houseName={currentHouse.name}
              selectedHouseId={selectedHouseId}
              roomFormData={editingRoom || roomFormData}
              onChange={onChange}
            />
          ) : (
            <div className="houses__list">
              <div className="houses__list-top">
                <p>Список Комнат "{currentHouse.name}"</p>
                <button onClick={() => handleEditRoom(rooms)} className="houses__list-add">
                  Добавить
                </button>
              </div>
              {rooms.length === 0 ? <div>Список комнат пуст</div> : rooms.map(room => (
                <RoomItem
                  handleEdit={handleEditRoom}
                  key={room.id}
                  room={room}
                  onDelete={() => handleDeleteRoom(room.id)}
                />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
