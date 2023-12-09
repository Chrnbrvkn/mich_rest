
export default function RoomItem({
  handleEdit,
  room,
  onDelete,
}) {
  const TYPE = 'room'
  const handleClickEdit = () => {
    handleEdit(room.id, TYPE)
  }

  return (
    <div key={room.id}>
      <a className="houses__list-item">
        {room.name}
      </a>
      <div className="home__redact-buttons">
        <button onClick={handleClickEdit}
          className="houses__list-update">
          Изменить
        </button>
        <button className="houses__list-delete" onClick={() => onDelete(room.id)}>
          Удалить
        </button>
      </div>
    </div>
  )
}
