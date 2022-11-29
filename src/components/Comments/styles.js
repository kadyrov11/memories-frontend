import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
 commentsWrapper:{
  maxHeight: '50vh',
  overflowY: 'scroll'
 },
 inputWrapper:{
    padding: theme.spacing(1)
 },
 submitBtn:{
  marginTop: theme.spacing(1)
 }
}))