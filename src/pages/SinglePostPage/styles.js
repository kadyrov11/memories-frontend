import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  leftSide:{
    position: 'relative',
    paddingLeft: `${theme.spacing(5)}px !important`,
  },
  goBack:{
    position: 'absolute',
    backgroundColor: 'white',
    top: theme.spacing(1),
    left: theme.spacing(1),
    cursor: 'pointer'
  }
}))