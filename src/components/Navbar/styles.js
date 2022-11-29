import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    padding: '10px 30px',
    marginBottom: '30px',
    borderRadius: 15,
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  heading: {
    display: 'none',
    fontSize: '50px',
    color: '#515151',
    marginLeft: '15px'
  },
  image: {
    height: '50px',
    
  },
  user:{
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px'
  },
  fullName:{
    display: 'none',
    fontSize: '20px',
    marginRight: '10px',
    color: '#515151'
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

  [theme.breakpoints.up("sm")]:{
    heading:{
      display: "inline"
    },
    fullName:{
      display: 'inline',
    },
  }
  })
);