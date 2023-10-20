import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_TECH } from "../../query";
import { IVehicleAll, IVehicle } from "../../type/vehicle";
import Cell from "./Cell/Cell";
import "./Main.css";

const Main = () => {
  const [vehicles, setVehicles] = useState<IVehicleAll>({ vehicles: [] });
  const { data, loading } = useQuery(GET_ALL_TECH);

  useEffect(() => {
    if (!loading) setVehicles(data);
  }, [data, loading]);

  console.log(vehicles.vehicles[0], vehicles.vehicles[1]);

  return (
    <main>
      <section className="main">
        <h1 className="main__title">Наша техника</h1>
        <div className="main__container">
          {vehicles.vehicles.map((technicData: IVehicle, index: number) => {
            return (
              <Cell
                title={technicData.title}
                typeImage={technicData.type.icons.default}
                level={technicData.level}
                backgroundImage={technicData.nation.icons.large}
                boatImage={technicData.icons.medium}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Main;
