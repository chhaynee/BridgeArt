FROM trufflesuite/ganache-cli:v6.12.2

# Create healthcheck script
COPY --chmod=755 <<-"EOF" /usr/local/bin/healthcheck.sh
#!/bin/sh
nc -z localhost 8545 || exit 1
EOF

# Create start script
COPY --chmod=755 <<-"EOF" /usr/local/bin/start.sh
#!/bin/sh
ganache-cli \
    --port 8545 \
    --networkId 1337 \
    --chainId 1337 \
    --gasLimit 12000000 \
    --defaultBalanceEther 100 \
    --accounts 10 \
    --mnemonic "test test test test test test test test test test test junk" \
    --host 0.0.0.0
EOF

HEALTHCHECK --interval=30s --timeout=3s \
    CMD ["healthcheck.sh"]

EXPOSE 8545
CMD ["/usr/local/bin/start.sh"] 