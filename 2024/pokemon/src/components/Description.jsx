import React from "react";

const Description = ({
  baseExp,
  heightpok,
  weightpok,
  pokstat1,
  pokstat2,
  pokstat3,
  pokstat4,
  pokstat5,
  pokstat6,
  posbs1,
  posbs2,
  posbs3,
  posbs4,
  posbs5,
  posbs6,
}) => {
  return (
    <div>
      <p>
        <b>Base Experience </b> : <b>{baseExp}</b>
      </p>
      <p>
        <b>Height</b> : <b>{(heightpok * 10).toFixed(0)} cm.</b>
      </p>

      <p>
        <b>Weight</b> : <b>{(weightpok * 0.1).toFixed(0)} kg</b>
      </p>

      <h3 className="underline mt-3">
        <b>Stats</b>
      </h3>

      <p>
        <b>
          {pokstat1} : {posbs1}
        </b>
      </p>

      <p>
        <b>
          {pokstat2} : {posbs2}
        </b>
      </p>

      <p>
        <b>
          {pokstat3} : {posbs3}
        </b>
      </p>

      <p>
        <b>
          {pokstat4} : {posbs4}
        </b>
      </p>

      <p>
        <b>
          {pokstat5} : {posbs5}
        </b>
      </p>

      <p>
        <b>
          {pokstat6} : {posbs6}
        </b>
      </p>
    </div>
  );
};

export default Description;
