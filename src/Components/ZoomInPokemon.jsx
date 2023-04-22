import "./ZoomInPokemon.css";
import { useEffect, useState } from "react";

const ZoomMon = ({ mon }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    setPokemon(mon);
  }, [mon]);

  const extractTypes = (types) => {
    return types.map((type) => type.type.name).join(", ");
  };

  const extractAbilities = (abilities) => {
    return abilities.map((ability) => ability.ability.name).join(", ");
  };

  const oneDecimal = (x) => {
    return Number.parseFloat(x).toFixed(1);
  };

  const statTable = (stats) => {
    return stats.map((stat) => {
      return (
        <div className="statCell">
          <div>
            <div className="statName">{stat.stat.name}</div>
            <div className="statValue">{stat.base_stat}</div>
          </div>
        </div>
      );
    });
  };

  return pokemon ? (
    <div>
      <div className="container">
        <img src={pokemon.sprites["front_default"]} />
        <div className="divTable">
          <div className="divTableBody">
            <div className="divTableRow">
              <div className="divTableCell">PokeNr.</div>
              <div className="divTableCell">#{pokemon.id}</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Type</div>
              <div className="divTableCell">{extractTypes(pokemon.types)}</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Height</div>
              <div className="divTableCell">
                {" "}
                {oneDecimal(pokemon.height * 0.1)} m
              </div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Weight</div>
              <div className="divTableCell">
                {oneDecimal(pokemon.weight * 0.1)} kg
              </div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Abilities</div>
              <div className="divTableCell">
                {extractAbilities(pokemon.abilities)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="statContainer">
        <div className="statTable">{statTable(pokemon.stats)}</div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ZoomMon;
