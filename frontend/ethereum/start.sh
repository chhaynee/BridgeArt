#!/bin/sh

# Start ganache with custom settings
ganache-cli \
    --port 8545 \
    --networkId 1337 \
    --chainId 1337 \
    --gasLimit 12000000 \
    --defaultBalanceEther 100 \
    --accounts 10 \
    --mnemonic "test test test test test test test test test test test junk" \
    --host 0.0.0.0 