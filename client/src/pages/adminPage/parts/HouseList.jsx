import { useState, useEffect } from "react";
import { getHouses, deleteHouse } from "../housesApi";
import AddHouseForm from "./AddHouseForm";
import HouseItem from "./HouseItem";

export default function HouseList({
  houses,
  handleEdit,
  houseFormData,
  onChange,
  onFetchHouses,
  showHouseForm,
  onToggleHouseForm,
}) {

  const handleDeleteHouse = async (houseId, name) => {
    await deleteHouse(houseId, name);
    onFetchHouses(); // Обновить список после удаления
  };

  return (
    <>
      {showHouseForm ? (
        <AddHouseForm
          houseFormData={houseFormData}
          onChange={onChange}
          onHouseAdded={onFetchHouses}
        />
      ) : (
        <div className="houses__list">
          <div className="houses__list-top">
            <p>Список домов</p>
            <button onClick={onToggleHouseForm} className="houses__list-add">
              Добавить
            </button>
          </div>
          {houses.length === 0 ? (
            <div>Список домов пуст</div>
          ) :
            houses.map(house => (
              <HouseItem
                handleEdit={handleEdit}
                key={house.id}
                house={house}
                onDelete={() => handleDeleteHouse(house.id, house.name)}
              />
            ))
          }
        </div>
      )}
    </>
  );
}
