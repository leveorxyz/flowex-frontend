import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

const ProfileMenu = () => {
  return (
    <Flex gap="2" alignItems="center">
      <Box borderLeft="2px" borderColor="brand.blue" height="20px" />
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Text fontSize="sm" fontWeight="bold">
        @user420
      </Text>
    </Flex>
  );
};

export default ProfileMenu;
