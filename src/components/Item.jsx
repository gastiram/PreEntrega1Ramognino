import React from 'react'
import {Card, CardBody, Stack, Heading, Divider, Text, CardFooter, ButtonGroup, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Item = ({titulo, id}) => {
  return (
<Card maxW='sm'>
  <CardBody>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{titulo}</Heading>
      
    </Stack>
  </CardBody>
  <Divider color='lightgreen' />
  <CardFooter>
    <ButtonGroup spacing='3'>
      <Button>
        <Link to={`/item/${id}`}>Ver detalle</Link>
        </Button>
    </ButtonGroup>
  </CardFooter>
  <Divider />
</Card>

)
}

export default Item