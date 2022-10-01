import { useEffect,useState } from 'react';
import { useStyles } from './viewport.css';

export const ViewPort=()=>{
    const classes=useStyles();
    const [size, setSize]=useState({width: window.screen.width, heigth: window.screen.height});
    useEffect(()=>{
        const updateWindow = () => {
            let {innerWidth, innerHeight}=window;
            setSize({width:innerWidth, heigth:innerHeight});
        }
        window.addEventListener('resize', updateWindow);
    });
    return(
        <div className={classes.root}>
            <h1 className={classes.root}>
                Your viewPort size is:
            </h1>
            <div className={classes.root}>
                {size.width} px x {size.heigth} px
            </div>
            <hr/>
        </div>
    );
}

