import React from 'react'
import {Card, CardBody, Stack, Heading, Divider, Text, CardFooter, ButtonGroup} from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({ producto }) => {
  
  return (
<Card maxW='sm'>
  <CardBody>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{producto.titulo}</Heading>
      <Text>
        {producto.descripcion}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${producto.precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider color='lightgreen' />
  <CardFooter>
    <ButtonGroup spacing='3'>
      <ItemCount />
    </ButtonGroup>
  </CardFooter>
  <Divider />
</Card>

)
}
export default ItemDetail