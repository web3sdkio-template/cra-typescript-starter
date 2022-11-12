import { ConnectWallet } from "@web3sdkio/react";
import "./styles/Home.css";

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://web3sdk.io/">web3sdkio</a>!
        </h1>

        <p className="description">
          Get started by configuring your desired network in{" "}
          <code className="code">src/index.tsx</code>, then modify the{" "}
          <code className="code">src/App.tsx</code> file!
        </p>

        <div className="connect">
          <ConnectWallet />
        </div>

        <div className="grid">
          <a href="https://portal.web3sdk.io/" className="card">
            <h2>Portal &rarr;</h2>
            <p>
              Guides, references and resources that will help you build with
              web3sdkio.
            </p>
          </a>

          <a href="https://web3sdk.io/dashboard" className="card">
            <h2>Dashboard &rarr;</h2>
            <p>
              Deploy, configure and manage your smart contracts from the
              dashboard.
            </p>
          </a>

          <a href="https://portal.web3sdk.io/templates" className="card">
            <h2>Templates &rarr;</h2>
            <p>
              Discover and clone template projects showcasing web3sdkio features.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
