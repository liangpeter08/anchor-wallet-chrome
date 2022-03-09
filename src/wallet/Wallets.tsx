import React, { useEffect, useState } from "react";
import styled from "styled-components";
import currencyFormatter from "currency-formatter";

const walletEndpoint = "https://development.anchor.fm/api/proxy/v3/wallet";

const WalletWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 160px;
  background-color: white;
  color: black;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Section = styled.div`
  padding: 20px;
`;

const PendingSection = styled.div`
  font-size: 10px;
  color: rgb(127, 130, 135);
`;

function Wallet({ cookieInfo }: { cookieInfo: string }) {
  const [wallet, setWallet] = useState<any>();

  const fetchWallet = async () => {
    const res = await fetch(walletEndpoint, {
      method: "GET",
      headers: {
        cookie: cookieInfo,
      },
    });

    const data = await res.json();
    setWallet(data);
  };

  useEffect(() => {
    if (cookieInfo) {
      fetchWallet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookieInfo]);

  const allTimeEarnings = currencyFormatter.format(
    (wallet?.allTimeWalletAmountInCents ?? 0) / 100,
    {
      code: "USD",
    }
  );

  const currentWalletEarnings = currencyFormatter.format(
    (wallet?.currentWalletAmountInCents ?? 0) / 100,
    {
      code: "USD",
    }
  );

  const pendingEarnings = currencyFormatter.format(
    (wallet?.pendingWalletAmountInCents ?? 0) / 100,
    {
      code: "USD",
    }
  );

  return (
    <Wrapper>
      <Section>
        <h3>Total earned all time</h3>
        <WalletWrapper>{allTimeEarnings}</WalletWrapper>
      </Section>
      <Section>
        <h3>Current Balance</h3>
        <WalletWrapper>
          <div>
            <div>{currentWalletEarnings}</div>
            <PendingSection>Pending: {pendingEarnings}</PendingSection>
          </div>
        </WalletWrapper>
      </Section>
    </Wrapper>
  );
}

export default Wallet;
