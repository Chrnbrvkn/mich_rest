import { useState, useEffect } from "react"
import { getAparts, deleteApart } from "../apartsApi"
import AddApartForm from "./AddApartForm"
import ApartItem from './ApartItem'

export default function ApartList({
  handleEdit,
  apartFormData,
  onChange,
  aparts,
  onFetchAparts,
  showApartForm,
  onToggleApartForm,
}) {

  const handleDeleteApart = async (id, name) => {
    await deleteApart(id, name)
    onFetchAparts()
  }

  return (<>
    {
      showApartForm ? (
        <AddApartForm
          apartFormData={apartFormData}
          onChange={onChange}
          onApartAdded={onFetchAparts}
        />
      ) : (
        <div className="houses__list" >
          <div className="houses__list-top">
            <p>Список Квартир</p>
            <button onClick={onToggleApartForm}
              className="houses__list-add">
              Добавить
            </button>
          </div>
          {aparts.length === 0 ? (
            <div>Список Квартир пуст</div>
          ) : aparts.map(apart => (
            <ApartItem
              handleEdit={handleEdit}
              key={apart.id}
              apart={apart}
              onDelete={() => handleDeleteApart(apart.id, apart.name)}
            />
          ))}
        </div>
      )
    }
  </>)
}