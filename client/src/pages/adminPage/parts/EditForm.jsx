import { useState, useRef, useCallback, useEffect } from "react"
import { createApart, uploadApartPictures } from "../apartsApi"
import { useForm } from "react-hook-form"
import EditApart from "./EditApart"
import EditHouse from "./EditHouse"
import EditRoom from "./EditRoom"

export default function EditForm({ type, id, onEditSubmit }) {

  const renderEditForm = () => {
    switch (type) {
      case 'house':
        return (
          <EditHouse id={id} onEditSubmit={onEditSubmit}/>
        )
      case 'apart':
        return (
          <EditApart id={id} onEditSubmit={onEditSubmit} />
        )
      case 'room':
        return (
          <EditRoom id={id} onEditSubmit={onEditSubmit}/>
        )
      default:
        <p>Unknown type!</p>
    }
  }
  return (
    <>
      {renderEditForm()}
    </>
  )
}