"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from "react"
import axios from 'axios';
import { useAddFoodMutation, useGetSingleFoodQuery, useUpdateFoodMutation } from '@/redux/features/getFoods';
import { toast } from 'sonner';

interface InitialValueType {
    name: string;
    price: string;
    category: string;
    description: string;
    id: string
}
interface AddFoodModalType {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
    initialValue?: InitialValueType
}

export default function AddFoodModal({ setIsOpen, isOpen, initialValue }: AddFoodModalType) {
    const [fileEvent, setFileEvent] = useState(null)
    const [imageError, setImageError] = useState("")
    const [loading, setLoading] = useState(false)
    console.log("initialValue?.id >", initialValue?.id)
    const [addFood] = useAddFoodMutation()
    const [updateFood] = useUpdateFoodMutation()

    const handleClose = () => {
        setIsOpen(false);
        setImageError("")
        formik.resetForm()
        setFileEvent(null)
    }


    const handleImageUpload = async (event: any) => {
        if (event) {
            const [imgData] = event.target.files
            const formData = new FormData()
            formData.append('file', imgData)
            formData.append("upload_preset", "apper_upload");
            try {
                const res = await axios.post('https://api.cloudinary.com/v1_1/da0dxyn2l/image/upload', formData)
                return res?.data?.url

            } catch (error: any) {
                console.log("image upload error >", error)
                setImageError("You should upload valid image here!")
            }
        } else {
            if (!initialValue) {
                setImageError("Please add one image for this food")
                return
            }
        }
    }




    const formik = useFormik({
        initialValues: {
            name: initialValue?.name ? initialValue?.name : "",
            price: initialValue?.price ? parseInt(initialValue?.price) : 0,
            description: initialValue?.description ? initialValue?.description : "",
            category: initialValue?.category ? initialValue?.category : "",
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            name: Yup.string().required("Please add name for this food"),
            price: Yup.number().required("Please add price for this food"),
            description: Yup.string().required("Please add description here"),
            category: Yup.string().required("Please add category here"),
        }),
        onSubmit: async (values) => {
            setLoading(true)

            try {
                if (!initialValue) {
                    if (!fileEvent) {
                        return
                    }
                }
                const image = await handleImageUpload(fileEvent)
                if (initialValue) {

                    const res = await updateFood({ ...values, image, id: initialValue.id })
                    //@ts-ignore
                    if (res?.data) {
                        toast.success("successfully updated a food")
                        formik.resetForm()
                        setImageError("")
                        setFileEvent(null)
                        setIsOpen(false)
                    }
                } else {
                    const res = await addFood({ ...values, image })
                    //@ts-ignore  
                    if (res?.data) {
                        toast.success("successfully added a food")
                        formik.resetForm()
                        setImageError("")
                        setFileEvent(null)
                        setIsOpen(false)
                    }
                }
            } catch (error: any) {
                console.log("error > ", error.message)
                setLoading(false)
            }
        },
    });



    return (
        <React.Fragment>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                PaperProps={{
                    component: 'div',
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
                <form onSubmit={formik.handleSubmit}>

                    <DialogContent>

                        <label className="block text-foreground-light text-sm" htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            placeholder="Name"
                            type="text"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2 mb-1"
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <p className='text-sm text-red-500 '>{formik.errors.name}</p>
                        ) : null}


                        <label className="block text-foreground-light text-sm" htmlFor="price">Price</label>
                        <input
                            id="price"
                            name="price"
                            placeholder="price"
                            min={0}
                            type="number"
                            className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2 mb-1"

                            value={formik.values.price}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.price && formik.errors.price ? (
                            <p className='text-sm text-red-500 '>{formik.errors.price}</p>
                        ) : null}

                        <label className="block text-foreground-light text-sm" htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted placeholder-foreground-muted group  border border-destructive-500 placeholder:text-destructive-400 text-sm px-4 py-2 mb-1 "
                            rows={3}

                        />
                        {formik.touched.description && formik.errors.description ? (
                            <p className='text-sm text-red-500 '>{formik.errors.description}</p>
                        ) : null}

                        <label className="block text-foreground-light text-sm" htmlFor="category">Category</label>
                        <select
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            name="category"
                            id="category"
                            className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2 mb-1'>
                            <option value="appetizers">Appetizers</option>
                            <option value="soups">Soups</option>
                            <option value="salads">Salads</option>
                            <option value="sides">Sides</option>
                            <option value="desserts">Desserts</option>
                            <option value="beverages">Beverages</option>
                        </select>
                        {formik.touched.category && formik.errors.category ? (
                            <p className='text-sm text-red-500 '>{formik.errors.category}</p>
                        ) : null}

                        <input
                            name="image"
                            id='image'
                            onChange={(e: any) => setFileEvent(e)}
                            // value={fileEvent}
                            type="file"
                            className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2 mt-5'
                        />
                        {imageError ? (
                            <p className='text-sm text-red-500 '>{imageError}</p>
                        ) : null}

                        <div className='mt-4'>
                            <Button onClick={handleClose} className='capitalize'>Cancel</Button>
                            <Button variant='contained' type='submit' className='capitalize'>
                                {initialValue ? "Update Food" : "Add food"}
                            </Button>
                        </div>
                    </DialogContent>
                </form>

            </Dialog>

        </React.Fragment >
    );
}