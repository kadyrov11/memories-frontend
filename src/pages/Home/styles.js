import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    [theme.breakpoints.up("md")]:{
      mainContainer:{
        flexDirection: "row-reverse",
        position: 'relative'
      },
    },
    signInWarning:{
      padding: theme.spacing(2),
      marginTop: theme.spacing(1),
      backgroundColor: theme.palette.warning.light,
      color: 'white'
    }
  })
);