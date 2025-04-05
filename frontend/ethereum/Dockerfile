FROM trufflesuite/ganache-cli:v6.12.2

# Set default account balance (100 ETH)
ENV ACCOUNT_BALANCE=100000000000000000000

# Create startup script
COPY start.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/start.sh

# Create healthcheck script
COPY healthcheck.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/healthcheck.sh

# Health check using exec form
HEALTHCHECK --interval=30s --timeout=3s \
    CMD ["healthcheck.sh"]

# Run with custom settings
CMD ["/usr/local/bin/start.sh"] 