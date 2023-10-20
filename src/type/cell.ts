export interface ICellProps {
  index: number;
  title: string;
  backgroundImage: string | null;
  boatImage: string | null;
  typeImage: string | null;
  level: number;
  clickHandler: (index: number) => void;
}
