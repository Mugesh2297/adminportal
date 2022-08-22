import React from 'react';
import Card from './Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendar, faDollarSign, faClipboardList,faComments} from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
    const cards = [{
        title: "EARNINGS (MONTHLY)",
        price:"$40,000",
        theme: "primary",
        icon: "Calendar",
    },
    {
        title: "EARNINGS (ANNUAL)",
        price:"$215,000",
        theme: "success",
        icon: "DollarSign",
    },
    {
        title: "TASKS",
        price:"50%",
        theme: "info",
        icon: "ClipboardList",
        isTrue: true,
    },
    {
        title: "PENDING REQUESTS",
        price:"18",
        theme: "warning",
        icon: "Comments",
    },
    



]
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>

            <div className="row">
         {
            cards.map((cards)=>{
                return <Card cards={cards}></Card>
            })
         }
            </div>

        </div>

    )
}

export default Dashboard