import { useState, useEffect, useCallback } from "react"
import ApartList from "./parts/ApartList"
import HouseList from "./parts/HouseList"
import RoomList from "./parts/RoomList"
import EditForm from './parts/EditForm'
import { getHouses, deleteHouse } from "./housesApi"
import { getAparts, deleteApart } from "./apartsApi"
import { getRooms, deleteRoom } from "./roomsApi"
import './admin.css'

export default function Admin() {
  const [selectedTable, setSelectedTable] = useState('')
  const [showHouseForm, setShowHouseForm] = useState(false)
  const [showRoomForm, setShowRoomForm] = useState(false)
  const [showApartForm, setShowApartForm] = useState(false)

  const [content, setContent] = useState('list')
  const [editId, setEditId] = useState(null)
  const [editType, setEditType] = useState('')
  const [selectedHouseId, setSelcectedHouseId] = useState(null)

  const handleSelectHouse = (id) => {
    setSelcectedHouseId(id)
    console.log("Выбран дом с ID:", id);
  }

  const handleSelectedTable = (table) => {
    setSelectedTable(table);
    setShowHouseForm(false);
    setShowRoomForm(false);
    setShowApartForm(false);
    setContent('list');
    setSelcectedHouseId(null)
  }

  const handleEdit = (id, type) => {
    setEditId(id)
    setContent('edit')
    setEditType(type)
  }

  const handleEditSubmit = () => {
    setContent('list');
    fetchAparts();
  };
  const renderContent = () => {
    switch (content) {
      case 'edit':
        return <EditForm id={editId} onEditSubmit={handleEditSubmit} type={editType} />;
      case 'list':
      default:
        return (
          <>{tableComponents[selectedTable]}</>
        )
    }
  }

  const [houses, setHouses] = useState([])
  const [houseFormData, setHouseFormData] = useState({})
  const [aparts, setAparts] = useState([])
  const [apartFormData, setApartFormData] = useState({})
  const [roomFormData, setRoomFormData] = useState({})

  const handleHouseFormChange = (data) => {
    setHouseFormData(data)
  }
  const handleApartFormChange = (data) => {
    setApartFormData(data)
  }
  const handleRoomFormChange = (data) => {
    setRoomFormData(data)
  }
  const fetchHouses = useCallback(async () => {
    try {
      const fetchedHouses = await getHouses();
      setHouses(fetchedHouses);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchHouses();
  }, [fetchHouses]);

  const fetchAparts = useCallback(async () => {
    try {
      const fetchedAparts = await getAparts();
      setAparts(fetchedAparts);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchAparts();
  }, [fetchAparts]);
  // console.log(aparts);


  const tableComponents = {
    houses: <HouseList
      handleEdit={handleEdit}
      houseFormData={houseFormData}
      onChange={handleHouseFormChange}
      houses={houses}
      onFetchHouses={fetchHouses}
      showHouseForm={showHouseForm}
      onToggleHouseForm={() => setShowHouseForm(prev => !prev)}
    />,
    apartments: <ApartList
      handleEdit={handleEdit}
      apartFormData={apartFormData}
      onChange={handleApartFormChange}
      aparts={aparts}
      onFetchAparts={fetchAparts}
      showApartForm={showApartForm}
      onToggleApartForm={() => setShowApartForm(prev => !prev)}
    />,
    rooms: <RoomList
      selectedHouseId={selectedHouseId}
      handleSelectHouse={handleSelectHouse}
      roomFormData={roomFormData}
      onChange={handleRoomFormChange}
      houses={houses}
      showRoomForm={showRoomForm}
      onToggleRoomForm={() => setShowRoomForm(prev => !prev)}
    />,
  };

  return (
    <>
      <h6 className="admin__title">
        Панель администратора
      </h6>
      <div className="container">
        <div className="admin__container">
          <div className="admin__sidebar">
            <button onClick={() => handleSelectedTable('houses')} className="admin__sidebar-button">Список домов</button>
            <button onClick={() => handleSelectedTable('apartments')} className="admin__sidebar-button">Список квартир</button>
            <button onClick={() => handleSelectedTable('rooms')} className="admin__sidebar-button">Список комнат</button>
          </div>
          <div className="table_items">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  )
}