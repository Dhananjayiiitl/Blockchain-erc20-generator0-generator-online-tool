import React, { useEffect } from "react";
import {Table,TableTwo} from "../index"
const ProfileMain = ({
  getAllERC20TokenListed,
  getUserERC20Tokens,
  setOpen,
  open,
  fee,
  createERC20,
  address,
  balance,
  withdrawFund,
  donateFund,
  getAllDonation,
  mainBalance,
  nativeToken
}) => {
  const details=[
    {
      title:"Created",
      value:`#${getUserERC20Tokens?.length || 0}`
    },
    {
      title:"ERC20s",
      value:`#${getAllERC20TokenListed?.length ||0}`
    },
    {
      title:"Listing Fee",
      value:`${fee} Matic`
    },
     {
      title:"Doners",
      value:`#${getAllDonation?.length || 0}`
     },
     {
      title:`${nativeToken?.symbol} Token`,
      value:`${nativeToken?.balance}`,
     },
     {
      title:"Contract Balance",
      value:`${mainBalance==undefined? "Only Owner See":mainBalance}`
     }
  ]
  const contractOwner=0xE5678f6383B81A413aAd68579029f2d88d7CE6C3;
    useEffect(() => {
      console.log(getAllERC20TokenListed)
    }, []);
  return <div class="col-xl-9 col-lg-9 col-md-8">
    <div class="row user-dashboard">
      <div class="col-cl-12 col-lg-12 col-md-12">
        <div class="user-top">
          <div class="user-balance">
            <span>Your Balance</span>
            <div class="main-bal">{balance?.slice(1,7)} Matic</div>
          </div>
          <div clas="userboard-btn">
            <a class="user-btn coin-btn" onClick={()=>donateFund()}>
              Donate 1 Matic
            </a>
            {address==contractOwner && (
              <a onClick={()=>withdrawFund()} class="user-btn color-btn">
                Withdraw Funds
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
    <div class="row dashboard-content">
      {details.map((detail,i)=>(
        <div class="col-xl-4 col-lg-4 col-md-6" key={i+1}>
          <div class="single-dash-head">
            <div class="dashboard-amount d-flex flex-wrap align-items-center">
              <div class="amount-content">
                <span class="pro-name">{detail.title}</span>
                <span class="pro-name">{detail.value}</span>
              </div>
              <div class="invest-tumb">
                <img src={`img/icon/d${i+1}.png`} alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    {open=="Dashboard"?(
      <Table
        title="All Created ERC20 Tokens"
        tableData={getAllERC20TokenListed}/>
    ):open=="Your Token"?(
      <Table title="Your Tokens" tableData={getUserERC20Tokens}/>
    ):open =="Donation"?(
      <TableTwo title="All User donations" tableData={getAllDonation}/>
    ):(
      ""
    )}
  </div>;
};

export default ProfileMain;
