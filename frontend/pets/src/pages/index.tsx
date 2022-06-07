import type { NextPage } from 'next'
import Title from '../ui/components/title/title'
import List from '../ui/components/list/list'
import { Dialog, DialogActions, Grid, TextField, Button, Snackbar } from '@mui/material'
import { useState } from 'react'
import { useIndex } from '../data/hooks/pages/useIndex'


const Home: NextPage = () => {
  const {
    listPets,
    petSelected,
    setPetSelected
  } = useIndex();



  return (
    <div>
      <Title 
        title="" 
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtual.</strong>
          </span>
        }
      />

        <List
          pets = {listPets}
          onSelect = {(pet) => setPetSelected(pet)}
        />

        <Dialog 
          open={petSelected !== null}
          fullWidth
          PaperProps={{ sx: { p: 5} }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label={'E-mail'}
                type={'email'}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={'Quantia (por mês)'}
                type={'number'}
                fullWidth
              />
            </Grid>
          </Grid>
          <DialogActions sx={{mt: 5}}>
            <Button
              color={'secondary'}
            >
              Cancelar
            </Button>
            <Button
              variant={'contained'}
            >
              Confirmar adoção
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={false}
          message={'ueon'}
        />
    </div>
  )
}

export default Home
