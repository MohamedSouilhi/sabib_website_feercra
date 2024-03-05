import React from 'react';
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material';
import Title from './Title';
// img
import imgDetail from '../assets/img1.jpg';
import imgDetail2 from '../assets/img2.jpg';

const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    });
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    });

    return (
        <Box>
           {/*
            <Typography variant="h4" gutterBottom>
                        <Title
                            text={'Products'}
                            textAlign={'center'}
                        />
            </Typography>
        */}
            <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
                sx={{
                    py: 10,
                    px: 2,
                }}
            >
                <CustomGridItem item xs={12} sm={8} md={6} component='section'>
                    <Box component='article' sx={{ px: 4 }}>
                        <Title
                            text={'Get Whole Home Leak Protection'}
                            textAlign={'start'}
                        />
                        <CustomTypography>
                        Leaks can happen anytime, anywhere, so reduce your risk and <br/>
                        protect your peace of mind with the Flo Smart Water Monitor <br />
                        and Shutoff. This game-changing device gives you unmatched <br />
                        leak prevention by automatically shutting off your water to prevent catastrophic damage.
                        </CustomTypography> 
                    </Box>
                </CustomGridItem>
                
                <Grid item xs={12} sm={4} md={6}>
                    <img src={imgDetail} alt="" style={{ width: '100%' }} />
                </Grid>

                <Grid item xs={12} sm={4} md={6} sx={{ order: { xs: 4, sm: 4, md: 3 } }}>
                    <img src={imgDetail2} alt="" style={{ width: '100%' }} />
                </Grid>

                <CustomGridItem 
                    item 
                    xs={12} 
                    sm={8} 
                    md={6} 
                    sx={{ order: { xs: 3, sm: 3, md: 4 } }}
                >
                    <Box component='article' sx={{ px: 4 }}>
                        <Title
                            text={'24/7 Leak Detection'}
                            textAlign={'start'}
                        />
                        <CustomTypography>
                        Our latest FloSense™ 3.0 technology uses machine learning to <br/>
                         better understand and analyze your water usage patterns. With <br />
                         more precise monitoring and leak detection accuracy, your Flo <br/>
                         Smart Water Monitor and Shutoff can better protect your home by <br/>
                         sending timely, reliable alerts when it matters most..
                        </CustomTypography>
                    </Box>
                </CustomGridItem>
            </Grid>
        </Box>
    );
}

export default GetStarted;
