'use strict'

const Storage = require('../models/alma.model')


const createstorage = async (req, res) => {
    const {name} = req.body;
    try{
        let storage = await Storage.findOne({name: name});
        if(storage) {
            return res.status(400).send({
                message: 'Ya existe un usuario con este Nombre',
                ok: false, 
                storage: storage,
            });
        }
        storage = new Storage(req.body);
        storage = await storage.save();

    }catch (err) {
        throw new Error (err)
    }
};

const liststorage = async (req, res) => {
    try{
        const storages = await Storage.find();
        if(!storages){
            res.status(404).send({message: 'No hay usuarios'});
        }else{
            res.status(200).json({'Usuarios encontrados': storages });
        }
    }catch (err){
        throw new Error (err);
    }
};

const editstorage = async (req, res) => {
    try{
        const id = req.params.id;
        const editStorage = {...req.body};
        const storagecomplete = await Storage.findByIdAndUpdate(id, editStorage, {new: true,});
        return res.status(200).send({
            message: 'Usuario actualizado correctamente',
            storagecomplete
        });
    }catch (err){
        throw new Error(err);
    }
};

const deletestorage = async (req, res) =>{
    try{
        const id = req.params.id;
        const deletestorage = await Storage.finByIdAndDelete(id);
        return res
        .status(200)
        .send({message: 'Usuario eliminado correctamente', deletestorage});
    }catch (err){
        throw new Error(err);
    }
};

module.exports = {
    createstorage,
    liststorage,
    editstorage,
    deletestorage
}