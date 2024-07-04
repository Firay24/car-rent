export interface CarProps {
  id: number;
  name: string;
  type: string;
  tankSize: number;
  capacity: number;
  transmissionType: string;
  price: number;
  previousPrice: number;
  isLike: boolean;
  img: string;
  time?: string;
}
