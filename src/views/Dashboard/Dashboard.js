import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Input,
  Label,
  FormGroup
} from 'reactstrap';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <strong>Positions</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="omc_exchange_list">Exchanges</Label>
                      <Input type="select" name="omc_exchange_list" id="omc_exchange_list">
                        <option value="1">Bittrex</option>
                        <option value="2">Bitfinex</option>
                        <option value="3">Poloniex</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
