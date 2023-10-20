import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_TECH } from "../../query";
import { IVehicleAll, IVehicle } from "../../type/vehicle";
import Cell from "./Cell/Cell";
import "./Main.css";
import { classFilter, levelFilter, nationFilter } from "../../utils/utils";

const Main = () => {
  const [vehicles, setVehicles] = useState<IVehicleAll>({ vehicles: [] });
  const [currentShips, setCurrentShips] = useState<IVehicle[]>([]);
  const [currentShip, setCurrentShip] = useState<IVehicle>();
  const [currentSpec, setCurrentSpec] = useState<string>("");
  const [currentNation, setCurrentNation] = useState<string>("");
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const { data, loading } = useQuery(GET_ALL_TECH);

  useEffect(() => {
    if (!loading) setVehicles(data);
  }, [data, loading]);

  useEffect(() => {
    setCurrentShip(vehicles.vehicles[0]);
    setCurrentShips(vehicles.vehicles);
  }, [vehicles]);

  useEffect(() => {
    const result = vehicles.vehicles.filter((ship: IVehicle) => {
      return (
        (ship.nation.name === currentNation || !currentNation) &&
        (ship.type.name === currentSpec || !currentSpec) &&
        (ship.level === currentLevel || !currentLevel)
      );
    });
    setCurrentShips(result);
  }, [currentSpec, currentNation, currentLevel]);

  const clickHandlerNation = (nation: string) => {
    if (currentNation === nation) return setCurrentNation("");
    setCurrentNation(nation);
  };

  const clickHandlerSpec = (spec: string) => {
    if (currentSpec === spec) return setCurrentSpec("");
    setCurrentSpec(spec);
  };

  const clickHandlerLevel = (level: number) => {
    if (currentLevel === level) return setCurrentLevel(0);
    setCurrentLevel(level);
  };

  const clickHandler = (index: number) => {
    setCurrentShip(currentShips[index]);
  };

  const cancelFilter = () => {
    setCurrentLevel(0);
    setCurrentNation("");
    setCurrentSpec("");
  };

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
        <div className="main__filter-container">
          <h3 className="main__filter-title">Фильтрация:</h3>
          <div>
            {classFilter.map((body, index) => {
              return (
                <img
                  key={index}
                  className="main__filter-button"
                  src={body.link}
                  alt=""
                  onClick={() => {
                    clickHandlerSpec(body.name);
                  }}
                />
              );
            })}
          </div>
          <div>
            {nationFilter.map((body, index) => {
              return (
                <img
                  key={index}
                  className="main__filter-button"
                  src={body.link}
                  alt=""
                  onClick={() => {
                    clickHandlerNation(body.country);
                  }}
                />
              );
            })}
          </div>
          <div>
            {levelFilter.map((body, index) => {
              return (
                <button
                  key={index}
                  className="main__filter-button"
                  onClick={() => {
                    clickHandlerLevel(body.defaultNumber);
                  }}
                >
                  {body.gameNumber}
                </button>
              );
            })}
          </div>
          <button className="main__filter-cancel" onClick={cancelFilter}>
            Сброс всех фильтров
          </button>
        </div>
        <div className="main__container">
          {currentShips.length ? (
            currentShips.map((technicData: IVehicle, index: number) => {
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
            })
          ) : (
            <h2>"Нету кораблей с таким типом"</h2>
          )}
        </div>
      </section>
    </main>
  );
};

export default Main;
