import { useForm } from "react-hook-form";
import { useState, useRef, useCallback, useEffect } from "react";
import { getHouse, updateHouse, getHouseImages, uploadHousePictures, deleteHousePicture } from "../../../api/housesApi";
import { houseFields } from "../../../constants/formFields"; 

export default function EditHouse({ id, onEditSubmit }) {
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
  const [pictures, setPictures] = useState([]);
  const [existingPictures, setExistingPictures] = useState([]);
  const picturesInput = useRef();
  const [houseName, setHouseName] = useState('');

  const fetchHouseData = useCallback(async () => {
    try {
      const houseData = await getHouse(id);
      if (houseData) {
        setHouseName(houseData.name);
        Object.keys(houseData).forEach(key => {
          setValue(key, houseData[key]);
        });
      }
    } catch (e) {
      console.log(e);
    }
  }, [id, setValue]);

  const fetchHouseImages = async () => {
    try {
      const existingPictures = await getHouseImages(id);
      setExistingPictures(existingPictures);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchHouseData();
    fetchHouseImages();
  }, [fetchHouseData]);

  const handleDeleteImage = async (imageId) => {
    try {
      await deleteHousePicture(id, imageId);
      setExistingPictures(existingPictures.filter(picture => picture.id !== imageId));
    } catch (e) {
      console.error("Ошибка при удалении изображения:", e);
    }
  };

  const renderExistingImage = () => existingPictures.map(picture => (
    <div key={picture.id}>
      <img className="edit__image" src={'http://localhost:3000' + picture.url} alt="House" />
      <button onClick={() => handleDeleteImage(picture.id)}>Удалить</button>
    </div>
  ));

  const clearField = (fieldName) => {
    setValue(fieldName, '');
  };

  const handleImageChange = useCallback((e) => {
    const files = Array.from(e.target.files);
    if (files) {
      setPictures(files)
    }
  }, []);

  const onSubmit = useCallback(async (data) => {

    try {
      const newHouseData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        newHouseData.append(key, value);
      });

      await updateHouse(id, newHouseData);
      if (pictures.length > 0) {
        await uploadHousePictures(pictures, id);
      }
      console.log(`${data.name} updated!`);

      reset();
      setPictures([]);
      if (picturesInput.current) {
        picturesInput.current.value = null;
      }
      onEditSubmit();
    } catch (e) {
      console.log(e);
    }
  }, [reset, pictures, onEditSubmit]);

  return (
    <div className="houses_form-add">
    
      <div>Изменить дом {houseName}</div>
      {renderExistingImage()}
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        {houseFields.map((field, index) => (
          <div key={index}>
            <label>{field.label}</label>
            <input
              placeholder={field.label}
              type={field.type}
              name={field.name}
              {...register(field.name, { required: true })}
            />
            {errors[field.name] && <span>{field.error}</span>}
            <button type="button" onClick={() => clearField(field.name)}>Очистить</button>
          </div>
        ))}
        <div>
          <label>Фотографии дома</label>
          <input
            type="file"
            name="houseImages"
            accept="image/*"
            onChange={handleImageChange}
            ref={picturesInput}
            multiple
          />
        </div>
        <button type="submit">Сохранить дом</button>
      </form>
    </div>
  );
}
