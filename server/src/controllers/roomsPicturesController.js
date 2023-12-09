const { RoomsPictures } = require('../models/models');
const fs = require('fs');
const path = require('path');

class RoomsPicturesController {

  async getPictures(req, res) {
    const { roomId } = req.params;
    console.log("Requested Room ID:", roomId);
    try {
      const pictures = await RoomsPictures.findAll({
        where: { roomId: roomId }
      });
      if (pictures.length === 0) {
        return res.json([]);
      }
      return res.json(pictures);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getOnePicture(req, res) {
    const { roomId, imageId } = req.params;
    try {
      const picture = await RoomsPictures.findOne({
        where: {
          id: imageId,
          roomId: roomId
        }
      });
      if (!picture) {
        return res.status(404).json({ error: 'Picture not found' });
      }
      return res.json(picture);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async uploadPictures(req, res) {
    try {
      const { roomId } = req.params; // Обновлено: Использование параметра из URL
      if (!roomId) {
        return res.status(400).json({ error: 'Room ID is required' });
      }

      const pictureUrls = [];
      for (const file of req.files) {
        const tempUrl = '/uploads/roomsPictures/' + file.filename;
        const picture = await RoomsPictures.create({ url: tempUrl, roomId: roomId });
        pictureUrls.push(picture.url);
      }

      return res.json(pictureUrls);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deletePicture(req, res) {
    const { roomId, imageId } = req.params;
    try {
      const picture = await RoomsPictures.findByPk(imageId);
      if (!picture || picture.roomId !== parseInt(roomId, 10)) {
        return res.status(404).json({ error: 'Picture not found' });
      }

      const filePath = path.join(__dirname, '..', picture.url);
      await picture.destroy();

      fs.unlink(filePath, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
          return res.status(500).json({ error: 'Failed to delete the file' });
        }
        return res.json({ message: 'Picture deleted successfully' });
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

}

module.exports = new RoomsPicturesController();
