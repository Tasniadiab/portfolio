import React from 'react';
import './Projects.scss';
import { Container } from '@mui/material';

const Projects = () => {
    return(
        <>
        <Container>
            <h2> Formula One Fan </h2>
            <p> An app made for Formula One fans by a Formula One fan. The app allows users to keep track of their favorite drivers and teams. The Race calendar makes sure fans know when and where the next race is. 
                <br />
                It's lights out and away we go!</p>
            <h2> CarCar</h2>
            <p> A car inventory application that allows business owners to track sold cars, technicians, appointment history, etc. It also allows customers to schedule appointments. Everything a car business needs! </p>
            <h2>Sunday Funday</h2>
            <p>
                A party planning app for every special occasion
                <br />
                This app allows users plan their next party by making venue suggestions. The user just has to input their party's time, date, general location (ie. Brooklyn, Paris, Kingston,NY) and a few keywords for what kind of party they are looking forward to (ie. Drinks, Dinner, Picnic). The app then generates venue and place suggestions. Users can share their party plans with their friends. 
            </p>
        </Container>
        </>
    )

}