import Room from "../models/Room.js";

export const createRoom = async (req, res, next) => {
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {
      $set: req.body,
      new: true,
    });
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { _id: req.params.id },
      {
        $push: {
          booked: {
            reservationId: req.body.reservationId,
            userId: req.body.userId,
            dateStart: req.body.dateStart,
            dateEnd: req.body.dateEnd,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            email: req.body.email,
            numberOfPerson: req.body.numberOfPerson,
            userId: req.body.userId,
            message: req.body.message,
            placePrice: req.body.placePrice,
          },
        },
      }
    );
    const responce = {
      reservationId: req.body.reservationId,
      userId: req.body.userId,
      dateStart: req.body.dateStart,
      dateEnd: req.body.dateEnd,
      fistName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      numberOfPerson: req.body.numberOfPerson,
      message: req.body.message,
      placePrice: req.body.pricePlace,
    };
    res.status(200).json(responce);
  } catch (err) {
    next(err);
  }
};

export const deleteRoom = async (req, res, next) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("Комната была удалена");
  } catch (err) {
    next(err);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
