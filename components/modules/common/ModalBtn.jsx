"use client"

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {forwardRef, useState} from "react";
import Box from "@mui/material/Box";
import TableViewIcon from '@mui/icons-material/TableView';
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import InfoIcon from '@mui/icons-material/Info';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ModalBtn({label, children, icon}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function renderIcon(icon) {
        switch (icon) {
            case "table":
                return <TableViewIcon />;
            case "list":
                return <FormatListNumberedRtlIcon />;
            default:
                return <InfoIcon />
        }
    }

    const buttonIcon = renderIcon(icon);

    return (
        <div>
            <Button variant="contained" startIcon={buttonIcon} onClick={handleClickOpen}>
                {label}
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <Typography sx={{ ml: "auto", flex: 1 }} variant="h6" component="div">
                            {label}
                        </Typography>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ mr: 1, flex: 1 }} variant="h6" component="div">
                                خروج
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box>
                    {children}
                </Box>
            </Dialog>
        </div>
    );
}

export default ModalBtn;