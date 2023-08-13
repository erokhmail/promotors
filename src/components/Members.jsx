import { useState, useEffect } from 'react'

import { ReactComponent as FbIcon } from "../assets/images/icons/memFb.svg"
import { ReactComponent as InstIcon } from "../assets/images/icons/memInst.svg"
import { ReactComponent as TwIcon } from "../assets/images/icons/memTw.svg"
import { ReactComponent as VbIcon } from "../assets/images/icons/memVb.svg"


function Members() {
    const [membersData, setmembersData] = useState([]);

    useEffect(() => {
        fetch('/data/membersData.json')
            .then(resp => resp.json())
            .then(resp => {
                setmembersData(resp);
            })
    }, [])

    return (
        <div className="members">
            {membersData.map((item, index) => {
                return (
                    <div className="member" key={index}>
                        <div className="photo-wrap">
                            <img src={item.photo} alt={item.name} />
                        </div>
                        <div className="detail-info">
                            <div className="personal">
                                <div className="name">{item.name}</div>
                                <div className="position">{item.position}</div>
                            </div>
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href={item.socFb} className="soc-link" target="_blank" rel="noreferrer nofollow"
                                            title={item.socFbName}></a>
                                        <div className="icon">
                                            <FbIcon />
                                        </div>
                                    </li>
                                    <li>
                                        <a href={item.socInst} className="soc-link" target="_blank" rel="noreferrer nofollow"
                                            title={item.socInstName}></a>
                                        <div className="icon">
                                            <InstIcon />
                                        </div>
                                    </li>
                                    <li>
                                        <a href={item.socTw} className="soc-link" target="_blank" rel="noreferrer nofollow"
                                            title={item.socTwName}></a>
                                        <div className="icon">
                                            <TwIcon />
                                        </div>
                                    </li>
                                    <li>
                                        <a href={item.socVb} className="soc-link" target="_blank" rel="noreferrer nofollow"
                                            title={item.socVbName}></a>
                                        <div className="icon">
                                            <VbIcon />
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default Members