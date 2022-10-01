import { makeStyles } from "@material-ui/core";
export const useStyles=makeStyles(theme =>({
    wrapper:{
        minHeight:'100vh',
        display:'flex',
        flexDirection:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    main:{
        background: theme.palette.colors.main,
        color:theme.palette.colors.constrastText,
        width:'10rem',
        heigth:'10rem',
    },
    dark:{
        background: theme.palette.colors.dark,
        color:theme.palette.colors.constrastText,
        width:'10rem',
        heigth:'10rem',
    },
    ligth:{
        background: theme.palette.colors.ligth,
        color:theme.palette.colors.constrastText,
        width:'10rem',
        heigth:'10rem',
    },
    main2:{
        background: theme.palette.secondary.main,
        color:theme.palette.secondary.constrastText,
        width:'10rem',
        heigth:'10rem',
    },
    dark2:{
        background: theme.palette.secondary.dark,
        color:theme.palette.secondary.constrastText,
        width:'10rem',
        heigth:'10rem',
    },
    ligth2:{
        background: theme.palette.secondary.ligth,
        color:theme.palette.secondary.constrastText,
        width:'10rem',
        heigth:'10rem',
    },
}));
// export default useStyles;