const sql = require('mssql');
const bcrypt = require('bcrypt');
const bcryptPromise = require('bcrypt-promise');
const { poolPromise } = require('../data/db');
const jwt = require('jsonwebtoken');

const getAllTaverns = async function(req) {
    const pool = await poolPromise;
    let result;
    try {
        result = await pool
            .request()
            .input('UserId', sql.Int, req.user.Id)
            .query(
                'SELECT Rooms.id, RoomName, RoomStatus, DailyRate FROM Users join Rooms on Users.TavernID = Rooms.TavernID where Users.ID = 1',
            );
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