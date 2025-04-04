FROM postgres:15

# Set the default encoding to UTF8
ENV LANG=en_US.utf8

# Copy initialization scripts
COPY database/migrations/init.sql /docker-entrypoint-initdb.d/

# Copy PostgreSQL configuration
COPY database/config/postgresql.conf /etc/postgresql/postgresql.conf

# Copy and set up healthcheck
COPY database/config/healthcheck.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/healthcheck.sh

HEALTHCHECK --interval=30s --timeout=3s \
    CMD ["healthcheck.sh"]

EXPOSE 5432