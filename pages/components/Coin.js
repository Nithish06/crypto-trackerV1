import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
} from "@chakra-ui/react";

function Coin(props) {
  const { data } = props;
  console.log(data);
  return (
    <div>
      <TableContainer>
        <Table size="lg" variant="simple">
          <TableCaption>Crypto Currency Price Tracker</TableCaption>
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Symbol</Th>
              <Th isNumeric>Current Price</Th>
              <Th>Market Cap</Th>
              <Th>Price Change 24h in %</Th>
            </Tr>
          </Thead>
          {data?.map((individualCoin, index) => {
            return (
              <Tbody key={index}>
                <Tr>
                  <Td>
                    <Image
                      boxSize="60px"
                      src={individualCoin.image}
                      alt={individualCoin.name}
                    />
                  </Td>
                  <Td>{individualCoin.name}</Td>
                  <Td>{individualCoin.symbol}</Td>
                  <Td isNumeric>${individualCoin.current_price}</Td>
                  <Td>${individualCoin.market_cap}</Td>
                  {individualCoin.market_cap_change_percentage_24h > 0 ? (
                    <Td color="green.600">
                      {individualCoin.market_cap_change_percentage_24h}%
                    </Td>
                  ) : (
                    <Td color="red.600">
                      {individualCoin.market_cap_change_percentage_24h}%
                    </Td>
                  )}
                  {/* <Td>{individualCoin.market_cap_change_percentage_24h}%</Td> */}
                </Tr>
              </Tbody>
            );
          })}
        </Table>
      </TableContainer>
    </div>
  );
}

export default Coin;
