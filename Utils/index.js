import { ethers } from "ethers";
import Web3Model from "web3modal";

import {
  LookUpContract_ABI,
  LookUpContract_ADDRESS,
  ERC20Generator_ADDRESS,
  ERC20Generator_ABI,
} from "../Context/constants";

export const CheckIfWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install Metamask");
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

export const connectWallet = async () => {
  try {
    if (!window.ethereum) return console.log("Install Metamask");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

const fetchContract = (signerOrProvider) => {
  return new ethers.Contract(
    LookUpContract_ADDRESS,
    LookUpContract_ABI,
    signerOrProvider
  );
};

export const connectingWithContract = async () => {
  try {
    const web3Model = new Web3Model();
    const connection = await web3Model.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (e) {
    console.log(error);
  }
};

export const getBalance = async () => {
  try {
    const web3Model = new Web3Model();
    const connection = await web3Model.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    return await signer.getBalance();
  } catch (error) {
    console.log(error);
  }
};

export const getContractBalance = async () => {
  try {
    const web3Model = new Web3Model();
    const connection = await web3Model.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    var numStr = await provider.getBalance(ERC20Generator_ADDRESS);
    // numStr = parseInt(numStr);
    console.log((numStr._hex));
    return Number(numStr);
  } catch (e) {
    console.log(e);
  }
};

const fetchTokenContract = (signerOrProvider) => {
  return new ethers.Contract(
    ERC20Generator_ADDRESS,
    ERC20Generator_ABI,
    signerOrProvider
  );
};

export const connectingNativeTokenContract = async () => {
  try {
    const web3Model = new Web3Model();
    const connection = await web3Model.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    // console.log(await provider.getCode(ERC20Generator_ADDRESS));
    const signer = provider.getSigner();
    // console.log(signer);
    const contract = fetchTokenContract(signer);
    return contract;
  } catch (e) {
    console.log(error);
  }
};
