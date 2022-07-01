import React from 'react';
import './Contactus.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';


function App() {


    return (
        <div className="App">
            <Typography gutterBottom variant="h3" align="center">
                Contact With Us
            </Typography>
            <Grid>
                <Card className='form11' style={{ maxWidth: 700, maxHeight: 1000, padding: "20px 5px" }}>
                    <CardContent>

                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                            Fill up the form and our team will get back to you within 24 hours.
                        </Typography>
                        <form >
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder="Enter first name" label="First Name" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder="Enter last name" label="Last Name" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField type="email" placeholder="Enter email" label="Email" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField type="number" placeholder="Enter phone number" label="Phone" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Message" multiline rows={6} placeholder="Type your message here" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}

export default App;