export type DataProps = {
  id: string;
  name: string;
  price: number;
  creator: string;
  description: string;
  image: ImageSourcePropType;
  bids: {
    id: string;
    name: string;
    price: number;
    image: ImageSourcePropType;
    date: string;
  }[];
};

export type BidProps = {
  id: string;
  name: string;
  price: number;
  image: any;
  date: string;
};