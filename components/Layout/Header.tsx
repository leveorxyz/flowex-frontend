import Link from 'next/link';
import { Box, Flex, Button, HStack, Container, useBoolean, Image } from '@chakra-ui/react';
import { IoMenu } from 'react-icons/io5';
import MobileDrawer from './MobileDrawer';
import Logo from '../Logo/Logo';
import MenuLink from '../MenuLink/MenuLink';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useBoolean(false);

  return (
    <Box position="fixed" top="0" left="0" right="0" zIndex="999">
      <Container maxW="container.xl" px="0" position="relative">
        <Image
          src="images/shapes/rectangle.png"
          position="absolute"
          zIndex="-1"
          left="-20"
          top="-16"
        />
        <Box py="4" px="2">
          <Flex as="nav" justifyContent="space-between" alignItems="center">
            <Link href="/">
              <Logo />
            </Link>

            <HStack gap={7} display={{ base: 'none', md: 'flex' }}>
              <MenuLink link="/" text="home" />
              <MenuLink link="#!" text="category" />
              <MenuLink link="#!" text="about" />
              <MenuLink link="#!" text="contact" />
            </HStack>

            <Link href="/login">
              <Button display={{ base: 'none', md: 'flex' }}>Login</Button>
            </Link>

            <Button variant="link" onClick={setDrawerOpen.on} display={{ md: 'none' }}>
              <IoMenu size="30" />
            </Button>
          </Flex>
          <MobileDrawer onClose={setDrawerOpen.off} isOpen={drawerOpen} />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
