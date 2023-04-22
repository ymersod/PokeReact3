import "./LoadPokemonTable.css";
import { useState, useEffect } from "react";
import InitButtons from "./Buttons";
import LoadMons from "./LoadPokemon";
import ZoomMon from "./ZoomInPokemon";

const LoadTable = ({ limit }) => {
  const [offset, setOffset] = useState(0);
  const [pokeData, setPokeData] = useState([]);
  const [zoomMon, setZoomMon] = useState(null);

  const loadedMons = LoadMons({ offset, limit });

  useEffect(() => {
    setPokeData(loadedMons);
  }, [loadedMons]);

  const extractTypes = (types) => {
    return types.map((type) => type.type.name).join(", ");
  };

  const MakeContainerForIndvidualMon = () => {
    return pokeData.map((mon) => {
      const primaryType = mon.types[0].type.name;
      const containerClass = `PokemonContainer ${primaryType}`;

      return (
        <div
          className={containerClass}
          key={mon.name}
          onClick={() => handleZoomClick(mon)}
        >
          <div className="Name">{mon.name}</div>
          <div className="Info">
            <img src={mon.sprites["front_default"]} />
            <div className="Types">{extractTypes(mon.types)}</div>
          </div>
        </div>
      );
    });
  };

  const handleNextClick = () => {
    setOffset(offset + limit);
  };

  const handlePrevClick = () => {
    if (offset > 0) {
      setOffset(offset - limit);
    }
  };

  const handleZoomClick = (mon) => {
    setZoomMon(mon);
  };

  return (
    <div className="Top">
      <div className="TableRootContainer">{MakeContainerForIndvidualMon()}</div>
      <div>
        <InitButtons
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
        />
        {zoomMon ? <ZoomMon mon={zoomMon} /> : ""}
      </div>
    </div>
  );
};

export default LoadTable;
