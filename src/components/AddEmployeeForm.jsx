import {Formik, Form} from "formik";

import * as Yup from 'yup'
import Typography from "@material-ui/core/Typography";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {employeesRef} from "../firebaseProvider";

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }, formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
    },
}));
export default function AddEmployeeForm({companies}) {
    const classes = useStyles()

    return (
        <Formik
            initialValues={{
                name: '',
                address: '',
                employer:''
            }}
            validationSchema={Yup.object({
                name: Yup.string().required(),
                address: Yup.string().required(),
                employer: Yup.string().required()
            })}
            onSubmit={async (values, {resetForm}) => {
                await employeesRef.add(values)
                resetForm()
            }}
        >
            {formik => (<Form>
                    <Typography component="h1" variant="h5">
                        Add new Employee
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
                        name="address"
                        label="Address"
                        id="address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                        error={!!formik.errors.address}
                        helperText={formik.errors.address}
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel>Employer</InputLabel>
                        <Select
                            error={!!formik.errors.employer}
                            helperText={formik.errors.employer}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.employer}
                            name={'employer'}
                            id={'employer'}

                        >{companies.map(([id, {name}]) => <MenuItem key={id} value={id}>{name}</MenuItem>)}
                        </Select>
                    </FormControl>
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