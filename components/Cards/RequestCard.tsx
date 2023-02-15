import { Avatar, Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react';

interface Props {
  thumbnail: string;
  condition: string;
  date: string;
  avatar: string;
  amount: string;
  username: string;
  company: string;
  contactEmail: string;
}

const RequestCard = (props: Props) => {
  const { thumbnail, condition, date, avatar, username, amount, company, contactEmail } = props;

  return (
    <Box w="328px">
      <Box border="1px" borderColor="brand.blue" rounded="3xl" p={4}>
        <Image src={thumbnail} rounded="3xl" alt="placeholder" width="100%" height="300px" />

        <Stack mt={2}>
          <Flex justifyContent="space-between">
            <Text fontSize="sm" fontWeight="semibold" textTransform="uppercase">
              {condition}
            </Text>
            <Text color="brand.maroon" fontSize="sm" fontWeight="semibold">
              {date}
            </Text>
          </Flex>

          <Flex gap={1} alignItems="center">
            <Avatar name={username} src={avatar} />
            <Box>
              <Text fontSize="sm" fontWeight="bold">
                #{username}
              </Text>
              <Text fontSize="sm" fontWeight="medium">
                Amount Requested <b>{amount}</b>
              </Text>
            </Box>
          </Flex>

          <Text fontSize="sm" fontWeight="medium">
            Company Name: <b>{company}</b>
          </Text>
          <Text fontSize="sm" fontWeight="medium">
            Contact Email: <b>{contactEmail}</b>
          </Text>
        </Stack>
      </Box>
      <Flex justifyContent="space-around" mt={2}>
        <Button
          size="xs"
          bgColor="brand.yellow"
          color="brand.blue"
          _hover={{ bgColor: 'brand.blue', color: 'white' }}
        >
          Confirm Order
        </Button>

        <Button bgColor="brand.maroon" size="xs">
          Reject Order
        </Button>
      </Flex>
    </Box>
  );
};

export default RequestCard;
