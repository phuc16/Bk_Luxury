import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";

const themeRooms = createTheme()

themeRooms.typography.h1 = {
    fontWeight:"700",
    [themeRooms.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
    [themeRooms.breakpoints.up('lg')]: {
        fontSize: '4rem',
    },
    [themeRooms.breakpoints.down('sm')]: {
        fontSize: '2rem',
    },
    [themeRooms.breakpoints.down('xs')]: {
        fontSize: '1.3rem',
    },
};

<<<<<<< HEAD
=======
themeRooms.typography.h2 = {
    fontWeight:"400",
    [themeRooms.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
    [themeRooms.breakpoints.up('lg')]: {
        fontSize: '2rem',
    },
    [themeRooms.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    },
    [themeRooms.breakpoints.down('xs')]: {
        fontSize: '1rem',
    },
}

>>>>>>> 18ddc810d56020054c0684efab64e65bc7205185
themeRooms.typography.h3 = {
    fontWeight:"100",
    [themeRooms.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
    [themeRooms.breakpoints.up('lg')]: {
        fontSize: '2.5rem',
    },
    [themeRooms.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    },
    [themeRooms.breakpoints.down('xs')]: {
        fontSize: '1rem',
    },
}

themeRooms.typography.h4 = {
    fontWeight:"500",
    [themeRooms.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
    [themeRooms.breakpoints.up('lg')]: {
        fontSize: '2rem',
    },
    [themeRooms.breakpoints.down('sm')]: {
        fontSize: '1.7rem',
    },
    [themeRooms.breakpoints.down('xs')]: {
        fontSize: '1.5rem',
    },
}

themeRooms.typography.h5 = {
<<<<<<< HEAD
    fontWeight:"400",
=======
    fontWeight:"600",
>>>>>>> 18ddc810d56020054c0684efab64e65bc7205185
    [themeRooms.breakpoints.up('md')]: {
        fontSize: '1.3rem',
    },
    [themeRooms.breakpoints.up('lg')]: {
        fontSize: '1.4rem',
    },
    [themeRooms.breakpoints.down('sm')]: {
<<<<<<< HEAD
        fontSize: '1.2rem',
    },
    [themeRooms.breakpoints.down('xs')]: {
        fontSize: '1rem',
=======
        fontSize: '1rem',
    },
    [themeRooms.breakpoints.down('xs')]: {
        fontSize: '0.8rem',
>>>>>>> 18ddc810d56020054c0684efab64e65bc7205185
    },
}

themeRooms.typography.h6 = {
<<<<<<< HEAD
    fontWeight: "600",
    [themeRooms.breakpoints.up('md')]: {
        fontSize: '1.2rem',
    },
    [themeRooms.breakpoints.up('lg')]: {
        fontSize: '1.3rem',
=======
    fontWeight: "400",
    [themeRooms.breakpoints.up('md')]: {
        fontSize: '0.9rem',
    },
    [themeRooms.breakpoints.up('lg')]: {
        fontSize: '1.2rem',
>>>>>>> 18ddc810d56020054c0684efab64e65bc7205185
    },
    [themeRooms.breakpoints.down('sm')]: {
        fontSize: '0.9rem',
    },
    [themeRooms.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
    },
};

<<<<<<< HEAD

=======
>>>>>>> 18ddc810d56020054c0684efab64e65bc7205185
themeRooms.typography.body1 = {
    fontWeight: "400",
    [themeRooms.breakpoints.up('md')]: {
        fontSize: '1.1rem',
    },
    [themeRooms.breakpoints.up('lg')]: {
        fontSize: '1.1rem',
    },
    [themeRooms.breakpoints.down('sm')]: {
        fontSize: '1rem',
    },
    [themeRooms.breakpoints.down('xs')]: {
        fontSize: '0.6rem',
    },
};

themeRooms.typography.body2 = {
    fontWeight: "400",
    [themeRooms.breakpoints.up('md')]: {
        fontSize: '0.9rem',
    },
    [themeRooms.breakpoints.up('lg')]: {
        fontSize: '1rem',
    },
    [themeRooms.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
    },
    [themeRooms.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
    },
};

<<<<<<< HEAD


=======
>>>>>>> 18ddc810d56020054c0684efab64e65bc7205185
export default themeRooms;
