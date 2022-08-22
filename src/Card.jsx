import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendar, faDollarSign, faClipboardList,faComments} from "@fortawesome/free-solid-svg-icons";

function Card({cards}) {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
                            <div className={`card border-left-${cards.theme} shadow h-100 py-2`}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={`text-xs font-weight-bold text-${cards.theme} text-uppercase mb-1`}>
                                                {cards.title}</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{cards.price}</div>
                                        </div>
                                        {
                            cards.isTrue ? <div class="col">
                            <div class="progress progress-sm mr-2">
                                <div class="progress-bar bg-info" role="progressbar"
                               
                                    style={{width: "50%"}} ariavaluenow= "50" ariavaluemin="0"
                                    ariavaluemax="100" ></div>
                            </div>
                        </div> : ""
                        }
                                        <div className="col-auto">
                                        <FontAwesomeIcon icon = {cards.icon} className=" fa-2x text-gray-300"/>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  )
}

export default Card