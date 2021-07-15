import {Formik, Form} from "formik";

import * as Yup from 'yup'
import Typography from "@material-ui/core/Typography";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {companiesRef} from "../firebaseProvider";

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export default function AddCompanyForm() {
    const classes = useStyles()
    return (
        <Formik
            initialValues={{
                name: '',
                address: '',
                revenue: '',
                phone: '',
            }}
            validationSchema={Yup.object({
                name: Yup.string().required(),
                address: Yup.string().required(),
                revenue: Yup.number().required().positive(),
                phone: Yup.string().required().matches(/^[()\-\d ]+$/, 'not a valid phone number')
            })}
            onSubmit={async ( values, {resetForm} ) => {
                await companiesRef.add(values)
                resetForm()
            }}
        >
            {formik => (<Form>
                    <Typography component="h1" variant="h5">
                        Create new Company
                    </Typography>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        error={!!formik.errors.name}
                        helperText={formik.errors.name}
                    />
                    <TextField
                        variant="outlined"
                        margin="dense"
                        required
                        fullWidth
                        name="revenue"
                        label="Revenue"
                        id="revenue"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.revenue}
                        error={!!formik.errors.revenue}
                        helperText={formik.errors.revenue}
                    />
                    <TextField
                        variant="outlined"
                        margin="dense"
                        required
                        fullWidth
                        name="address"
                        label="Address"
                        id="address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                        error={!!formik.errors.address}
                        helperText={formik.errors.address}
                    />

                    <TextField
                        variant="outlined"
                        margin="dense"
                        required
                        fullWidth
                        name="phone"
                        label="Phone"
                        id="address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        error={!!formik.errors.phone}
                        helperText={formik.errors.phone}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={!formik.isValid || formik.isSubmitting}
                    >
                        Save
                    </Button>
                </Form>
            )}
        </Formik>
    )
}