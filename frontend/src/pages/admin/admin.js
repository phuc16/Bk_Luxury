import EnhancedTable from "./data-table";
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1
    },
    imgList:{
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        height: '120vh',
        minHeight: '100px'
    },
    imgItem:{
        width: '70%',
        paddingBottom: '20px',
        alignItems: 'center'
    }


}));

export default function Admin(){
    const classes = useStyles(); 
    return (
        <div className="container" style={{marginTop: '100px'}}>
            <EnhancedTable/>
        </div>
      );
}