import { Link, Box } from '@mui/material';
import NextLink from 'next/link'
import {
    HeaderContainer,
    Logo,
    LinksContainer
} from './header-admin.style';
import Image from 'next/image'


export default function HeaderAdmin(){
    return (
        <HeaderContainer>
            <div>
            <Link component={NextLink} href={'/'}>
                <Image 
                    alt="Adote um pet" 
                    src="/images/logo.svg" 
                    width={'125px'}
                    height={'250px'}
                />
                    </Link>
                <LinksContainer>
                    <Link component={NextLink} href={'/pets/register'}>
                        <a>Cadastrar Pet</a>
                    </Link>
                    <Link component={NextLink} href={'/pets/report'}>
                        <a>
                            Relatório{'  '}
                            <Box component={'span'}
                                sx={{display: { sm: 'initial', xs: 'none'}}}>
                                de Adoção
                            </Box>
                        </a>
                    </Link>
                </LinksContainer>
            </div>
        </HeaderContainer>
)}