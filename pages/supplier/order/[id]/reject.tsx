import type { NextPage } from 'next';
import { Box, Button, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';

interface LineItemProps {
  label: string;
  value: string;
}

const LineItem = ({ label, value }: LineItemProps) => {
  return (
    <SimpleGrid columns={2}>
      <Text>{label}</Text>
      <Text fontWeight="bold">{value}</Text>
    </SimpleGrid>
  );
};

const RejectOrder: NextPage = () => {
  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Heading size="lg">Product Details</Heading>

      <Box pl="5" pt="5" maxW="500px">
        <Stack gap="2">
          <LineItem label="Product ID" value="#P67645" />
          <LineItem label="Tree Name" value="Mango" />
          <LineItem label="Wood Type" value="Saw Logs" />
          <LineItem label="Color" value="brown" />
          <LineItem label="Location" value="Paris, France" />
          <LineItem label="Price" value="€3 / CFT" />
          <LineItem label="Type" value="Raw" />
          <LineItem label="Total Amount" value="€3" />
          <LineItem label="Buyer Company" value="Company X" />
          <LineItem label="Buyer Company Reg. Number" value="4569-8766-2890" />
          <LineItem label="Buyer contact" value="user3456, xyz@email.com" />
          <LineItem label="Date Requested" value="12 Feb 2023" />
          <LineItem label="Confirmation deadline" value="14 Feb 2023" />
          <LineItem label="Expected min delivery date" value="20 Feb 2023" />
          <LineItem label="Expected max delivery date" value="24 Feb 2023" />
          <LineItem label="Total price" value="€34" />
          <LineItem label="Now paying" value="€14" />
          <Button bgColor="brand.maroon">Reject Order</Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default RejectOrder;
