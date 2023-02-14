import Link from 'next/link';
import { Text } from '@chakra-ui/react';

type PropTypes = {
  text: string;
  link: string;
};

const MenuLink = ({ link, text }: PropTypes) => {
  return (
    <Link href={link}>
      <Text
        borderBottom="1.5px solid transparent"
        textTransform="capitalize"
        fontWeight="bold"
        _hover={{
          color: 'brand.yellow',
        }}
      >
        {text}
      </Text>
    </Link>
  );
};

export default MenuLink;
