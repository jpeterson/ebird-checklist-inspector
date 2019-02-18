import React, { Component } from 'react';

import { CalciteH1, CalciteA } from 'calcite-react/Elements';
import Label from 'calcite-react/Label';
import Switch from 'calcite-react/Switch';
import Table, {
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell
} from 'calcite-react/Table';

export default class ChecklistTable extends Component {
  state = {
    hideVisibleChecklists: false
  };

  getRow = item => {
    const { subId, reasonCodeLatest, userDisplayName } = item;

    let isHidden = false;
    if (reasonCodeLatest && reasonCodeLatest === 'obshide') {
      isHidden = true;
    }

    if (this.state.hideVisibleChecklists && !isHidden) {
      return null;
    }

    let isHiddenElement = <Label green>visible</Label>;
    if (isHidden) {
      isHiddenElement = <Label red>hidden</Label>;
    }

    const idHref = `https://ebird.org/view/checklist/${subId}`;
    const idLink = (
      <CalciteA href={idHref} target="_blank" rel="noopener noreferrer">
        {subId}
      </CalciteA>
    );

    return (
      <TableRow key={`${subId}`}>
        <TableCell>{idLink}</TableCell>
        <TableCell>{isHiddenElement}</TableCell>
        <TableCell>{userDisplayName}</TableCell>
      </TableRow>
    );
  };

  toggleVisibleChecklists = e => {
    this.setState({ hideVisibleChecklists: e.target.checked });
  };

  render() {
    const { data } = this.props;
    return (
      <div style={{ marginTop: '50px' }}>
        <CalciteH1>
          Checklist Statuses
          <Switch
            value={this.state.hideVisibleChecklists}
            onChange={this.toggleVisibleChecklists}
          >
            Hide Visible Checklists
          </Switch>
        </CalciteH1>
        <Table blue striped>
          <TableHeader>
            <TableHeaderRow>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>User</TableHeaderCell>
            </TableHeaderRow>
          </TableHeader>
          <TableBody style={{ color: 'black' }}>
            {data.map(item => this.getRow(item))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
