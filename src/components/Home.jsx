import FormProvider from "./FormProvider";
import AddCompanyForm from "./AddCompanyForm";
import React from "react";
import AddEmployeeForm from "./AddEmployeeForm";
import {companiesRef} from "../firebaseProvider";
import CompanyCard from "./CompanyCard";

export default function Home() {

    const [companies, setCompanies] = React.useState([])
    React.useEffect(() => {
        const getCompanies = async () => {
            await companiesRef.onSnapshot(snapshot => {
                let options = []
                if (!snapshot.empty) {
                    snapshot.forEach(doc => {
                        options.push([doc.id, doc.data()])
                    })
                }
                setCompanies(options)
            }, error => {

            })
        }
        getCompanies()

    }, [])
    return (
        <div className={'HomeContainer'}>
            <div className="CompanyListContainer">
                <h1>Company List</h1>
                {companies.map(([id, data]) => <CompanyCard key={id} data={data} companyId={id}/>)}
            </div>
            <div className="WidgetContainer">
                <FormProvider>
                    <AddCompanyForm/>
                </FormProvider>
                <FormProvider>
                    <AddEmployeeForm companies={companies}/>
                </FormProvider>
            </div>

        </div>
    )
}