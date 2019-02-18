import React, { Component } from 'react';
import './App.css';

import { getChecklistStatuses, parseCsv } from './helpers';
import Nav from './components/Nav';
import FileDrop from './components/FileDrop';
import FileInfo from './components/FileInfo';
import ChecklistTable from './components/ChecklistTable';

import Button from 'calcite-react/Button';
import Loader from 'calcite-react/Loader';

class App extends Component {
  state = {
    hasFile: false,
    records: [],
    statusList: []
  };

  getStatusList = async () => {
    this.setState({ loading: true });
    const ids = this.state.records.map(record => record['Submission ID']);
    const statusList = await getChecklistStatuses(ids);
    this.setState({ statusList, loading: false });
  };

  getTable(statusList) {
    if (statusList.length) {
      return <ChecklistTable data={this.state.statusList} />;
    }
    return null;
  }

  fileDropped = async file => {
    const records = await parseCsv(file);

    this.setState({ hasFile: true, records });
  };

  getContentsWithFile(records) {
    let oversized = false;
    if (records.length > 100) {
      oversized = true;
    }

    return (
      <>
        <FileInfo recordCount={records.length} />
        {!oversized ? (
          <Button onClick={this.getStatusList}>Get checklist statuses</Button>
        ) : null}
      </>
    );
  }

  render() {
    const { statusList, hasFile, records, loading } = this.state;
    return (
      <>
        <Nav />
        <div className="App">
          {hasFile ? (
            this.getContentsWithFile(records)
          ) : (
            <FileDrop onFileDropped={this.fileDropped} />
          )}
          {loading ? (
            <Loader
              style={{ marginTop: '100px' }}
              text="Inspecting checklists..."
            />
          ) : null}
          {this.getTable(statusList)}
        </div>
      </>
    );
  }
}

export default App;
