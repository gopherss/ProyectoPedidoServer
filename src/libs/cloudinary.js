const { v2 } = require('cloudinary');

/* 
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

v2.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});
 */
v2.config({
    cloud_name: 'decpz9zpg',
    api_key: 473389138449566,
    api_secret: 'OuGC8NQpneNs3jxt2YvYWD4If8Y'
});


const subirImagen = async filePath => {
    return await v2.uploader.upload(filePath, {
        folder: 'restaurate-1',
    });
}

const eliminarImagen = async id => {
    return await v2.uploader.destroy(id);
}

module.exports = {
    subirImagen,
    eliminarImagen
}

