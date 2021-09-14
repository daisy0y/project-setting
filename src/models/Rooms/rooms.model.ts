import { MainRoomsType } from 'enums/MainRoomsType';

export const initialStateMainRoomsList = {
  roomTypeId: 0,
  roomTypeName: '고미',
  thumbnail: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256_960_720.jpg',
};
export interface MainRoomsList {
  roomTypeId: Number;
  roomTypeName: MainRoomsType;
  thumbnail: string;
}

export interface RoomsListContent {
  roomId: number;
  roomName: string;
  roomType: string;
  price: number;
  squareFeet: number;
  personnelDefault: number;
  personnelLimit: number;
  options: string[];
  roomDesc: string;
  roomImages: string[];
}
