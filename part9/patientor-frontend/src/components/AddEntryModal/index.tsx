import { Dialog, DialogTitle, DialogContent, Divider, Alert } from '@mui/material';
import AddEntryForm from './AddEntryForm';
import { EntryWithoutId } from '../../types';

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (newEntryData: EntryWithoutId) => void;
  error?: string;
}

const AddEntryModal = ({modalOpen,onClose,onSubmit,error}:Props) => {
  return (
    <Dialog fullWidth={true} open={modalOpen} onClose={() => onClose()}>
      <DialogTitle>Add a new Entry</DialogTitle>
      <Divider />
      <DialogContent>
        {error && <Alert severity="error" sx={{mb:2}}>{error}</Alert>}
        <AddEntryForm onSubmit={onSubmit} onCancel={onClose}/>
      </DialogContent>
    </Dialog>
  )
}

export default AddEntryModal