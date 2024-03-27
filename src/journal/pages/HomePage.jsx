import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from '../views/index';
import { IconButton } from '@mui/material';
import { AddOutlined } from "@mui/icons-material";

export const HomePage = () => {
    return (
        <JournalLayout>

            <NothingSelectedView/>

            {/* <NoteView mt={5} mb={5} sx ={{pb: 5}}/> */}

            <IconButton
                size ='large'
                sx={{
                    color:'white',
                    backgroundColor: 'error.main',
                    ':hover': {backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right:50,
                    bottom: 50,
                }}
            >
             <AddOutlined sx ={{ fontSize:30, color:'white' }} />
            </IconButton>
        </JournalLayout>

    )
}
