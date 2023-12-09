const { ApartsPictures } = require('../models/models');
const fs = require('fs');
const path = require('path');

class ApartsPicturesController {

  async getPictures(req, res) {
    const { apartId } = req.params;
    try {
      const pictures = await ApartsPictures.findAll({
        where: { apartId: apartId }
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
    const { apartId, imageId } = req.params;
    try {
      const picture = await ApartsPictures.findOne({
        where: {
          id: imageId,
          apartId: apartId
        }
      });
      console.log(picture);
      if (!picture) {
        return [];
      }
      return res.json(picture);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async uploadPictures(req, res) {
    try {
      const { apartId } = req.params;
      if (!apartId) {
        return res.status(400).json({ error: 'Apartment ID is required' });
      }

      const pictureUrls = [];
      for (const file of req.files) {
        const tempUrl = '/uploads/apartsPictures/' + file.filename;
        const picture = await ApartsPictures.create({ url: tempUrl, apartId: apartId });
        pictureUrls.push(picture.url);
      }

      return res.json(pictureUrls);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deletePicture(req, res) {
    const { apartId, imageId } = req.params;
    try {
      const picture = await ApartsPictures.findByPk(imageId);
      if (!picture || picture.apartId !== parseInt(apartId, 10)) {
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

module.exports = new ApartsPicturesController();
