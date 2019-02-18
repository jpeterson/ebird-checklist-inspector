import React from 'react';

import { CalciteP } from 'calcite-react/Elements';

function FileInfo({ recordCount }) {
  if (recordCount > 100) {
    return (
      <>
        <CalciteP>Found {recordCount} checklists.</CalciteP>
        <CalciteP style={{ color: 'tomato' }}>
          Let's not ddos eBird... try a CSV with less than 100 records.
        </CalciteP>
      </>
    );
  }

  return (
    <div>
      <CalciteP>
        Found {recordCount} <em>unique</em> checklists.
      </CalciteP>
    </div>
  );
}

export default FileInfo;
