import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_TECH } from "../../query";
import { IVehicleAll, IVehicle } from "../../type/vehicle";
import Cell from "./Cell/Cell";
import "./Main.css";

const Main = () => {
  const [vehicles, setVehicles] = useState<IVehicleAll>({ vehicles: [] });
  const [currentShip, setCurrentShip] = useState<IVehicle>();
  const { data, loading } = useQuery(GET_ALL_TECH);

  useEffect(() => {
    if (!loading) setVehicles(data);
  }, [data, loading]);

  useEffect(() => {
    setCurrentShip(vehicles.vehicles[0]);
  }, [vehicles]);

  const clickHandler = (index: number) => {
    setCurrentShip(vehicles.vehicles[index]);
    console.log(vehicles.vehicles[index]);
  };

  console.log(vehicles.vehicles);

  return (
    <main>
      <section className="main">
        <h1 className="main__title">Наша техника</h1>
        <div className="main__ship-container">
          <div className="main__ship-info">
            <h2 className="main__ship-title">{`Название корабля: ${currentShip?.title}`}</h2>
            <p>{currentShip?.description}</p>
            <p>{`Класс техники: ${currentShip?.type.title}, Уровень: ${currentShip?.level}, Нация: ${currentShip?.nation.title}`}</p>
          </div>
          <img className="main__ship-img" src={`https:${currentShip?.icons.large}`} alt="" />
        </div>
        <div className="main__container">
          {vehicles.vehicles.map((technicData: IVehicle, index: number) => {
            return (
              <Cell
                index={index}
                title={technicData.title}
                typeImage={technicData.type.icons.default}
                level={technicData.level}
                backgroundImage={technicData.nation.icons.large}
                boatImage={technicData.icons.medium}
                key={index}
                clickHandler={clickHandler}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Main;
