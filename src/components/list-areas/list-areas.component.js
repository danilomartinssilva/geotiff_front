import React from "react";
import ToolHeader from "../shared/tool-header";
import ToolContent from "../shared/tool-content";
import ToolResults from "../shared/tool-results";
import ToolFooter from "../shared/tool-footer";
import DrawGeometry from "../shared/draw-geometry";
import ImportGeometry from "../shared/import-geometry";
import { getToken } from "../../services/auth";
console.log(JSON.stringify(getToken()));

const ListAreasComponent = ({ list, areas }) => {
  /*   list(); */
  console.log("Areas", areas);

  return (
    <div id="list-areas-tool" className="tool">
      {/*  <ToolHeader
      logoURL="/images/minimum.svg"
      title="Get the minimum pixel value of an area"
    />
    <h1>Listagem de Areas do Perfil</h1> */}

      <ToolHeader
        /*     logoURL="/images/minimum.svg" */
        title="Listagem de Áreas"
      />

      <ToolContent>
        <div
          style={{
            flex: 1,
            margin: 4,
            display: "flex",
            backgroundColor: "#ECECEC",
            alignSelf: "stretch",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Suas areas
        </div>
        {areas.result.length &&
          areas.result.map((area, _) => (
            <div
              style={{
                flex: 1,
                margin: 4,
                display: "flex",
                color: "#544FFF",
                alignSelf: "stretch",
              }}
            >
              {area.file_area}
            </div>
          ))}

        {/*   <ul style={{ width: "100%" }}>
          {areas.result.length &&
            areas.result.map((area, _) => (
              <li
                style={{
                  height: 40,
                  margin: 8,

                  backgroundColor: "#E5E5E5",
                }}
              >
                {area.file_area}
              </li>
            ))}
        </ul> */}
        {/*   <DrawGeometry />
      <ImportGeometry />
      <div className="content-row submit-row">
        <button
          className="gt-button-accent full"
          onClick={() => execute(raster, geometry, func)}
        >
          Calculate Minimum
        </button>
      </div>
      {results && (
        <ToolResults className="single-value">
          <h3>Results</h3>
          <p>{results}</p>
        </ToolResults>
      )} */}
      </ToolContent>
      <ToolFooter />
    </div>
  );
};

export default ListAreasComponent;
