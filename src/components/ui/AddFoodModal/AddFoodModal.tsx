import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';


interface AddFoodModalType {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
}

export default function AddFoodModal({ setIsOpen, isOpen }: AddFoodModalType) {


    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <React.Fragment>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Add a new food in your list</DialogTitle>
                <DialogContent>
                    <label className="block text-foreground-light text-sm" htmlFor="name">Name</label>
                    <input
                        data-size="medium"
                        autoComplete="email"
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                        className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2 mb-1" value=""
                    />

                    <label className="block text-foreground-light text-sm" htmlFor="price">Name</label>
                    <input
                        data-size="medium"
                        autoComplete="email"
                        id="price"
                        name="price"
                        placeholder="price"
                        type="number"
                        className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2 mb-1" value=""
                    />

                    <label className="block text-foreground-light text-sm" htmlFor="description">Description</label>
                    <input
                        data-size="medium"
                        autoComplete="email"
                        id="description"
                        name="description"
                        placeholder="description"
                        type="number"
                        className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2 mb-1" value=""
                    />

                    <label className="block text-foreground-light text-sm" htmlFor="category">Category</label>
                    <select name="" id="" className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2 mb-1'>
                        <option value="appetizers">Appetizers</option>
                        <option value="soups">Soups</option>
                        <option value="salads">Salads</option>
                        <option value="sides">Sides</option>
                        <option value="desserts">Desserts</option>
                        <option value="beverages">Beverages</option>
                    </select>


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant='contained' type="submit">Add Food</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}