import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const updateUserAfterBooking = async (req, res, next) => {
  try {
    await User.updateOne(
      { _id: req.params.id },
      {
        $push: {
          booking: {
            reservationId: req.body.reservationId,
            roomId: req.body.roomId,
            dateStart: req.body.dateStart,
            dateEnd: req.body.dateEnd,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            email: req.body.email,
            numberOfPerson: req.body.numberOfPerson,
            message: req.body.message,
            placePrice: req.body.placePrice,
          },
        },
      }
    );
    const responce = {
      reservationId: req.body.reservationId,
      roomId: req.body.roomId,
      dateStart: req.body.dateStart,
      dateEnd: req.body.dateEnd,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      numberOfPerson: req.body.numberOfPerson,
      message: req.body.message,
      placePrice: req.body.placePrice,
    };
    res.status(200).json(responce);
  } catch (err) {
    next(err);
  }
};

export const cancelBooking = async (req, res, next) => {
  try {
    await User.updateOne(
      { _id: req.params.id },
      {
        $pull: {
          booking: {
            reservationId: req.body.reservationId,
          },
        },
      }
    );
    res.status(200).json(`Бронь удалена успешно`);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Юзер был удален");
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
