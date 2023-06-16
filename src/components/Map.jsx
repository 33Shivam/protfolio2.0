import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-84, 0, 0],
        center: [0, 22],
        scale: 1500
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies geography="/features.json" stroke="#ffffff" strokeWidth={1} >
        {({ geographies }) =>
          geographies.map((geo) => {
            // Set the fill color to transparent for China and Pakistan
            const countryNamesToHide = ["China", "Pakistan", "Nepal","Afghanistan","Bhutan","Bangladesh","Myanmar","Thailand","Laos","Sri Lanka","Indonesia"];
            const fill = countryNamesToHide.includes(geo.properties.name)
              ? "transparent"
              : "#17e190";

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={fill}
                stroke="Transparent"
                strokeWidth={1}
              />
            );
          })
        }
      </Geographies>
      <Annotation
        subject={[85.1376, 25.5941]}
        dx={0}
        dy={0}
        connectorProps={{
          stroke: "#ffffff",
          strokeWidth: 10,
          strokeLinecap: "round"
        }}
      >
        <text
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fontWeight="bold"
          fill="#ffffff"
          fontFamily="Century Gothic"
        >
          {"From Patna"}
        </text>
      </Annotation>
      <Annotation
        subject={[77.8090, 28.6139]}
        dx={0}
        dy={0}
        connectorProps={{
          stroke: "#ffffff",
          strokeWidth: 10,
          strokeLinecap: "round"
        }}
      >
        <text
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fontWeight="bold"
          fill="#ffffff"
          fontFamily="Century Gothic"
        >
          {"Based in Delhi"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
