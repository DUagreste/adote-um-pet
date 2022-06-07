import { Button } from '@mui/material'
import {
    ListStyled,
    ListItem,
    Photo,
    Information,
    Description,
    Name,
} from './list.style'
import { Pet } from '../../../data/@types/Pets'


interface ListProps {
    pets: Pet[];
}

export default function List(props: ListProps) {
    return (
        <ListStyled>
            {props.pets.map(pet => (
            <ListItem key={pet.id}>
            <Photo src={pet.photo} alt={pet.name} />
                <Information>
                    <Name>{pet.name}</Name>
                    <Description>
                        {pet.history}
                    </Description>
                    <Button variant={'contained'} fullWidth>
                    Adotar {pet.name}
                    </Button>
                </Information>
            </ListItem>
            ))}
        </ListStyled>
    )
}