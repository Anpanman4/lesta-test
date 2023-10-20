export const levelNumbers = new Map<number, string>([
  [1, "I"],
  [2, "II"],
  [3, "III"],
  [4, "IV"],
  [5, "V"],
  [6, "VI"],
  [7, "VII"],
  [8, "VIII"],
  [9, "IX"],
  [10, "X"],
  [11, "XI"],
]);

export interface IFilterClass {
  name: string;
  link: string;
}

export interface IFilterLevel {
  gameNumber: string;
  defaultNumber: number;
}

export interface IFilterNation {
  country: string;
  link: string;
}

export const classFilter: IFilterClass[] = [
  {
    link: "https://mk-glossary.korabli.su/wows_glossary_artefact/icons/vehicle/types/Submarine/standard_261525e5aae827700eaad3b5c3ab72d1721446ecab80226394fd30e9186d8a2d.png",
    name: "submarine",
  },
  {
    link: "https://mk-glossary.korabli.su/wows_glossary_artefact/icons/vehicle/types/Destroyer/standard_357acc9fc0e2f7d98f047c99edffad359a8c45f2093024400fef2b9abbaf3a59.png",
    name: "destroyer",
  },
  {
    link: "https://mk-glossary.korabli.su/wows_glossary_artefact/icons/vehicle/types/Cruiser/standard_44b68c918edc534e1367cb6512e9e8cc4d28aa54d237db820f1bbba867266742.png",
    name: "cruiser",
  },
  {
    link: "https://mk-glossary.korabli.su/wows_glossary_artefact/icons/vehicle/types/Battleship/standard_1468cf2ed1dc129ec4db4d9d18306bd06abb0d6b08c805dc94fe23ce6187c119.png",
    name: "battleship",
  },
  {
    link: "https://mk-glossary.korabli.su/wows_glossary_artefact/icons/vehicle/types/AirCarrier/standard_9f372d47b4fa5b5bbd79a3aaac816cb8d5343fa93949cce8934d94b84751b88e.png",
    name: "aircarrier",
  },
];

export const levelFilter: IFilterLevel[] = [
  { gameNumber: "I", defaultNumber: 1 },
  { gameNumber: "II", defaultNumber: 2 },
  { gameNumber: "III", defaultNumber: 3 },
  { gameNumber: "IV", defaultNumber: 4 },
  { gameNumber: "V", defaultNumber: 5 },
  { gameNumber: "VI", defaultNumber: 6 },
  { gameNumber: "VII", defaultNumber: 7 },
  { gameNumber: "VIII", defaultNumber: 8 },
  { gameNumber: "IX", defaultNumber: 9 },
  { gameNumber: "X", defaultNumber: 10 },
  { gameNumber: "XI", defaultNumber: 11 },
];

export const nationFilter: IFilterNation[] = [
  {
    country: "spain",
    link: `https://mk-glossary.korabli.su/wows_glossary_artefact/icons/nation_flags/small/flag_Spain_956316c955d6d1ac7b623852fe4a3ba35d401d81ecf4296c3f927d8a1ef23059.png`,
  },
  {
    country: "netherlands",
    link: `https://mk-glossary.korabli.su/wows_glossary_artefact/icons/nation_flags/small/flag_Netherlands_95aaa1a8837aaa25b7f8ee01481e08d219f713a314490ed741dd7dcf677dd143.png
  `,
  },
  {
    country: "europe",
    link: `https://mk-glossary.korabli.su/wows_glossary_artefact/icons/nation_flags/small/flag_Europe_8faa587e2808905b00609fe38106b8faa37695ee1df9130e767c740f76046b85.png
    `,
  },
  {
    country: "pan_america",
    link: `https://mk-glossary.korabli.su/wows_glossary_artefact/icons/nation_flags/small/flag_Pan_America_b5a862eb267c57c58c63401bee8d63f243538429166a238fcb8ed4d191165a30.png
    `,
  },
  {
    country: "commonwealth",
    link: `https://mk-glossary.korabli.su/wows_glossary_artefact/icons/nation_flags/small/flag_Commonwealth_f328561f17ef8caeeb094ef825da4587f78b78b2bd3dd09d66717e5ef359e77f.png
    `,
  },
  {
    country: "italy",
    link: `https://mk-glossary.korabli.su/wows_glossary_artefact/icons/nation_flags/small/flag_Italy_56198e82a47ece71c1a79662a246de425f605033b41cd0bd1cd50b71b41676f4.png
    `,
  },
  {
    country: "pan_asia",
    link: `https://mk-glossary.korabli.su/wows_glossary_artefact/icons/nation_flags/small/flag_Pan_Asia_52736e629f91a9fe8647ef1a05e8973f32471aef24c3df29caac8d84e59917d8.png
    `,
  },
  {
    country: "france",
    link: `https://mk-glossary.korabli.su/wows_glossary_artefact/icons/nation_flags/small/flag_France_56a58c5e668eb6c54ac0b196fe77c4d16a9718b8ff5aa1b102c64b925449bdc3.png
    `,
  },
  {
    country: "uk",
    link: `https://mk-glossary.korabli.su/wows_glossary_artefact/icons/nation_flags/small/flag_United_Kingdom_447115c659293c9d4cc8f2714d27704a35ba98f17ff4b92b3761f03936c05e1a.png
    `,
  },
  {
    country: "germany",
    link: `https:/mk-glossary.korabli.su/wows_glossary_artefact/icons/nation_flags/small/flag_Germany_35d04fe7e0bf9b85a2ae507a4d4539bcbe9ea250d04480345156825398edcff8.png
    `,
  },
  {
    country: "ussr",
    link: `https://mk-glossary.korabli.su/wows_glossary_artefact/icons/nation_flags/small/flag_Russia_2096a97e46c74332d0579c54e5a242a2ff4a184d227ca50a36cba5f0875d7e48.png
    `,
  },
  {
    country: "usa",
    link: `https://mk-glossary.korabli.su/wows_glossary_artefact/icons/nation_flags/small/flag_USA_1b4b2220fa11809cdd5179fa188ef7651382714b66cbbe12d49a0744dff52495.png
    `,
  },
  {
    country: "japan",
    link: `https://mk-glossary.korabli.su/wows_glossary_artefact/icons/nation_flags/small/flag_Japan_e342ec07b9df580383a85abc178ac050901763e92607376b50a093c02b3abed0.png
    `,
  },
];
