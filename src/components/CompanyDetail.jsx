import React from "react";
import {useHistory} from 'react-router-dom'
import {companiesRef, employeesRef} from "../firebaseProvider";
import CompanyCard from "./CompanyCard";
import EmployeeCard from "./EmployeeCard";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default function CompanyDetail(props) {
    const {companyId} = props.match.params
    const history = useHistory()
    const companyRef = companiesRef.doc(companyId)
    const companyEmployeesRef = employeesRef.where('employer', '==', companyId)
    const [company, setCompany] = React.useState({})
    const [employees, setEmployees] = React.useState([])
    const detailPage = React.useState(false)
    React.useEffect(() => {

        const getCompany = async () => {
            const doc = await companyRef.get()
            if (doc.exists) {
                setCompany(doc.data())
            } else history.push('/')
        }
        const setCompanyEmployees = async () => {
            await companyEmployeesRef.onSnapshot(snapshot => {
                const data = []
                console.log(snapshot)
                if (!snapshot.empty) {
                    snapshot.forEach(doc => data.push(doc.data()))
                    setEmployees(data)
                }
            })
        }
        getCompany()
        setCompanyEmployees()
    }, [])
    return (
        <Container component={"main"} maxWidth={"sm"}>
            {!!company && <CompanyCard data={company} companyId={companyId} detailPage={detailPage}/>}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                margin: '1.2rem'
            }}>
                <Typography variant={'h5'} gutterBottom>Employees</Typography>
                {
                    employees.map((emp) => <EmployeeCard data={emp}/>)
                }
            </div>

        </Container>
    )
}