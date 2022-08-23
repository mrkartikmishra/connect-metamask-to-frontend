import React, { useState } from 'react';
import { ethers } from 'ethers';
import Header from '../components/header';

const Index = () => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState(0);

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(accounts[0]);
    setIsConnected(true);
    setCurrentAccount(accounts[0]);
    setBalance(ethers.utils.formatEther(balance));
  }

  return(
    <div>
      <Header />
      {isConnected ? (
        <div className="mainContainer">
          <div className='card'>
            <h3>Hello <i>{currentAccount}</i></h3>
            <p>Your Wallet Balance: {balance} ETH</p>
          </div>
        </div>
      ) : (
        <div className="mainContainer">
          <div className='card'>
            <p>Not Connected</p>
            <button onClick={connectWallet}>Connect Wallet</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Index;