import { useStyles } from "./pelette.css";
export const Palette =()=>{
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
            <div className={classes.main}>
                main
            </div>
            <div className={classes.dark}>
                dark
            </div>
            <div className={classes.ligth}>
                ligth
            </div>
            <div className={classes.main2}>
                main               
            </div>
            <div className={classes.dark2}>
                dark
            </div>
            <div className={classes.ligth2}>
                ligth
            </div>
        </div>
    );
}
