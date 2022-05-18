import React from 'react';
import Badges from '../components/common/Badges';
import { CardContainer, Row, CardContent, CardsBottomRow, Label, DollarSign } from '../routes/InvoiceList';
import { Portrait } from './common/Portrait';
import { BiDollarCircle } from 'react-icons/bi';
import data from '../db.json';

const InvoiceList = props => {
  const placeholder = 'Processed';
  const details = `
    Tellus elementum sagittis vitae et leo duis. Eget nunc lobortis 
    mattis aliquam faucibus purus. A erat nam at lectus urna duis
    convallis. Porttitor dolor morbi non arcu risus quis varius terna.
    Viverra mattis nunc sed blano.
  `;

  const InvoiceFilter = data.clients.filter(info => {
    if (props.input === '') return info;
    else {
      return (
        info.name.toLowerCase().includes(props.input) ||
        info.organization.toLowerCase().includes(props.input) ||
        info.state.toLowerCase() === (props.input) 
      );
    }
  });

  return InvoiceFilter.map(
    ({ id, img, name, organization, address, state, lastInvoice, phone, totalSales }) => (
      <CardContainer key={id}>
        <Row>
          <Portrait src={img} id="ClientPhoto" alt={name} draggable="false" />
        </Row>

        <Row>
          <CardContent>
            <Label>NAME</Label>
            {name}
          </CardContent>
          <CardContent>
            <Label>ORGANIZATION</Label>
            {organization}
          </CardContent>
        </Row>

        <Row>
          <CardContent>
            <Label>ADDRESS</Label>
            {address}
          </CardContent>
          <CardContent>
            <Label>STATE</Label>
            {state}
          </CardContent>
        </Row>

        <Row>
          <CardContent>
            <Label>DATE</Label>
            {lastInvoice}
          </CardContent>
          <CardContent>
            <Label>PHONE</Label>
            {phone}
          </CardContent>
        </Row>

        <Row>
          <CardContent>
            <Label>DETAILS</Label>
            {details}
          </CardContent>
        </Row>

        <Row>
          <CardsBottomRow>
            <Label>AMOUNT</Label>
            <DollarSign>
              <BiDollarCircle />
            </DollarSign>
            {totalSales}
          </CardsBottomRow>
          <CardsBottomRow>
            <Label>STATUS</Label>
            {placeholder}
          </CardsBottomRow>
          <CardsBottomRow>
            <Label>
              <Badges content="Paid" paid />
            </Label>
          </CardsBottomRow>
        </Row>
      </CardContainer>
    ),
  );
};

export default InvoiceList;
