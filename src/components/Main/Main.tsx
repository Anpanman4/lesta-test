import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Main: React.FC = () => {
  const state = useTypedSelector(state => state.cash);
  console.log(state);

  return (
    <main>
      <section>Main</section>
    </main>
  );
};

export default Main;
