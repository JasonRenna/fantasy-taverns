const sql = require('mssql');
const bcrypt = require('bcrypt');
const bcryptPromise = require('bcrypt-promise');
const { poolPromise } = require('../data/db');
const jwt = require('jsonwebtoken');

const getAllTaverns = async function(req, res) {
    const pool = await poolPromise;
    let result;
    try {
        result = await pool
            .request()
            .input('TavernId', sql.Int, req.user.TavernID)
            .query(
                'SELECT distinct Taverns.TavernName, Rooms.id, RoomName, RoomStatus, DailyRate FROM Users join Rooms on Users.TavernID = Rooms.TavernID join Taverns on Users.TavernID = Taverns.ID where Taverns.ID = @TavernId',
            );
            console.log(JSON.stringify(req.user));
        } catch (e) {
        throwError(e.message);
    }

    return result.recordset;
};

module.exports.getAllTaverns = getAllTaverns;

getAll = async function(req, res) {
    res.setHeader('ContentType', 'application/json');

    let err, user;
    
    [err, user] = await executeOrThrow(getAllTaverns(req));
    if (err) {
        return returnError(res, err, 422);
    }

    return returnSuccessResponse(res, user, 201);
};

module.exports.getAll = getAll;

const addRoom = async function(req, res) {
    res.setHeader('ContentType', 'application/json');
    const body = req.body;

    if (!body.RoomName) {
        return returnError(res, 'Please enter a room name', 422);
    }
    else{
        if (!body.DailyRate){
            return returnError(res, 'Please enter a room rate', 422);
        }
    }
    const pool = await poolPromise;

    try {
        console.log('try add')
        room = await pool
            .request()
            .input('RoomName', sql.VarChar, body.RoomName)
            .input('DailyRate', sql.Int, body.DailyRate)
            .input('TavernId', sql.Int, req.user.TavernID)
            .query(
                'INSERT INTO Rooms (RoomName, RoomStatus, TavernID, DailyRate) VALUES (@RoomName, 0, @TavernId, @DailyRate)',
            );
        room = room.recordset;
        console.log(room)
    } catch (e) {
        console.log('add fail')
        returnError(res, e, 500);
    }
    return returnSuccessResponse(res, room, 201);
};

module.exports.addRoom = addRoom;

const updateRoom = async function(req, res) {
    res.setHeader('ContentType', 'application/json');
    const body = req.body;

    if (!body.RoomName) {
        return returnError(res, 'Please enter a room name', 422);
    }
    else{
        if (!body.DailyRate){
            return returnError(res, 'Please enter a room rate', 422);
        }
    }
    const pool = await poolPromise;

    try {
        console.log('try update')
        room = await pool
            .request()
            .input('ID', sql.Int, body.ID)
            .input('RoomName', sql.VarChar, body.RoomName)
            .input('DailyRate', sql.Int, body.DailyRate)
            .input('TavernId', sql.Int, req.user.TavernID)
            .query(
                'UPDATE [dbo].[Rooms] SET RoomName = @RoomName ,DailyRate = @DailyRate WHERE TavernId = @TavernId and ID = @ID',
            );
        room = room.recordset;
        console.log(room)
    } catch (e) {
        console.log('update fail')
        returnError(res, e, 500);
    }
    return returnSuccessResponse(res, room, 201);
};
module.exports.updateRoom = updateRoom;

const bookRoom = async function(req, res) {
    res.setHeader('ContentType', 'application/json');
    const body = req.body;

    if (!body.RoomName) {
        return returnError(res, 'Please enter a room name', 422);
    }
    else{
        if (!body.DailyRate){
            return returnError(res, 'Please enter a room rate', 422);
        }
    }
    const pool = await poolPromise;

    try {
        console.log('try add')
        room = await pool
            .request()
            .input('RoomName', sql.VarChar, body.RoomName)
            .input('DailyRate', sql.Int, body.DailyRate)
            .input('TavernId', sql.Int, req.user.TavernID)
            .query(
                'INSERT INTO Rooms (RoomName, RoomStatus, TavernID, DailyRate) VALUES (@RoomName, 0, @TavernId, @DailyRate)',
            );
        room = room.recordset;
        console.log(room)
    } catch (e) {
        console.log('add fail')
        returnError(res, e, 500);
    }
    return returnSuccessResponse(res, room, 201);
};

module.exports.bookRoom = bookRoom;