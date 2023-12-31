import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid className="bg-black text-white text-center mt-10" container sx={
                { bgcolor: "black", color: "white", py: 3 }
            }>

                <Grid item xs={12} sm={6} md={3}>

                    <Typography className="pb-5" variant="h6"> Company </Typography>
                    <div>
                        <Button className="pb-5" variant="h6"> About </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6"> Blog </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6"> Press </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6"> Jobs </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6"> About </Button>
                    </div>

                </Grid>

                <Grid item xs={12} sm={6} md={3}>

                    <Typography className="pb-5" variant="h6"> Solutions </Typography>
                    <div>
                        <Button className="pb-5" variant="h6"> Marketing </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6"> Analytics </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6"> Commerce </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6"> Insights </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6"> Supports </Button>
                    </div>

                </Grid>

                <Grid item xs={12} sm={6} md={3}>

                    <Typography className="pb-5" variant="h6"> Documentation </Typography>
                    <div>
                        <Button className="pb-5" variant="h6"> Guides </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6"> API Status </Button>
                    </div>

                </Grid>

                <Grid item xs={12} sm={6} md={3}>

                    <Typography className="pb-5" variant="h6"> Legal </Typography>
                    <div>
                        <Button className="pb-5" variant="h6"> Claim </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6"> Privacy </Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6"> Terms </Button>
                    </div>

                </Grid>

                <Grid className="pt-20" item xs={12}>
                    <Typography variant='body-2' component="p" align="center">
                        &copy; 2023 Company . All Rights Reserved.
                    </Typography>
                    <Typography variant='body-2' component="p" align="center">
                        Made With love by Me.
                    </Typography>
                </Grid>

            </Grid>
        </div>
    )
}

export default Footer